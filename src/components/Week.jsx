import Day from "./Day";
import styled from "styled-components";

export default function Week({ arrWeek }) {
  let calenderDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <WeekList>
      {calenderDays.map((day, i) => {
        const dayNumber = arrWeek[i].split("-")[2];
        console.log(dayNumber);
        return (
          <Li key={dayNumber}>
            <Day arrWeek={arrWeek[i]} dayNumber={dayNumber} day={day} />
          </Li>
        );
      })}
    </WeekList>
  );
}

const WeekList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0 5px;
`;
