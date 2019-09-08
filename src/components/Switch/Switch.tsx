import React, { useState } from 'react';
import { useUpdateEffect } from '../../effects';
import { ISwitchProps } from './types';
import * as Components from './styles';

export function Switch(props: ISwitchProps) {
  const [active, changeActive] = useState(!!props.initialValue);
  const toggleActive = () => changeActive(!active);

  useUpdateEffect(() => {
    if (typeof props.onChange === 'function') {
      props.onChange(active);
    }
  }, [active]);

  const Button = props.components && props.components.Button ? props.components.Button : Components.Button;

  const Input = props.components && props.components.Input ? props.components.Input : Components.Input;

  const TextSwitchOn =
    props.components && props.components.TextSwitchOn ? props.components.TextSwitchOn : Components.TextSwitchOn;

  const TextSwitchOff =
    props.components && props.components.TextSwitchOff ? props.components.TextSwitchOff : Components.TextSwitchOff;

  const Circle = props.components && props.components.Circle ? props.components.Circle : Components.Circle;

  return (
    <Button activeColor={props.activeColor} active={active} onClick={toggleActive}>
      <Input />
      <TextSwitchOn>{props.on !== undefined && <span>{props.on}</span>}</TextSwitchOn>
      <TextSwitchOff>{props.off !== undefined && <span>{props.off}</span>}</TextSwitchOff>
      <Circle />
    </Button>
  );
}

Switch.Components = Components;
