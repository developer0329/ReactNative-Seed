import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeightTmp = width < height ? height : width;
const bottomMargin = 24;

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: screenHeightTmp,
  inputCtrlHeight: 40,
  mainPadding: 10, 
};

export default metrics;
