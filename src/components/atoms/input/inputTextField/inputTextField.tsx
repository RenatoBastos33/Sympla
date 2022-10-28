import {Colors} from '@styles';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type InputTextFieldProps = TextInputProps & {};

const InputTextField: React.FC<InputTextFieldProps> = ({
  style,
  ...rest
}: InputTextFieldProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={Colors.GRAY_DARK}
      {...rest}
    />
  );
};

export default InputTextField;
