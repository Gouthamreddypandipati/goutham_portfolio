import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background-color: rgba(45, 212, 191, 0.1);
  color: rgb(94, 234, 212);
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  border-radius: 500px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  padding-top: 100px;
  padding-left: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
  }
`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(136, 146, 176);
  max-width: 600px;

  @media (max-width: 1024px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const AboutText = styled.span`
  color: rgb(204, 214, 246);
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const HighlightText = styled.span`
  color: rgb(204, 214, 246);
  font-size: 17px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const AboutGreenText = styled.span`
  color: rgb(94, 234, 212);
  font-size: 25px;
  padding-right: 8px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Intro = () => {
  return (
    <TextContainer>
      <TextContent>
        <AboutText>
          <AboutGreenText>01.</AboutGreenText>About Me
        </AboutText>
        <br />
        <HighlightText>If you are looking for someone to handle less challenging tasks, I may not be the ideal candidate for your needs.</HighlightText>. However, if you are in search of a dedicated individual who pours their heart and soul into creating new products or apps,<HighlightText>please don't  hesitate to reach  me.</HighlightText>  I am driven to give nothing less than 101/100 percent effort for innovation and pushing the boundaries of what's possible. Contact me, and let's embark on a journey of creating something extraordinary together.
        <br />
        <br />
        <HighlightText>
        If you are looking for someone to take on the most challenging work that pushes innovation boundaries, I am ready.
        </HighlightText>
        <br />
        <br />
        <br></br>
        <Badge>Python</Badge>
        <Badge>Java</Badge>
        <Badge>JavaScript</Badge>
        <Badge>Reactjs</Badge>
        <Badge>Angular</Badge>
        <Badge>Django Rest framework</Badge>
        <Badge>Spring Boot</Badge>
        <Badge>Application Development</Badge>
        <Badge>Data Engineering skills</Badge>
        <Badge>Cloud/Devops</Badge>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </TextContent>
    </TextContainer>
  );
};

export default Intro;
