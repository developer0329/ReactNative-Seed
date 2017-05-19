import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeightTmp = width < height ? height : width;
const bottomMargin = 24;

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: screenHeightTmp,  
};

export default metrics;
