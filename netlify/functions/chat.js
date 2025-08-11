const fetch = require('node-fetch');

const formatMessages = (history) =>
  history.map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text,
  }));

exports.handler = async (event) => {
  try {
    console.log('🔎 STARTING HANDLER');

    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY is missing in environment!');
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: 'Server misconfigured. No API Key.' }),
      };
    }

    console.log('✅ OPENAI_API_KEY found');

    console.log('📦 Raw event.body:', event.body);
    const body = JSON.parse(event.body || '{}');
    const history = body.history || [];

    console.log('📝 Parsed history:', history);

    const openAIResponse = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: { text: history.map(m => m.text).join("\n") } }),
    });

    console.log('🌐 Sent request to OpenAI');

    const data = await openAIResponse.json();

    console.log('✅ OpenAI API raw response:', JSON.stringify(data));

if (data.error) {
  console.error('❌ OpenAI returned error:', data.error);
  return {
    statusCode: 500,
    body: JSON.stringify({ reply: `OpenAI Error: ${data.error.message}` }),
  };
}

if (!data.choices || !data.choices[0] || !data.choices[0].message) {
  console.error('❌ Unexpected response format from OpenAI');
  return {
    statusCode: 500,
    body: JSON.stringify({ reply: 'Error: Unexpected OpenAI response.' }),
  };
}


    console.log('✅ Returning successful response to client');

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.choices[0].message.content }),
    };

  } catch (error) {
    console.error('❌ Server error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Oops! Something went wrong on the server.' }),
    };
  }
};
