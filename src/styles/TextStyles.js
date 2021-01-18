import styled from "styled-components"
import { device } from "./MediaQueries"

export const H1 = styled.h1`
  font-size: 26px;
  line-height: 36px;
  font-weight: 700;
  margin: 1rem 0;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 60px;
  }
`
export const H2 = styled.h2`
  font-weight: normal;
  font-size: 56px;
  line-height: 56px;
`
export const H3 = styled.h3`
  font-size: 32px;
  line-height: 40px;
`

export const H3Small = styled.h3`
  font-size: 18px;
  line-height: 25px;
`

export const H4 = styled.h4`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 0.5rem;
`
export const H6 = styled.h6`
  line-height: 32px;
  margin-bottom: 0;
  letter-spacing: 0.5px;
`

export const BodyIntro = styled.p`
  line-height: 140%;
`
export const BodyMain = styled.p`
  font-size: 15px;
  line-height: 28px;
`

export const SmallTitle = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.571429px;
`
