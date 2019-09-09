import React from 'react';
import { StyledComponent } from 'styled-components';

export interface SwitchProps {
  initialValue?: boolean;
  onChange?: (checked: boolean) => void;
  activeColor?: string;
  on?: React.ReactNode;
  off?: React.ReactNode;
  disabled?: boolean;
  components?: {
    Control?: StyledComponent<any, any, SwitchControlProps, never>;
    Input?: StyledComponent<any, any, any, never>;
    TextSwitchOn?: StyledComponent<any, any, any, never>;
    TextSwitchOff?: StyledComponent<any, any, any, never>;
    Circle?: StyledComponent<any, any, any, never>;
  };
}

export interface SwitchControlProps {
  active: boolean;
  activeColor?: string;
  disabled: boolean;
}
