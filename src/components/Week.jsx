import Day from "./Day";
import styled from "styled-components";
import { useState } from "react";
import CreateScheduleModal from "./createScheduleModal/CreateScheduleModal";

export default function Week({ arrWeek }) {
  let calenderDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(arrWeek);

  const [modalOpen, setModalOpen] = useState(false);
  const openCreateScheduleModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  };

  const [targetData, setTargetData] = useState("");
  const eventTargetData = (event) => {
    event.preventDefault();
    setTargetData(event.target.children[0].textContent);
  };

  return (
    <>
      <WeekList>
        {calenderDays.map((day, i) => {
          const dayNumber = arrWeek[i].split("-")[2];
          return (
            <Li key={dayNumber}>
              <Day
                arrWeek={arrWeek[i]}
                dayNumber={dayNumber}
                day={day}
                openCreateScheduleModal={openCreateScheduleModal}
                eventTargetData={eventTargetData}
              />
            </Li>
          );
        })}
      </WeekList>
      <Modal>
        {modalOpen ? <CreateScheduleModal selectedDate={targetData} /> : null}
      </Modal>
    </>
  );
}

const WeekList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0 5px;
`;

const Modal = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
`;
