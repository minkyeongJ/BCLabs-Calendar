import styled from "styled-components";
import Schedule from "./Schedule";
import * as Date from "../utils/getDate";
import { useEffect, useRef, useState } from "react";

export default function Day({
  arrWeek,
  dayNumber,
  day,
  openCreateScheduleModal,
  eventTargetData,
}) {
  const [isToday, setIsToday] = useState(false);
  const today = Date.TodayDate();

  useEffect(() => {
    if (today === arrWeek) {
      setIsToday(true);
    }
  }, []);

  const targetDate = useRef();
  
  return (
    <DaySection onClick={eventTargetData}>
      <DayTitle state={isToday}>
        <h1 className="ir">날짜 및 요일</h1>
        <SpanStyle>{dayNumber}</SpanStyle>
        <SpanStyle>{day}</SpanStyle>
      </DayTitle>
      <DaySchedule state={isToday} onClick={openCreateScheduleModal}>
        <p id="clicked-date" ref={targetDate} hidden>
          {arrWeek}
        </p>
        <ul>
          <Li>
            <Schedule />
          </Li>
          <Li>
            <Schedule />
          </Li>
        </ul>
      </DaySchedule>
    </DaySection>
  );
}

const DaySection = styled.section`
  min-width: 160px;
  max-width: 160px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const DayTitle = styled.section`
  ${(props) =>
    props.state
      ? `background-color: var(--base-orange)`
      : `background-color: var(--base-blue)`};
  padding: 10px;
  text-align: center;
`;

const SpanStyle = styled.span`
  display: block;
  color: white;
`;

const DaySchedule = styled.section`
  height: 60vh;
  ${(props) =>
    props.state
      ? `background-color: var(--base-lightorange)`
      : `background-color: var(--base-lightblue)`};
  padding: 10px;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;
