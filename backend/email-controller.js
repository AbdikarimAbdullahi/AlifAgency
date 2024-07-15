
import { response } from "express";
import { Resend } from "resend";

const resend = new Resend('re_J1Qys4C4_DX5Mu8jhGZwYohXKZq6jfkk1'); 
export const emailController = async() => {
    const { name, email, phoneNumber, message, subject } = req.body;
    console.log(req.body);  // Log the incoming request data

    // Validate the required fields
    if (!name || !email || !phoneNumber || !subject || !message) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        // Sending email using the Resend API
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'engshakrayare114@gmail.com',
            subject: subject,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });
        res.status(200).json({ message: 'Email sent successfully',data : response });
    } catch (error) {
        console.error('Failed to send email', error);  // Log the error for debugging
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}