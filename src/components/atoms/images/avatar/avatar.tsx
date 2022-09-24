import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Image, ImageProps, View} from 'react-native';
import {widthPixel} from '../../../../utils/normalize';

// import { Container } from './styles';

export type AvatarProps = ImageProps & {
  size: number;
};

const RoundImage: React.FC<AvatarProps> = ({size, ...rest}: AvatarProps) => {
  return (
    <View>
      <Image
        style={{
          width: widthPixel(size),
          height: widthPixel(size),
          borderRadius: widthPixel(size) / 2,
        }}
        {...rest}
      />
    </View>
  );
};

export default RoundImage;
