import { Html, Head, Body, Text } from '@react-email/components';

const OwnerEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Body>
      <Text>New Contact Form Submission</Text>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email:</strong> {email}</Text>
      <Text><strong>Message:</strong> {message}</Text>
    </Body>
  </Html>
);

export default OwnerEmail;
