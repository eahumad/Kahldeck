import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/es/form';
import { Key } from '../domain/Key';


interface CustomKeysInputProps extends Omit<FormItemProps, 'children'> {
  value?: Key[];
  onChange?: (keys: Key[]) => void;
}

const CustomKeysInput: React.FC<CustomKeysInputProps> = ({
  value = [],
  onChange,
  ...formItemProps
}) => {
  const handleSelectedKeyClick = (keyToRemove: Key) => {
    const newValue = value.filter(k => k.key !== keyToRemove.key);
    onChange?.(newValue);
  };

  return (
    <Form.Item {...formItemProps}>
      <div id="macro-box">
        {value.map((key, index) => (
          <React.Fragment key={key.key + "-macro-box"}>
            <button
              className={key.width === 1 ? "key" : `key width-${key.width}`}
              onClick={() => handleSelectedKeyClick(key)}
              type="button"
            >
              {key.name}
            </button>
            {index < value.length - 1 && <span>+</span>}
          </React.Fragment>
        ))}
      </div>
    </Form.Item>
  );
};

export default CustomKeysInput;