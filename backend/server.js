import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';  // Make sure you've installed and are importing Resend correctly.
import { emailController } from './email-controller.js';

const app = express();
// Replace 'your-resend-api-key' with your actual Resend API key.



// Setup CORS
app.use(cors(
    {
        origin: 'http://localhost:3001',
        methods: ['POST'],
        allowedHeaders : ['Content-Type : application/json; '],
        credentials: true
    }
    
));

const port = 6000;
app.use(express.json());
app.post('/api/reg',emailController )


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
