import React from 'react';
import { StyledComponent } from 'styled-components';

export interface CheckboxControlProps {
  active: boolean;
  activeColor?: string;
  disabled: boolean;
}

export interface CheckboxProps {
  initialValue?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  activeColor?: string;
  label?: React.ReactNode;
  components?: {
    Control?: StyledComponent<any, any, CheckboxControlProps, never>;
    Input?: StyledComponent<any, any, any, never>;
    Label?: StyledComponent<any, any, any, never>;
  };
}
