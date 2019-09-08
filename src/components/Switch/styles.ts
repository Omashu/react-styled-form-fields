import styled from 'styled-components';
import { IButtonProps } from './types';

export const Button = styled.button<IButtonProps>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-transform: none;
  text-decoration: none;
  border-radius: 12px;
  border: 0;
  min-width: 52px;
  height: 22px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.active &&
    `
    background-color: ${props.activeColor || '#000'};

    ${Circle} {
      margin-left: calc(100% - 22px);
    }

    ${TextSwitchOn} {
      opacity: 1;
      transform: translate(0);
    }
  `};

  ${props =>
    !props.active &&
    `
    ${TextSwitchOff} {
      opacity: 1;
      transform: translate(0);
    }
  `}
`;

export const Input = styled.input.attrs(attrs => ({
  ...attrs,
  type: 'checkbox',
}))`
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(0, 0, 0);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: none;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: block;
  font-family: Arial;
  font-size: 13.3333px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 22px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  opacity: 0;
  outline-color: rgb(0, 0, 0);
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: absolute;
  text-align: start;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  width: 42px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  z-index: 200;
  -webkit-appearance: checkbox;
  -webkit-font-smoothing: antialiased;
  -webkit-rtl-ordering: logical;
`;

export const TextSwitchOn = styled.span`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-transform: none;
  text-decoration: none;
  position: absolute;
  display: block;
  opacity: 0;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.7rem;
  padding-left: 6px;
  left: 0;
  color: #fff;
  transform: translate(10px);
`;

export const TextSwitchOff = styled.span`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-transform: none;
  text-decoration: none;
  position: absolute;
  display: block;
  opacity: 0;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.7rem;
  right: 0;
  padding-right: 6px;
  color: #a0a0a0;
  transform: translate(-10px);
`;

export const Circle = styled.span`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-transform: none;
  text-decoration: none;
  display: block;
  width: 18px;
  height: 18px;
  position: absolute;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: all 0.25s ease;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;
