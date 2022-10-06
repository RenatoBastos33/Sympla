import RoundIconButton from '@atoms/buttons/roundIconButton';
import {pixelSizeHorizontal} from '@utils/normalize';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Image, ImageProps, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

type EventImageCard = ImageProps & {};

const EventImageCard: React.FC<EventImageCard> = ({
  source,
  ...rest
}: EventImageCard) => {
  const IMAGE_HEIGHT = pixelSizeHorizontal(100);
  const IMAGE_WIDTH = (IMAGE_HEIGHT * 16) / 9; //pixel ratio of 16:9
  const ICON_SIZE = pixelSizeHorizontal(38);
  const MARGIN_ICON = pixelSizeHorizontal(5);
  const CONTAINER_ICON_SIZE_HORIZONTAL = (ICON_SIZE + MARGIN_ICON) * 2;

  return (
    <View
      style={[
        {height: IMAGE_HEIGHT + 2, width: IMAGE_WIDTH + 2},
        styles.container,
      ]}>
      <Image
        source={source}
        style={[{height: IMAGE_HEIGHT, width: IMAGE_WIDTH}, styles.image]}
        {...rest}
      />
      <View
        style={[
          {
            bottom: ICON_SIZE + MARGIN_ICON,
            width: CONTAINER_ICON_SIZE_HORIZONTAL,
            left: IMAGE_WIDTH - CONTAINER_ICON_SIZE_HORIZONTAL,
          },
          styles.iconsContainer,
        ]}>
        <RoundIconButton iconName="share-variant-outline" size={ICON_SIZE} />
        <RoundIconButton iconName="heart-outline" size={ICON_SIZE} />
      </View>
    </View>
  );
};

export default EventImageCard;
