import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import workImage from '../img/w_logo.png';

const ImageLink = styled.a`
  display: block;
  cursor: pointer;
`;

const WorkImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  const workLink = "https://github.com/hr7n/movie-night-planner/tree/main";

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
        <WorkImage src={workImage} alt="Web Design Work" />
      </ImageLink>
      </Desc>
     
    </>
  );
};

export default WebDesign;