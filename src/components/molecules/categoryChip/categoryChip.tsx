import Avatar from '@atoms/images/avatar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AvatarProps} from '@atoms/images/avatar/avatar';
import Body from '@atoms/text/body';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type CategoryChipProps = AvatarProps & {
  text: string;
};

const CategoryChip: React.FC<CategoryChipProps> = ({
  text,
  size,
  ...rest
}: CategoryChipProps) => {
  return (
    <View style={[styles.container, {width: size}]}>
      <View style={styles.image}>
        <Avatar size={size} {...rest} />
      </View>
      <Body style={styles.text}>{text}</Body>
    </View>
  );
};

export default CategoryChip;
