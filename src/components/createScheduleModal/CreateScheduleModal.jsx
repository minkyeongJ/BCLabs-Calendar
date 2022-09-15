import * as S from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreateScheduleModal({ selectedDate, setModalOpen }) {
  const month = selectedDate.split("-")[1];
  const day = selectedDate.split("-")[2];

  const onSubmitSchedule = () => {
    //제출 api
  };

  return (
    <S.ModalSection>
      <h1 className="ir">일정 추가창</h1>
      <S.Date>
        {month}월 {day}일
      </S.Date>
      <form method="post" onSubmit={onSubmitSchedule}>
        <ul>
          <S.Li>
            <S.Title>제목</S.Title>
            <S.InputTxt type="text" id="title"></S.InputTxt>
          </S.Li>
          <S.Li>
            <S.Title>내용</S.Title>
            <S.Textarea></S.Textarea>
          </S.Li>
          <S.Li>
            <S.Fieldset>
              <legend className="ir">일정 종류</legend>
              <S.Title htmlFor="types">종류</S.Title>
              <S.TypeUl>
                <li>
                  <S.InputRadio
                    type="radio"
                    id="typeA"
                    name="types"
                    value="typeA"
                  />
                  <label htmlFor="typeA">타입A</label>
                </li>
                <li>
                  <S.InputRadio
                    type="radio"
                    id="typeB"
                    name="types"
                    value="typeB"
                  />
                  <label htmlFor="typeB">타입B</label>
                </li>
                <li>
                  <S.InputRadio
                    type="radio"
                    id="typeC"
                    name="types"
                    value="typeC"
                  />
                  <label htmlFor="typeC">타입C</label>
                </li>
              </S.TypeUl>
            </S.Fieldset>
          </S.Li>
        </ul>
        <S.SaveButton type="sumbit">저장</S.SaveButton>
      </form>
      <S.TopBar>
        <S.CloseButton type="button" id="close">
          <span className="ir">닫기</span>
          <FontAwesomeIcon icon={faXmark} onClick={() => setModalOpen(false)} />
        </S.CloseButton>
      </S.TopBar>
    </S.ModalSection>
  );
}
