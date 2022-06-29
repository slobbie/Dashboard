import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { GiCamel } from 'react-icons/gi';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const Hoverd = (index: number) => {
    setActiveIndex(index);
    console.log(activeIndex);
  };
  console.log(toggle);

  return (
    <Container className={toggle ? 'active' : ''}>
      <Ul>
        <CloseBtn onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <BsArrowBarRight className='closeBtn' />
          ) : (
            <BsArrowBarLeft className='closeBtn' />
          )}
        </CloseBtn>
        <Logo>
          <Li>
            <span>
              <GiCamel className='Logo' />
            </span>
          </Li>
        </Logo>
        <Li
          className={activeIndex === 1 ? 'Hoverd' : ''}
          onClick={() => Hoverd(1)}
        >
          <span>
            <AiOutlineHome className='HomeIcon' />
          </span>
        </Li>
        <Li
          className={activeIndex === 2 ? 'Hoverd' : ''}
          onClick={() => Hoverd(2)}
        >
          <span>Home</span>
        </Li>
        <Li
          className={activeIndex === 3 ? 'Hoverd' : ''}
          onClick={() => Hoverd(3)}
        >
          <span>Home</span>
        </Li>
      </Ul>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  .active {
    width: 60px;
  }
  border-radius: 20px;
  position: fixed;
  width: 140px;
  height: 93%;
  margin: 30px;
  /* border-left: 10px solid ${Colors.NavColor}; */
  transition: 0.5s;
  overflow: hidden;
  background: ${Colors.NavColor};
  color: ${Colors.white};

  box-shadow: 35px 35px 68px 0px rgba(91, 95, 120, 0.5),
    inset -0px -0px 16px 0px rgba(255, 255, 255, 0.5),
    inset 0px 11px 28px 0px rgb(91, 95, 120, 0.5);
  &.active {
    width: 80px;
  }
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 54px;
  .Logo {
    width: 30px;
    height: 30px;
  }
`;

const CloseBtn = styled.button`
  position: relative;
  display: block;
  margin-left: auto;
  border: none;
  background: transparent;
  transition: 0.6s;
  .closeBtn {
    width: 20px;
    height: 18px;
    fill: ${Colors.white};

    &:hover {
      fill: orange;
    }
  }
`;

const Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 25px 0 0 0px;
  li {
    display: flex;
    align-items: center;
  }
  .HomeIcon {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    fill: ${Colors.white};
  }
  .Hoverd {
    background-color: ${Colors.white};
    color: ${Colors.NavColor};
    &.Hoverd span::before {
      content: '';
      position: absolute;
      right: 0;
      top: -35px;
      width: 35px;
      height: 35px;
      background: transparent;
      border-radius: 50%;
      box-shadow: 20px 20px 0 5px white;
      pointer-events: none;
    }
    &.Hoverd span::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -35px;
      width: 35px;
      height: 35px;
      background: transparent;
      border-radius: 50%;
      box-shadow: 20px -20px 0 5px ${Colors.white};
      pointer-events: none;
    }
    &.Hoverd .HomeIcon {
      fill: ${Colors.NavColor};
    }
  }
`;

const Li = styled.li`
  position: relative;
  width: 100%;
  font-size: 17px;
  height: 40px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-bottom: 37px;
  cursor: pointer;
  span {
    display: flex;
    width: 100%;
    font-weight: 700;
    justify-content: center;
  }

  &:hover,
  .Hoverd {
    background-color: ${Colors.white};
    color: ${Colors.NavColor};
  }
  &:hover span::before {
    content: '';
    position: absolute;
    right: 0;
    top: -35px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 20px 20px 0 5px white;
    pointer-events: none;
  }
  &:hover span::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -35px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 20px -20px 0 5px ${Colors.white};
    pointer-events: none;
  }
  &:hover .HomeIcon {
    fill: ${Colors.NavColor};
  }
  &:nth-child(1) {
    margin-bottom: 0;
    pointer-events: none;
  }
`;
