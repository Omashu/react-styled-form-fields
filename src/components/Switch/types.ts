import { StyledComponent } from 'styled-components';

export interface IButtonProps {
  active: boolean;
  activeColor?: string;
}

export interface ISwitchProps {
  initialValue?: boolean;
  onChange?: (checked: boolean) => void;
  activeColor?: string;
  on?: React.ReactNode;
  off?: React.ReactNode;
  components?: {
    Button?: StyledComponent<any, any, IButtonProps, never>;
    Input?: StyledComponent<any, any, any, never>;
    TextSwitchOn?: StyledComponent<any, any, any, never>;
    TextSwitchOff?: StyledComponent<any, any, any, never>;
    Circle?: StyledComponent<any, any, any, never>;
  };
}
