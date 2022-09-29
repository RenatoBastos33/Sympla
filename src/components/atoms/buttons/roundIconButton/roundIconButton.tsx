import {Colors} from '@styles';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

type RoundIconButtonProps = ViewProps & {
  iconName: string;
};

const RoundIconButton: React.FC<RoundIconButtonProps> = ({
  iconName,
}: RoundIconButtonProps) => {
  return (
    <View style={{backgroundColor: 'red', height: 40}}>
      <MaterialCommunityIcon name={iconName} size={30} color={Colors.PRIMARY} />
    </View>
  );
};

export default RoundIconButton;
