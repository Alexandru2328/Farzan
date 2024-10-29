const apiKey = 'YOUR_API_KEY_HERE';

async function generateWord(prefix) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const prompt = `Give me a single word that starts with the prefix "${prefix}", If it is not found, answer me with -1.`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', 
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 10,
                temperature: 0.7
            }),
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`API Error: ${errorResponse.error.message}`);
        }
        const data = await response.json();
        return data.choices[0].message.content.trim(); 
    } catch (error) {
        console.error('Error generating word:', error);
        throw error; 
    }
}

async function checkWord(word) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const prompt = `Check the word and answer me with true or false if it is a real word "${word}" in english language.`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', 
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 10,
                temperature: 0.7
            }),
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`API Error: ${errorResponse.error.message}`);
        }
        const data = await response.json();
        return data.choices[0].message.content.trim(); 
    } catch (error) {
        console.error('Error generating word:', error);
        throw error; 
    }
}


