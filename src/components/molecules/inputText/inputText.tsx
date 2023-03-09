import InputTextField from '@atoms/input/inputTextField';
import {Colors} from '@styles';
import {pixelSizeVertical} from '@utils/normalize';
import React, {useEffect, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInputProps, TouchableWithoutFeedback, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
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

  const buttonOpacity = useSharedValue(0);

  var onInput = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
    setActualText(text);
  };
  useEffect(() => {
    const toOpacity = actualText ? 1 : 0;
    if (toOpacity !== buttonOpacity.value) {
      buttonOpacity.value = withTiming(toOpacity);
    }
  }, [actualText, buttonOpacity]);

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
        <InputTextField {...rest} value={actualText} onChangeText={onInput} />
      </View>

      <Animated.View style={[styles.iconContainer, {opacity: buttonOpacity}]}>
        <TouchableWithoutFeedback onPress={() => onInput('')}>
          <MaterialCommunityIcon
            name="close"
            size={ICON_SIZE}
            color={Colors.GRAY_DARK}
          />
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default InputText;
