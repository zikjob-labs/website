import React, { forwardRef, RefAttributes, useState } from 'react';
import { RadioProps } from './Radio';

interface Props {
  name?: string;
  value?: string;
  children: React.ReactElement<RadioProps & RefAttributes<HTMLInputElement>>[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RadioGroup({ name, value, children, onChange }: Props, ref: any) {
  const [valueState, setValueState] = useState(value);

  const handleChange =
    (child: React.ReactElement<RadioProps>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueState(child.props.value);

      if (onChange) {
        onChange(event);
      }
    };

  const items = children.map((child, index) => {
    return React.cloneElement(child, {
      key: index,
      ref,
      name,
      onChange: handleChange(child),
      checked: child.props.value == valueState,
      ...child.props,
    });
  });

  return <div>{items}</div>;
}

export default forwardRef(RadioGroup);
