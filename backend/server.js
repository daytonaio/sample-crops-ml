const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const Groq = require('groq-sdk'); // Import Groq SDK

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // Initialize Groq with API Key

app.post('/predict-crop', async (req, res) => {
    try {
        const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

        if (!N || !P || !K || !temperature || !humidity || !ph || !rainfall) {
            return res.status(400).json({
                error: 'All parameters (N, P, K, temperature, humidity, ph, rainfall) are required',
            });
        }

        // Step 1: Predict crop using the Python script
        const pythonProcess = spawn('python3', ['predict.py', N, P, K, temperature, humidity, ph, rainfall]);

        let scriptOutput = '';
        let scriptError = '';

        pythonProcess.stdout.on('data', (data) => {
            scriptOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            scriptError += data.toString();
        });

        pythonProcess.on('close', async (code) => {
            if (code === 0) {
                try {
                    const prediction = JSON.parse(scriptOutput.trim());
                    const predictedCrop = prediction.label;

                    // Step 2: Fetch yield improvement suggestions using Groq API
                    const suggestions = await groq.chat.completions.create({
                        messages: [
                            {
                                role: 'user',
                                content: `Suggest ways to improve yield for ${predictedCrop} given these factors: 
                                N=${N}, P=${P}, K=${K}, temperature=${temperature}, humidity=${humidity}, ph=${ph}, rainfall=${rainfall}. Give output strictly in format ["suggestion1","suggestion2",...] and only give array as output with no othere texts.`,
                            },
                        ],
                        model: 'llama3-8b-8192', // Specify model
                    });

                    const yieldImprovementSuggestions =
                        suggestions.choices[0]?.message?.content || 'No suggestions available';

                    // Step 3: Combine the results and send the response
                    res.json({
                        prediction,
                        yieldImprovementSuggestions,
                    });
                } catch (error) {
                    console.error('Error processing results:', error.message);
                    res.status(500).json({
                        error: 'Failed to fetch suggestions or process results',
                        details: error.message,
                    });
                }
            } else {
                console.error('Python script error:', scriptError);
                res.status(500).json({
                    error: 'Python script execution failed',
                    details: scriptError || 'Unknown error',
                });
            }
        });
    } catch (error) {
        console.error('Internal server error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
