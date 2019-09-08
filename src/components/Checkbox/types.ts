import React from 'react';
import { StyledComponent } from 'styled-components';

export interface CheckboxControlProps {
  active: boolean;
  activeColor?: string;
}

export interface CheckboxProps {
  initialValue?: boolean;
  onChange?: (checked: boolean) => void;
  activeColor?: string;
  on?: React.ReactNode;
  off?: React.ReactNode;
  components?: {
    Control?: StyledComponent<any, any, CheckboxControlProps, never>;
    Input?: StyledComponent<any, any, any, never>;
  };
}
