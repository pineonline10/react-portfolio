import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import Atom from './Atom';
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Contact = ({ id }) => {
  return (
    <Section id={id} >
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
      <Atom />
      <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
      </Canvas>
      <IconsContainer>
        <IconLink href="https://github.com/pineonline10" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </IconLink>
        <IconLink href="mailto:joshisstillpine@gmail.com">
          <FaEnvelope size={50} />
        </IconLink>
        <IconLink href="https://discordapp.com/users/grosidox#9408" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={50} />
        </IconLink>
      </IconsContainer>
    </Section>
  );
};

export default Contact;
