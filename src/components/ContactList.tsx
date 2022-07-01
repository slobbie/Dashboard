import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const ContactList = () => {
  const dummyData = [
    {
      id: 1,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 2,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 3,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 4,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 5,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 6,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 7,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 8,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 9,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
    {
      id: 10,
      name: '홍길동',
      address: 'ABC@gmail.com',
      postion: '영업부 / 팀원',
    },
  ];
  return (
    <>
      <Wrapper>
        <Container>
          {dummyData.map((v) => {
            return (
              <ListBox key={v.id}>
                <ProfillImgBox>
                  <Img />
                  <Name>{v.name}</Name>
                  <Address>{v.address}</Address>
                  <Position>{v.postion}</Position>
                </ProfillImgBox>
              </ListBox>
            );
          })}
        </Container>
      </Wrapper>
    </>
  );
};

export default ContactList;

const Wrapper = styled.div`
  min-width: 590px;
  width: 100%;
  height: 92%;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px 20px 20px 0;
  border-radius: 15px;
  background: ${Colors.white};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
`;

const ProfillImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  border: 1px solid orange;
  width: 105px;
  height: 105px;
  border-radius: 80px;
  margin-bottom: 20px;
`;

const Name = styled.span`
  color: ${Colors.black200};
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Address = styled.span`
  margin-bottom: 7px;
  font-size: 15px;
  color: ${Colors.grey400};
`;

const Position = styled.span`
  margin-bottom: 7px;
  font-size: 17px;
  color: ${Colors.grey400};
`;
