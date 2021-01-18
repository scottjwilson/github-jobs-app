import styled from "styled-components";
import { device } from "./MediaQueries";

export const H1 = styled.h1`
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  margin: 1rem 0;

  @media ${device.tablet} {
  }
`;
export const H2 = styled.h2`
  font-weight: normal;
  font-size: 24;
  line-height: 29px;
`;
export const H3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
`;

export const H4 = styled.h4`
  font-size: 14px;
  line-height: 18px;
`;
export const H6 = styled.h6`
  line-height: 32px;
  margin-bottom: 0;
  letter-spacing: 0.5px;
`;

export const BodyIntro = styled.p`
  line-height: 140%;
`;
export const BodyMain = styled.p`
  font-size: 15px;
  line-height: 28px;
`;

export const SmallTitle = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.571429px;
`;
