import { Dimensions, Platform } from 'react-native';

const windowSize = Dimensions.get('window');
const navBarHeight = Platform.OS === 'ios' ? 72 : 50;
const ratioW = windowSize.width / 375;
const ratioH = windowSize.height / 812;
const ratio = Math.min(ratioW, ratioH);


export const isIPhoneXSize = (dim) => dim.height > 812 || dim.width > 812;

export const isIphoneX = () => {
  const dim = Dimensions.get('window');

  return (
    Platform.OS === 'ios'
    && isIPhoneXSize(dim)
  );
};
export const PADDING_BOTTOM = isIphoneX() ? 30 : 10;
export {
  windowSize, navBarHeight, ratioW, ratioH, ratio
};
