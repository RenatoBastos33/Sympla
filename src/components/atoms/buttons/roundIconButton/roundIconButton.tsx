import {Colors} from '@styles';
import {pixelSizeHorizontal} from '@utils/normalize';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// import { Container } from './styles';

type RoundIconButtonProps = ViewProps & {
  iconName: string;
  size: number;
};

const RoundIconButton: React.FC<RoundIconButtonProps> = ({
  iconName,
  size,
}: RoundIconButtonProps) => {
  return (
    <View
      style={[
        {
          borderRadius: pixelSizeHorizontal(size) / 2,
          height: pixelSizeHorizontal(size),
          width: pixelSizeHorizontal(size),
        },
        styles.container,
      ]}>
      <MaterialCommunityIcon
        name={iconName}
        size={pixelSizeHorizontal(size - 13)}
        color={Colors.PRIMARY}
      />
    </View>
  );
};

export default RoundIconButton;
