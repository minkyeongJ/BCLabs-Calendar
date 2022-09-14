import * as S from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreateScheduleModal({ selectedDate }) {
  const month = selectedDate.split("-")[1];
  const day = selectedDate.split("-")[2];
  return (
    <S.ModalSection>
      <h1 className="ir">일정 추가창</h1>
      <S.Date>
        {month}월 {day}일
      </S.Date>
      <form>
        <ul>
          <S.Li>
            <S.Title>제목</S.Title>
            <S.Input type="text" id="title"></S.Input>
          </S.Li>
          <S.Li>
            <S.Title>내용</S.Title>
            <S.Textarea></S.Textarea>
          </S.Li>
          <S.Li>
            <S.Title htmlFor="types">종류</S.Title>
            <S.Input type="text" id="types"></S.Input>
          </S.Li>
        </ul>
        <S.SaveButton type="sumbit">저장</S.SaveButton>
      </form>
      <S.TopBar>
        <S.CloseButton type="button" id="close">
          <span className="ir">닫기</span>
          <FontAwesomeIcon icon={faXmark} />
        </S.CloseButton>
      </S.TopBar>
    </S.ModalSection>
  );
}
