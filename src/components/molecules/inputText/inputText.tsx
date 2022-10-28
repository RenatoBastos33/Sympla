import InputTextField from '@atoms/input/inputTextField';
import {Colors} from '@styles';
import {pixelSizeVertical} from '@utils/normalize';
import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInputProps, View, ViewProps} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// import { Container } from './styles';

type InputTextProps = TextInputProps & {
  placeholder: string | undefined;
};

const InputText: React.FC<InputTextProps> = ({
  onChangeText,
  ...rest
}: InputTextProps) => {
  const ICON_SIZE = pixelSizeVertical(28);

  const [actualText, setActualText] = useState<string>('');

  var onInput = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
    setActualText(text);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.leftContainer}>
        <View style={[styles.iconContainer]}>
          <MaterialCommunityIcon
            name="magnify"
            size={ICON_SIZE}
            color={Colors.GRAY_DARK}
          />
        </View>
        <InputTextField {...rest} onChangeText={onInput} />
      </View>
      {actualText.length > 0 && (
        <View style={[styles.iconContainer]}>
          <MaterialCommunityIcon
            name="close"
            size={ICON_SIZE}
            color={Colors.GRAY_DARK}
          />
        </View>
      )}
    </View>
  );
};

export default InputText;
