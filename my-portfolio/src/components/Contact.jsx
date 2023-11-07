import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';

// ... styled components definitions

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; // Adjust the gap as needed
`;

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_id', 'template_id', formRef.current, 'public_key')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success === true && <p>Your message has been sent. We'll get back to you soon :)</p>}
            {success === false && <p>There was an error sending your message. Please try again.</p>}
          </Form>
        </Left>
        <Right>
          <IconsContainer>
            <a href="https://github.com/pineonline10" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} /> {/* Adjust size as needed */}
            </a>
            <a href="mailto:joshisstillpine@gmail.com">
              <FaEnvelope size={50} /> {/* Adjust size as needed */}
            </a>
            <a href="https://discordapp.com/users/grosidox#9408" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={50} /> {/* Adjust size as needed */}
            </a>
          </IconsContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
