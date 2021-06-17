import React from 'react';
import styled from 'styled-components';
import {
  PrimaryColor,
  ShadowColor,
  PrimaryColor2,
} from '../../Assets/Color/Color';
const CardDiv = styled.div`
  width: 300px;
  height: 150px;
  margin: 20px 10px;
  /* border: 1px solid black; */
  display: flex;
  box-shadow: 0 5px 5px ${ShadowColor};
`;

const Title = styled.p`
  font-family: 'Spoqa-Regular';
  font-size: 20px;
`;
const PortfolioCardDiv = styled.div`
  width: 90vw;
  height: 45vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    height: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ShadowColor};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    transition: 1s;
    background-color: ${PrimaryColor2};
    border-radius: 15px;
  }
`;
function PortfolioCard({ data }) {
  console.log({ data });
  return (
    <PortfolioCardDiv>
      {data.map((pofol) => (
        <CardDiv>
          <Title key={pofol._id}>{pofol.title}</Title>
          <p key={pofol.id}>{pofol.role}</p>
        </CardDiv>
      ))}
    </PortfolioCardDiv>
  );
}

export default PortfolioCard;