import styled from 'styled-components';
import moment, { Moment as MomentTypes } from 'moment';
import { useState } from 'react';
import Modal from '../components/modal';

const Calendar = () => {
  const [date, setdate] = useState<moment.Moment>(() => moment());
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const handleDayClick = (current: moment.Moment) => setdate(current);
  const returnToday = () => setdate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setdate(date.clone().add(30, 'day'))
      : setdate(date.clone().subtract(30, 'day'));

  function generate() {
    // 초기값은 오늘
    const today = date;

    // startOf('month') : 이번 달의 첫번 째 날로 설정
    // week() :  이번 년도의 몇번째 주인가
    const startWeek = today.clone().startOf('month').week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에입니다.
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    let calendar = [];

    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 길이가 7인 arr를 생성 후 index를 기반으로 day를 표기
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <WeekBox className='weekBox' key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              // 오늘이 current와 같다면 당일표시
              let isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';

              // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표기
              let isGrayed =
                current.format('MM') !== today.format('MM') ? 'grayed' : '';

              return (
                <Box
                  className={`${isGrayed}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  <TextBox className={`${isSelected}`}>
                    <Text onClick={modalClose}>{current.format('D')}</Text>
                  </TextBox>
                </Box>
              );
            })}
        </WeekBox>
      );
    }
    return calendar;
  }
  return (
    <Container>
      <Header>
        <h2>{date.format('YYYY')}</h2>
        <WeekHandeler>
          <button onClick={() => jumpToMonth(0)}>&lt;</button>
          <h3>{date.format('MMMM')}</h3>
          <button onClick={() => jumpToMonth(1)}> &gt;</button>
        </WeekHandeler>
      </Header>
      <Top>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((el) => (
          <div key={el}>
            <span>{el}</span>
          </div>
        ))}
      </Top>
      <Body>{generate()}</Body>
      {modalOpen && <Modal modalClose={modalClose}></Modal>}
    </Container>
  );
};

export default Calendar;

const Container = styled.section`
  /* margin: 20px auto;
  top: 40px; */
  max-width: 1728px;
  width: 100%;
  max-height: 820px;
  height: 100%;
  background-color: #fff;
  box-shadow: 3px 5px 13px rgb(163 177 198 / 43%),
    -8px -9px 5px rgb(255 255 255 / 19%);
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    max-height: 100%;
  }
`;

const Header = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  h2 {
    padding-top: 30px;
    margin: 0;
  }
  h3 {
    margin: 0;
    font-size: 25px;
    padding-top: 5px;
  }
`;

const WeekHandeler = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    color: wheat;
    border: none;
    border-radius: 30px;
    background-color: tomato;
  }
`;

const Top = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
`;

const Body = styled.div`
  margin-top: 20px;
`;

const WeekBox = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  &.weekBox > div.box:nth-child(1) {
    color: red;
  }

  &.weekBox > div.box:nth-child(7) {
    color: red;
  }
`;

const Box = styled.div`
  display: flex;
  width: 55px;
  height: 100px;
  /* padding: 20px 10px; */
  justify-content: center;
  align-items: center;
  &.grayed {
    color: gray;
    opacity: 0.5;
  }

  &.selected {
    border-radius: 25px;
    color: white;
    background-color: red;
  }
`;

const TextBox = styled.div`
  width: 50px;
  height: 50px;

  &.selected {
    border-radius: 25px;
    color: white;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.span`
  font-size: 15px;
  cursor: pointer;
`;
