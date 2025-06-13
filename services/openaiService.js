const OpenAI = require('openai');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateLesson(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI error:', error);
    throw error;
  }
}

module.exports = { generateLesson };
