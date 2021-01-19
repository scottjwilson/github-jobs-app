import React from "react";
import {
  StyledHeader,
  HeaderWrapper,
  SearchWrapper,
  Row,
  Searchbox,
  LocationBox,
  ActionBox,
} from "./styles";
import { Button } from "../../styles/ComponentStyles";
import logo from "../../images/logo.svg";
export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <img src={logo} alt="devjobs" />
      </HeaderWrapper>
      <SearchWrapper>
        <Row>
          <Searchbox>
            <input />
          </Searchbox>
          <LocationBox>
            <input />
          </LocationBox>
          <ActionBox>
            <checkbox></checkbox>
            <Button>Search</Button>
          </ActionBox>
        </Row>
      </SearchWrapper>
    </StyledHeader>
  );
};
