require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const atob = require('atob')

const API_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-3.5-turbo';
const MAX_TOKENS = 3500;
const IMAGE_PLACEHOLDER = 'image_placeholder.jpg';

fs.readFile('artykul.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd podczas odczytu pliku:', err);
        return;
    }
    const encodedApiKey = process.env.OPENAI_API_KEY;

    const apiKey = atob(encodedApiKey);

    const prompt = `Przekształć poniższy artykuł w kod HTML z odpowiednimi tagami. Dodaj placeholdery dla obrazków w nagłówkach. 
    Każdy obrazek powinien mieć tag <img src="${IMAGE_PLACEHOLDER}" alt="..." /> z dokładnym i szczegółowym promptem, 
    który możemy wykorzystać do wygenerowania grafiki. Zadbaj o rozbudowane i konkretne opisy generowanych obrazów. 
    Obrazki powinny być umieszczone w nagłówkach i pod nimi powinny znaleźć się podpisy w tagu <figcaption>. Oto artykuł:\n\n${data}`;

    axios.post(API_URL, {
        model: MODEL,
        messages: [
            { role: 'system', content: 'Jesteś pomocnym asystentem.' },
            { role: 'user', content: prompt }
        ],
        max_tokens: MAX_TOKENS,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        const htmlContent = response.data.choices[0].message.content;
        console.log('Odpowiedź z OpenAI:', htmlContent);

        fs.writeFile('artykul.html', htmlContent, (err) => {
            if (err) {
                console.error('Błąd podczas zapisywania pliku:', err);
            } else {
                console.log('Plik artykul.html został zapisany.');
            }
        });
    })
    .catch(error => {
        console.error('Błąd podczas przetwarzania artykułu:', error.response ? error.response.data : error.message);
    });
});
