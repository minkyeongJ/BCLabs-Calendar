import styled from "styled-components";

export const MainSection = styled.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
`;

export const YearMonthSection = styled.section`
  text-align: center;
  margin: auto;
`;

export const SpanStyle = styled.span`
  display: block;
`;

export const Year = styled(SpanStyle)`
  font-size: 1.8rem;
`;
export const Month = styled(SpanStyle)`
  font-size: 3rem;
  font-weight: bold;
`;

export const WeekSection = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const MoveButtonSection = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
  display: table;
`;

export const Span = styled.span`
  display: table-cell;
  vertical-align: middle;
`;
