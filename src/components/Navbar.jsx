import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  a {
    color: #008080; 
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

  const Navbar = () => {
    return (
      <Section>
        <Container>
          <Links>
            <List>
              <ListItem><a href="#header">Home</a></ListItem>
              <ListItem><a href="#about">About</a></ListItem>
              <ListItem><a href="#works">Works</a></ListItem>
              <ListItem><a href="#contact">Contact</a></ListItem>
            </List>
          </Links>
        </Container>
      </Section>
    );
  };

export default Navbar;