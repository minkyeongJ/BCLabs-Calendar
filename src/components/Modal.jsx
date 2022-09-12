import styled from 'styled-components'

export default function Modal() {
  return (
    <ModalSection>
      <h1 className="ir">일정 추가창</h1>
      <p>제목</p>
      <p>내용</p>
      <p>종류</p>
    </ModalSection>
  )
}

const ModalSection = styled.section`
  width: 600px;
  height: 650px;
`