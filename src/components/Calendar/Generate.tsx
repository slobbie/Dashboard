import { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

export default function Generate() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [date, setdate] = useState<moment.Moment>(() => moment());
  const handleDayClick = (current: moment.Moment) => setdate(current);
  // 님 날짜 뭐 눌렀어요? (초기값은 오늘)
  const today = date;

  // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
  // week() : Week of Year. 이번 년도의 몇번째 주인가?
  const startWeek = today.clone().startOf('month').week();

  // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
  // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
  // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
  const endWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  let calendar = [];

  // 시작 주부터 마지막 주까지 +1 씩 증가시킴
  // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기
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

            // 오늘이 current와 같다면 우선 '선택'으로 두자
            let isSelected =
              today.format('YYYYMMDD') === current.format('YYYYMMDD')
                ? 'selected'
                : '';

            // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표시하자
            let isGrayed =
              current.format('MM') !== today.format('MM') ? 'grayed' : '';

            return (
              <DayBox
                className={`${isSelected} ${isGrayed}`}
                key={i}
                onClick={() => handleDayClick(current)}
              >
                <Text className='text'>{current.format('D')}</Text>
              </DayBox>
            );
          })}
      </WeekBox>
    );
  }
  return calendar;
}

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

const DayBox = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
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

const Text = styled.span`
  font-size: 15px;
  cursor: pointer;
`;
