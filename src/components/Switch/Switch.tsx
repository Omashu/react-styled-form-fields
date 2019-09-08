import React, { useState } from 'react';
import { useUpdateEffect } from '../../effects';
import { SwitchProps } from './types';
import * as Components from './styled';

export * from './styled';
export * from './types';

export function Switch(props: SwitchProps) {
  const value = !!props.initialValue;
  const [active, changeActive] = useState(value);
  const toggleActive = () => changeActive(!active);

  useUpdateEffect(() => changeActive(value), [value]);
  useUpdateEffect(() => {
    if (typeof props.onChange === 'function') {
      props.onChange(active);
    }
  }, [active]);

  const SwitchComponents = typeof props.components === 'object' ? { ...Components, ...props.components } : Components;

  return (
    <SwitchComponents.Control activeColor={props.activeColor} active={active} onClick={toggleActive}>
      <SwitchComponents.Input value={active.toString()} />
      <SwitchComponents.TextSwitchOn>{props.on !== undefined && <span>{props.on}</span>}</SwitchComponents.TextSwitchOn>
      <SwitchComponents.TextSwitchOff>
        {props.off !== undefined && <span>{props.off}</span>}
      </SwitchComponents.TextSwitchOff>
      <SwitchComponents.Circle />
    </SwitchComponents.Control>
  );
}
