import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SafeAreaView, View, ViewProps} from 'react-native';
import styles from './styles';

type BackgroundProps = ViewProps & {};

const Background: React.FC<BackgroundProps> = ({
  style,
  children,
}: BackgroundProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Background;
