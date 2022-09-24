import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextProps} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type BodyProps = TextProps & {};

const Body: React.FC<BodyProps> = ({children, style, ...rest}: BodyProps) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Body;
