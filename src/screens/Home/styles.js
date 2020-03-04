import {Fonts, Colors} from 'src/constants';
import { windowSize } from 'src/utils/devices';

const styles = {
  text: {
    fontFamily: Fonts.CBold,
    textDecorationLine: 'underline',
    fontSize: 24,
    color: Colors.text,
  },
  swiperContainer:{
    width: windowSize.width,
    height: (windowSize.width * 375) / 424,

  },
  imageSwiper:{
    width: windowSize.width,
    height: (windowSize.width * 375) / 424,
    paddingHorizontal: 20,
    paddingVertical: 30,
  }
};
export default styles;
