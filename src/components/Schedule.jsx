import styled from "styled-components";

export default function Schedule() {
  return (
    <ScheduleSection>
      <h1 className="ir">스케줄 내용</h1>
      <ul>
        <Li>* 스케줄입니다^0^dsfsdg</Li>
        <Li>* 스케줄입니다^0^</Li>
        <Li>* 스케줄입니다^0^</Li>
      </ul>
    </ScheduleSection>
  );
}

const ScheduleSection = styled.section`
  width: 100%;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 1.4rem;
  overflow: hidden;
`;

const Li = styled.li`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;