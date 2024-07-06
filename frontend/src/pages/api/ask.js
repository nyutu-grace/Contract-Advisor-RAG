export default async function handler(req, res) {
    const { question } = req.body;
    
    // Call the backend system (Python) to get the answer
    const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });
    const data = await response.json();
    
    res.status(200).json(data);
}
