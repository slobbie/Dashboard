import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const ProfilBox = () => {
  return (
    <ProfillBox>
      <ProfillImgBox>
        <Img />
        <Name>홍길동</Name>
        <Position>영업부 / 팀원</Position>
      </ProfillImgBox>
    </ProfillBox>
  );
};

export default ProfilBox;

const ProfillBox = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 20px;
  box-shadow: 35px 35px 68px 0px rgba(206, 206, 245, 0.5),
    inset -8px -8px 16px 0px rgba(206, 206, 245, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
`;

const ProfillImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  border: 1px solid orange;
  width: 150px;
  height: 150px;
  border-radius: 80px;
  margin-bottom: 20px;
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const Position = styled.span`
  margin-bottom: 7px;
  font-size: 17px;
  color: ${Colors.grey400};
`;
