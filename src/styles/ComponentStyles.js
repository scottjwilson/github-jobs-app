import styled from "styled-components"
import { device } from "../styles/MediaQueries"

export const Container = styled.div`
  max-width: 400px;
  @media ${device.laptop} {
    max-width: 1100px;
  }
`
export const Button = styled.button`
  color: white;
  width: 100%;

  background: linear-gradient(134.79deg, #63e1d9 -42.11%, #34a0cd 100%);
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
  border-radius: 999em;
  padding: 1rem 0;

  @media ${device.laptop} {
    width: 280px;
  }
`
