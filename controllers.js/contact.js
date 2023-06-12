import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';

configDotenv();

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

contactEmail.verify((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Ready to send email');
    }
})

const contact = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;

    const mail = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html:  `<p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${emailAddress}</p>
                <p>Phone: ${phoneNumber}</p>
                <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ status: 'Message Sent' });
        }
    });
}

export { contact };