import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import storeImage from '../img/kvnga-vBWsG91aR_U-unsplash.jpg';

const StoreLink = styled.a`
  display: block;
  cursor: pointer;
`;

const StoreImage = styled.img`
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


const ECommerce = () => {
  const storeLink = "https://github.com/sentuhxd/GotchaGames";
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
        <StoreLink href={storeLink} target="_blank" rel="noopener noreferrer">
          <StoreImage src={storeImage} alt="E-Commerce Store" />
        </StoreLink>
      </Desc>
    </>
  );
};

export default ECommerce;