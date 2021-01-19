import styled from "styled-components";
import { WiDaySunny, WiMoonAltWaxingCrescent2 } from "react-icons/wi";

export const Sun = styled(WiDaySunny)`
  color: white;
  font-size: 2rem;
`;
export const Moon = styled(WiMoonAltWaxingCrescent2)`
  color: white;

  font-size: 2rem;
`;
export const ToggleContainer = styled.div`
  /* The switch - the box around the slider */
  position: absolute;
  top: 2rem;
  right: 30rem;
  display: flex;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(244, 246, 248);

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: rgb(89, 100, 224);

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: rgb(244, 246, 248);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
// export const ToggleContainer = styled.button`
//   background: ${({ theme }) => theme.gradient};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   border-radius: 30px;
//   cursor: pointer;
//   display: flex;
//   font-size: 0.5rem;
//   justify-content: space-between;
//   margin: 0 auto;
//   overflow: hidden;
//   padding: 0.5rem;
//   position: relative;
//   width: 8rem;
//   height: 4rem;

//   svg {
//     height: auto;
//     width: 2.5rem;
//     transition: all 0.3s linear;

//     // sun icon
//     &:first-child {
//       transform: ${({ lightTheme }) =>
//         lightTheme ? "translateY(0)" : "translateY(100px)"};
//     }

//     // moon icon
//     &:nth-child(2) {
//       transform: ${({ lightTheme }) =>
//         lightTheme ? "translateY(-100px)" : "translateY(0)"};
//     }
//   }
// `;
