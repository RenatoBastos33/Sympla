import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextProps} from 'react-native';
import styles from './styles';

type TitleProps = TextProps & {};

const Title: React.FC<TitleProps> = ({style, children}: TitleProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Title;
