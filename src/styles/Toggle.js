import React from "react";
import { func, string } from "prop-types";
import { Sun, Moon, ToggleContainer } from "./Toggle.styled";

const Toggle = ({ toggleTheme }) => {
  return (
    <ToggleContainer>
      <Sun />
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <Moon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
