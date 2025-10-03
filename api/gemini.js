// Vercel Serverless Function to securely handle Gemini API calls
// 이 파일은 Vercel 서버에서만 실행되는 안전한 API 중계소 역할을 합니다.

export default async function handler(request, response) {
  // POST 요청만 허용합니다.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userQuery, topic } = request.body;
  
  // Vercel 환경 변수에서 API 키를 안전하게 불러옵니다.
  // 이 키는 절대로 사용자에게 노출되지 않습니다.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ message: 'API key is not configured on the server.' });
  }
  if (!userQuery || !topic) {
    return response.status(400).json({ message: 'userQuery and topic are required.' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
  const systemPrompt = `당신은 신경학 및 물리치료 분야의 전문의입니다. 학생을 위해 복잡한 뇌 손상 개념을 한국어로 쉽고 명확하게 설명해주세요. 현재 주제는 '${topic}'입니다. 답변은 친절하고 교육적인 어조를 유지하세요.`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: {
        parts: [{ text: systemPrompt }]
    },
  };

  try {
    // Vercel 서버에서 실제 Gemini API를 호출합니다.
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API Error:', errorText);
      return response.status(geminiResponse.status).json({ message: 'Failed to get response from Gemini API.' });
    }

    const result = await geminiResponse.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    // AI의 답변을 사용자 브라우저로 다시 전달합니다.
    return response.status(200).json({ text: text || 'No content received from AI.' });

  } catch (error) {
    console.error('Serverless function error:', error);
    return response.status(500).json({ message: 'An internal server error occurred.' });
  }
}

