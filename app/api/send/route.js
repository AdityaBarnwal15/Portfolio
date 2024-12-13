





import OwnerEmail from '@/components/emails/OwnerEmail';
import UserEmail from '@/components/emails/UserEmail';
import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Log the incoming data
    

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const emailHtml = await render(<OwnerEmail name={name} email={email} message={message}/>);
    const userHtml = await render(<UserEmail name={name} />);

    const options = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Contact Form Submission',
      html: emailHtml,
    };
    const userOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us',
      html: userHtml,
    };

    // Send a simple test email
    await transporter.sendMail(options);
    await transporter.sendMail(userOptions);

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    
    return new Response(JSON.stringify({ error: 'Failed to send emails.' }), { status: 500 });
  }
}

