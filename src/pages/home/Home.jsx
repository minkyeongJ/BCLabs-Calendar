import Week from "../../components/Week";
import * as Styled from "./Styles";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Date from "../../utils/getDate";
import { useState } from "react";

export default function Home() {
  const [arrWeek, setArrWeek] = useState(Date.WeekArr());
  const year = arrWeek[0].split("-")[0];
  const month = arrWeek[0].split("-")[1];
  function leftClick() {
    setArrWeek(Date.PastWeekArr(arrWeek));
    console.log(Date.PastWeekArr(arrWeek));
  }

  function rightClick() {
    Date.ForwardWeekArr();
  }

  return (
    <Styled.MainSection>
      <Styled.YearMonthSection>
        <h1 className="ir">년도와 월</h1>
        <Styled.Year>{year}</Styled.Year>
        <Styled.Month>{month}월</Styled.Month>
      </Styled.YearMonthSection>
      <Styled.WeekSection>
        <Styled.MoveButtonSection onClick={leftClick}>
          <h1 className="ir">이전 주로 이동</h1>
          <Styled.Span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Styled.Span>
        </Styled.MoveButtonSection>
        <Week arrWeek={arrWeek} />
        <h1 className="ir">다음 주로 이동</h1>
        <Styled.MoveButtonSection onClick={rightClick}>
          <Styled.Span>
            <FontAwesomeIcon icon={faAngleRight} />
          </Styled.Span>
        </Styled.MoveButtonSection>
      </Styled.WeekSection>
    </Styled.MainSection>
  );
}
