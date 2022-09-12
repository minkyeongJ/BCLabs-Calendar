import Week from "../../components/Week";
import * as Styled from "./Styles";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Date from "../../utils/getDate";

function leftClick() {}

function rightClick() {}

export default function Home() {
  return (
    <Styled.MainSection>
      <Styled.YearMonthSection>
        <h1 className="ir">년도와 월</h1>
        <Styled.Year>{Date.Year()}</Styled.Year>
        <Styled.Month>{Date.Month()}월</Styled.Month>
      </Styled.YearMonthSection>
      <Styled.WeekSection>
        <Styled.MoveButtonSection onClick={leftClick}>
          <h1 className="ir">이전 주로 이동</h1>
          <Styled.Span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Styled.Span>
        </Styled.MoveButtonSection>
        <Week />
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
