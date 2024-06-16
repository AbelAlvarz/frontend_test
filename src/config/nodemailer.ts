import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass
    }
})

export const sendEmail = async (to: any, subject: string, text: string, html: string) => {
    const mailOptions = {
        from: email,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};