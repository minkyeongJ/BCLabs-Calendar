import styled from "styled-components";

export default function Schedule() {
  return (
    <ScheduleSection>
      <h1 className="ir">스케줄 내용</h1>
      <ul>
        <Li>* 스케줄 제목 입니다^0^dsfsdg</Li>
      </ul>
    </ScheduleSection>
  );
}

const ScheduleSection = styled.section`
  width: 100%;
  height: 40px;
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