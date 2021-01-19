import styled from "styled-components";
import { H3, H4 } from "../../styles/TextStyles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 1100px;
  grid-gap: 30px;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.card.backgroundColor};
  border-radius: 6px;
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 0 0 0 1.2rem;
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.textmuted};
  display: flex;
  margin: 0.5rem 0;
`;

export const Dot = styled.span`
  margin: 3px 10px 0 10px;
`;

export const JobTitle = styled(H3)`
  text-transform: capitalize;
`;

export const Company = styled.div`
  margin: 0.5rem 0 2rem 0;
`;

export const Location = styled(H4)`
  color: ${({ theme }) => theme.location};
`;
//
