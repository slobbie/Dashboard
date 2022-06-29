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
  border-radius: 15px;
  background: ${Colors.white};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
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
  color: ${Colors.black200};
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const Position = styled.span`
  margin-bottom: 7px;
  font-size: 17px;
  color: ${Colors.grey400};
`;
