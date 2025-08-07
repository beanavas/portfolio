const fetch = require('node-fetch');

// Initial personality + greeting tone
let chatHistory = `You are a super friendly and funny assistant who helps users learn about Beatriz, a computer engineering student who loves AI, embedded systems, and has fun facts. This website has sections on her involvement in school, past internships and projects. Respond casually and helpfully.\n`;

// Fun facts about Beatriz
const funFacts = [
  "She loves to cook.",
  "She has traveled to 16 countries—her favorite was Morocco.",
  "She is a fan of the movie 'Forrest Gump'.",
  "She is originally from Madrid, Spain.",
  "She goes to UCF for Computer Engineering.",
  "She has an upcoming internship doing embedded software.",
  "She’s worked on AI projects and embedded systems.",
  "She once launched a tiny research rocket."
];

// Helper function to check if user is asking for a fun fact
function isAskingForFunFact(message) {
  const lower = message.toLowerCase();
  return (
    lower.includes('fun fact') ||
    lower.includes('tell me something fun') ||
    lower.includes('do you know something cool') ||
    lower.includes('something interesting') ||
    lower.includes('funny fact') ||
    lower.includes('sure') // when prompted for a fun fact
  );
}

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const history = body.history || [];

    const lastUserMessage = history.length > 0 ? history[history.length - 1].text : '';

    // Check if user is asking for a fun fact
    if (isAskingForFunFact(lastUserMessage)) {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: `Here’s a fun fact about Beatriz: ${randomFact}` }),
      };
    }

    // Append user message to conversation history
    chatHistory += `User: ${lastUserMessage}\n`;

    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {
          text: chatHistory,
        },
      }),
    });

    const data = await response.json();
    const botReply = data?.generated_text || "Sorry, I didn’t get that.";

    chatHistory += `Bot: ${botReply}\n`;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: botReply }),
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Oops! Something went wrong.' }),
    };
  }
};
