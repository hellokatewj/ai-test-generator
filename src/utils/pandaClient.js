import request from 'request-promise';

// panda接口地址
const pandaUrl = "http://llms-se.baidu-int.com:8200/chat/completions";

export async function getAIResponse(prompt) {
    const params = {
        model: 'gpt-4o',  // ernie-bot-4.0
        messages: [{"role": "user", "content": prompt}],
        temperature: 0.7,
        max_tokens: 2048,
        stream: false,
        top_p: 1
    };
    const response = await request.post({
        url: pandaUrl,
        body: JSON.stringify(params),
        headers: {
            "Authorization": "Bearer sk---qiaolexin---yOyVM14oz//XxsDMq9jm4w=="
        }
    });
    return JSON.parse(response).choices[0].message.content;
}