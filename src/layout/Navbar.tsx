import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineSchedule } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { GrSchedule } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const Hoverd = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container className={toggle ? 'active' : ''}>
      <Logo>
        <span>
          <AiOutlineHome className='Logo' />
        </span>
      </Logo>
      <Ul>
        <Li
          className={activeIndex === 1 ? 'Hoverd' : ''}
          onClick={() => Hoverd(1)}
        >
          <span>
            <Link to='/contact'>
              <MdOutlineDashboard className='DashBoardIcon' />
            </Link>
          </span>
        </Li>
        <Li
          className={activeIndex === 2 ? 'Hoverd' : ''}
          onClick={() => Hoverd(2)}
        >
          <span>
            <Link to='/contact'>
              <AiOutlineSchedule className='scheduleIcon' />
            </Link>
          </span>
        </Li>

        <Li
          className={activeIndex === 3 ? 'Hoverd' : ''}
          onClick={() => Hoverd(3)}
        >
          <span>
            <Link to='/contact'>
              <BiPhoneCall className='contactIcon' />
            </Link>
          </span>
        </Li>
      </Ul>
      <CloseBtn onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <BsArrowBarRight className='closeBtn' />
        ) : (
          <BsArrowBarLeft className='closeBtn' />
        )}
      </CloseBtn>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  border-radius: 20px;
  position: relative;
  width: 140px;
  min-width: 60px;
  height: 93%;
  margin: 30px;
  transition: 0.5s;
  overflow: hidden;
  background: ${Colors.blue500};
  color: ${Colors.white};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
  &.active {
    width: 80px;
  }
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 54px;
  justify-content: center;
  margin: 40px 0;

  .Logo {
    width: 30px;
    height: 30px;
    &:hover {
      fill: red;
    }
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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin: 25px 0 0 0px;
  li {
    display: flex;
    align-items: center;
  }

  .DashBoardIcon,
  .contactIcon,
  .scheduleIcon {
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
    &.Hoverd .DashBoardIcon,
    &.Hoverd .contactIcon,
    &.Hoverd .scheduleIcon {
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
  &:hover .DashBoardIcon,
  :hover .contactIcon,
  :hover .scheduleIcon {
    fill: ${Colors.NavColor};
  }
  /* &:nth-child(1) {
    margin-bottom: 0;
    pointer-events: none;
  } */
`;
