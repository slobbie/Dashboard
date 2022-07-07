import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { AiOutlineHome, AiOutlineSchedule } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
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
      <Logo className={activeIndex === 0 ? 'Hoverd' : ''}>
        <span onClick={() => Hoverd(0)}>
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
            <Link to='/calendar'>
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
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  border-radius: 20px;
  position: relative;
  width: 80px;
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
  @media screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    width: 95%;
    height: 50px;
    margin: 0;
    margin-bottom: 20px;
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
      fill: ${Colors.NavColor};
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    align-items: center;
    margin-left: 40px;
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
  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .Hoverd {
      &.Hoverd span::before {
        content: '';
        width: 0px;
        height: 0px;
      }
      &.Hoverd span::after {
        content: '';
        width: 0px;
        height: 0px;
      }
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
  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin: 0;
    border-radius: 30px;

    &:hover span::before {
      content: '';
      width: 0px;
      height: 0px;
    }
    &:hover span::after {
      content: '';
      width: 0px;
      height: 0px;
    }
    &:hover .DashBoardIcon,
    :hover .contactIcon,
    :hover .scheduleIcon {
      fill: ${Colors.NavColor};
    }

    &:nth-child(1) {
      margin-left: 35px;
    }
  }
`;
