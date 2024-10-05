import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-consultation-email', async (req: Request, res: Response) => {
    const { firstName, lastName, email, phone, country, message } = req.body;

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: 'New Consultation Request',
        text: `
            You have a new consultation request:

            Name: ${firstName}
            Lastname: ${lastName}
            Email: ${email}
            Phone: ${phone}
            Country: ${country}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Consultation email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending consultation email');
    }
});

app.post('/send-contact-email', async (req: Request, res: Response) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: 'New Contact Us Message',
        text: `
            You have a new message from the Contact Us form:

            Name: ${firstName}
            Lastname: ${lastName}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Contact email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending contact email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
