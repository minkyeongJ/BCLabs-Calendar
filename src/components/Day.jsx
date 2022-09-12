import styled from "styled-components";
import Schedule from "./Schedule";
import { Today } from "../utils/getDate";
import { useEffect, useState } from "react";

export default function Day({ dayNumber, day }) {
  const [isToday, setIsToday] = useState(false);
  const today = Today();

  useEffect(() => {
    if (today === Number(dayNumber)) {
      setIsToday(true);
    }
  }, []);

  return (
    <DaySection>
      <DayTitle state={isToday}>
        <h1 className="ir">날짜 및 요일</h1>
        <SpanStyle>{dayNumber}</SpanStyle>
        <SpanStyle>{day}</SpanStyle>
      </DayTitle>
      <DaySchedule state={isToday}>
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
