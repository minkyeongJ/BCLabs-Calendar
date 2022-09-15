import styled from "styled-components";

export const ModalSection = styled.section`
  width: 450px;
  height: 400px;
  padding: 40px 20px 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 20px 5px gray;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const TopBar = styled.div`
  height: 30px;
  background-color: var(--oc-gray-5);
  border: 1px solid var(--oc-gray-5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
`;

export const Date = styled.p`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
  font-weight: 600;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px var(--oc-gray-5);
  border-radius: 5px;
  font-size: 1.6rem;
  resize: both;
  margin-top: 5px;
`;

export const Li = styled.li`
  margin-top: 10px;
`;

export const InputTxt = styled.input`
  width: 80%;
`;

export const InputRadio = styled.input`
  margin-left: 10px;
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: var(--base-blue);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
`;

export const TypeUl = styled.ul`
  display: flex;
`;
