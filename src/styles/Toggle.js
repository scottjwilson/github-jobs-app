import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ToggleContainer } from "./Toggle.styled";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { WiDaySunny, WiMoonAltWaxingCrescent2 } from "react-icons/wi";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer>
      <WiDaySunny />
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <WiMoonAltWaxingCrescent2 />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
