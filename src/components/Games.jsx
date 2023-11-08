import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import gameImage from '../img/kvnga-vBWsG91aR_U-unsplash.jpg';

const ImageLink = styled.a`
  display: block;
  cursor: pointer;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    position: static; // or adjust top, left, right, and bottom as needed
    margin: auto;
  }
`;

const Games = () => {
  const workLink = "https://github.com/sentuhxd/awesome-artifacts";
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        <ImageLink href={workLink} target="_blank" rel="noopener noreferrer">
          <StyledImage src={gameImage} alt="Games" />
        </ImageLink>
      </Desc>
    </>
  );
};

export default Games;
