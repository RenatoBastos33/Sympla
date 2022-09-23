import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import styles from './styles';

type BackgroundProps = ViewProps & {};

const Background: React.FC<BackgroundProps> = ({
  style,
  children,
}: BackgroundProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Background;
