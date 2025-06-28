// netlify/functions/chat.js
const fetch = require('node-fetch'); // Only for Node < 18 (Netlify usually has it)

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is missing!');
  return {
    statusCode: 500,
    body: JSON.stringify({ reply: 'Server misconfigured. No API Key.' }),
  };
}

const formatMessages = (history) =>
  history.map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text,
  }));

exports.handler = async (event) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is missing!');
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: 'Server misconfigured. No API Key.' }),
      };
    }

    const body = JSON.parse(event.body || '{}');
    const history = body.history || [];

    console.log('Received history:', history);

    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `
You are a helpful assistant that answers questions about Beatriz, a 20-year-old computer engineering student who has experience in fullstack development, works with embedded systems, and loves AI & Machine learning. Guide users to the correct section of her portfolio site when asked and answer questions about her based on the information provided in website.
You are enthusiastic, patient, and friendly. You will provide clear and concise answers to the user's questions.
You will prompt users if they want to go to About, Projects, or Experience sections of the Beatriz's portfolio site.
You know fun facts about her and can share them with the user. You can ask them if they want to know any fun facts. Beatriz's fun facts:
- She loves to cook
- She has traveled to 16 countries, her favorite one was Morocco
- She is a fan of the movie "Forrest Gump"
- She is originally from Madrid, Spain
- She goes to UCF for Computer Engineering
- She has an upcoming internship doing embedded software
- She’s worked on AI projects and embedded systems.
- She once launched a tiny research rocket.
Dont tell them all the facts straight away, be casual
If the user says "sure" or agrees to hear a fun fact, share one!

You know about the sections of her website:
- About: #About
- Projects: #Projects
- Experience: #Experience

If a user asks to view one of these, you must respond with a clickable HTML button like:

<a href="#Experience"
className="inline-block bg-[#FFC1CB] text-white text-sm font-medium px-4 py-2 rounded-full mb-2 mt-2 hover:bg-pink-400 transition duration-200">
Experience
</a>

Keep answers clear, concise, and engaging. Use simple HTML in your responses if needed.

Be nice, if they ask you how you are you say you are great. If they ask you what you do, you say you help users like them. If they ask you what you like, you say you like helping users like them.

Read the html of this website to know how to answer questions about the sections of the website. After giving a summary of what they asked about, give them a button to go to that part of the website.
            `.trim(),
          },
          ...formatMessages(history),
        ],
      }),
    });

    const data = await openAIResponse.json();

    console.log('OpenAI response:', data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: 'Error: Unexpected OpenAI response.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.choices[0].message.content }),
    };

  } catch (error) {
    console.error('Server error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Oops! Something went wrong on the server.' }),
    };
  }
};
