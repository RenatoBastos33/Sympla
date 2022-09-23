// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextStyle} from 'react-native';
import {fontPixel} from '../utils/normalize';

type fontWeightType =
  | '400'
  | '700'
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '500'
  | '600'
  | '800'
  | '900'
  | undefined;

// FONT FAMILY
export const FONT_FAMILY_REGULAR: string = 'arial';
export const FONT_FAMILY_BOLD: string = 'arial-bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR: fontWeightType = '400';
export const FONT_WEIGHT_BOLD: fontWeightType = '700';

// FONT SIZE
export const FONT_SIZE_20: number = fontPixel(20);
export const FONT_SIZE_18: number = fontPixel(18);
export const FONT_SIZE_16: number = fontPixel(16);
export const FONT_SIZE_14: number = fontPixel(14);
export const FONT_SIZE_12: number = fontPixel(12);

// LINE HEIGHT
export const LINE_HEIGHT_24: number = fontPixel(24);
export const LINE_HEIGHT_20: number = fontPixel(20);
export const LINE_HEIGHT_16: number = fontPixel(16);

// FONT STYLE
export const FONT_REGULAR: TextStyle = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD: TextStyle = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
