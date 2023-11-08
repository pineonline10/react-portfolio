import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import image1 from '../img/IMG_6957.jpg';
import image2 from '../img/IMG_6958.jpg';
import image3 from '../img/IMG_6959.jpg';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const GridItem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; // Keep the border-radius from the Desc if you like
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Creates a grid with 3 columns
  gap: 10px; // Adjust the gap to your liking
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;
  overflow: hidden; // In case images are too large

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    grid-template-columns: 1fr; // Stack images on top of each other on smaller screens
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  display: block;
  object-fit: contain;
`;

const Art = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Grid>
        <StyledImage src={image1} alt="Art Image 1" />
        <StyledImage src={image2} alt="Art Image 2" />
        <StyledImage src={image3} alt="Art Image 3" />
      </Grid>
    </>
  );
};

export default Art;