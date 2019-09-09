import React, { useState } from 'react';
import { useUpdateEffect } from '../../effects';
import { CheckboxProps } from './types';
import * as Components from './styled';

export * from './styled';
export * from './types';

export function Checkbox(props: CheckboxProps) {
  const value = !!props.initialValue;
  const [active, changeActive] = useState(value);
  const toggleActive = () => !props.disabled && changeActive(!active);

  useUpdateEffect(() => changeActive(value), [value]);
  useUpdateEffect(() => {
    if (typeof props.onChange === 'function') {
      props.onChange(active);
    }
  }, [active]);

  const CheckboxComponents = typeof props.components === 'object' ? { ...Components, ...props.components } : Components;

  return (
    <CheckboxComponents.Control
      disabled={!!props.disabled}
      activeColor={props.activeColor}
      active={active}
      onClick={toggleActive}
    >
      <CheckboxComponents.Input disabled={!!props.disabled} value={active.toString()} />
      <CheckboxComponents.RealmPoint>
        <CheckboxComponents.RealmPointCheck>
          <CheckboxComponents.CheckIcon>✓</CheckboxComponents.CheckIcon>
        </CheckboxComponents.RealmPointCheck>
      </CheckboxComponents.RealmPoint>
      {props.label !== undefined && <CheckboxComponents.Label>{props.label}</CheckboxComponents.Label>}
    </CheckboxComponents.Control>
  );
}
