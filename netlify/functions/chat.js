// netlify/functions/chat.js
const fetch = require('node-fetch');

const formatMessages = (history = []) =>
  history
    .map((m) => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
    .join('\n');

exports.handler = async (event) => {
  try {
    console.log('🔎 STARTING HANDLER');

    const hfKey = process.env.HUGGINGFACE_API_KEY;
    if (!hfKey) {
      console.error('❌ HUGGINGFACE_API_KEY is missing in environment!');
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: 'Server misconfigured. No HF API Key.' }),
      };
    }
    console.log('✅ HUGGINGFACE_API_KEY found');

    // Parse body
    console.log('📦 Raw event.body:', event.body);
    const body = JSON.parse(event.body || '{}');
    const history = Array.isArray(body.history) ? body.history : [];
    console.log('📝 Parsed history:', history);

    // Build a simple prompt from chat history + a final assistant cue
    const prompt =
      formatMessages(history) +
      (history.length ? '\n' : '') +
      'Assistant:';

    // Call Hugging Face Inference API
    const url =
      'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';

    const payload = { inputs: prompt };

    console.log('🌐 Sending request to Hugging Face…');
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hfKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // If HF returns non-200, capture raw text (often HTML or plain text like "Not Found")
    if (!resp.ok) {
      const raw = await resp.text();
      console.error(`❌ HF responded ${resp.status}: ${raw}`);
      return {
        statusCode: 502,
        body: JSON.stringify({
          reply: `HF Error ${resp.status}: ${raw.slice(0, 500)}`,
        }),
      };
    }

    const data = await resp.json();
    console.log('✅ HF raw response:', JSON.stringify(data));

    // HF text-generation style response: [{ generated_text: "..." }]
    let reply = '';
    if (Array.isArray(data) && data[0] && typeof data[0].generated_text === 'string') {
      // generated_text contains the whole prompt + completion; extract what the assistant just added
      const full = data[0].generated_text;
      const lastAssistantIndex = full.lastIndexOf('Assistant:');
      reply =
        lastAssistantIndex >= 0 ? full.slice(lastAssistantIndex + 'Assistant:'.length).trim() : full.trim();
    } else if (data && data.generated_text) {
      reply = String(data.generated_text).trim();
    } else if (data && data.error) {
      console.error('❌ HF returned error object:', data.error);
      return {
        statusCode: 502,
        body: JSON.stringify({ reply: `HF Error: ${data.error}` }),
      };
    } else {
      console.error('❌ Unexpected HF response shape');
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: 'Unexpected Hugging Face response.' }),
      };
    }

    console.log('✅ Returning successful response to client');
    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error('❌ Server error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Oops! Something went wrong on the server.' }),
    };
  }
};
