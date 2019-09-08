import styled from 'styled-components';
import { CheckboxControlProps } from './types';

export const Input = styled.input.attrs(attrs => ({
  ...attrs,
  type: 'checkbox',
}))`
  box-sizing: border-box;
  text-transform: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  text-decoration: none;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 200;
  cursor: pointer;
  background: rgb(85, 215, 117);
`;

export const RealmPoint = styled.span`
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  transform: rotate(-90deg);
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.2s ease 0s;
  border: 2px solid rgb(180, 180, 180);
`;

export const RealmPointCheck = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  transform: translate(100%);
  transform-origin: right center;
  z-index: 10;
  transition: all 0.2s ease 0s;
  text-align: center;
`;

export const Control = styled.div<CheckboxControlProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-pack: start;
  justify-content: flex-start;

  ${props =>
    props.active &&
    `
    ${RealmPoint}, ${RealmPointCheck} {
      transform: rotate(0deg);
      border: 0;
      background-color: ${props.activeColor || '#000'};
    }
  `}
`;

export const CheckIcon = styled.span`
  text-align: center;
  position: relative;
  top: -1px;
  color: #fff;
`;
