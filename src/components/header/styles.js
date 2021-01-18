import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import img from "../../images/bg-pattern-header.svg";

export const StyledHeader = styled.header`
  width: 100%;
  height: 160px;

  background-image: url(${img});
  /* border-radius: 0px 0px 100px 0px;
  transform: matrix(-1, 0, 0, 1, 0, 0); */
`;
export const HeaderWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 2rem 0;
`;
export const SearchWrapper = styled.div`
  display: grid;
  grid-template-areas: "search location action";

  width: 1100px;
  height: 80px;
  margin: 0 auto;
  background-color: ${themes.light.white};
  border-radius: 6px;
  input {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    padding: 1rem 0;
    width: 100%;
    border: none;
    background: 0;

    outline: none;
    &:focus {
      border: none;
      border-bottom: 3px solid green;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Searchbox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid ${themes.light.violet};
`;
export const LocationBox = styled.div``;
export const ActionBox = styled.div``;
