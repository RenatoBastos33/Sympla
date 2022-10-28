import InputTextField from '@atoms/input/inputTextField';
import {Colors} from '@styles';
import {pixelSizeVertical} from '@utils/normalize';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewProps} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// import { Container } from './styles';

type InputTextProps = ViewProps & {
  placeholder: string | undefined;
};

const InputText: React.FC<InputTextProps> = ({placeholder}: InputTextProps) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.iconContainer]}>
        <MaterialCommunityIcon
          name="magnify"
          size={pixelSizeVertical(28)}
          color={Colors.GRAY_DARK}
        />
      </View>
      <InputTextField placeholder={placeholder} />
    </View>
  );
};

export default InputText;
