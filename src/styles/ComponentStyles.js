import styled from "styled-components";
import { device } from "../styles/MediaQueries";
import { themes } from "../styles/ColorStyles";

export const Container = styled.div`
  max-width: 400px;
  @media ${device.laptop} {
    max-width: 1100px;
  }
`;
export const Button = styled.button`
  color: white;
  width: 100%;
  font-size: 16px;
  line-height: 16px;

  font-weight: bold;
  background-color: ${themes.light.violet};
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
  border-radius: 6px;
  padding: 1rem 0;

  @media ${device.laptop} {
    width: 123px;
  }
`;
