import {ratioH, ratioW} from '../../utils/devices';
import {Fonts, Colors} from '../../constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 0,
  },
  avatar: {
    width: 89 * ratioW,
    height: 89 * ratioW,
    borderRadius: 5,
  },
  title_container: {
    justifyContent: 'center',
    borderRightWidth: 5,
    borderColor: Colors.text,
    alignItems: 'flex-end',
    paddingHorizontal: 5 * ratioW,
  },
  title_icon: {},
  title_description: {fontFamily: Fonts.BRegular, color: Colors.text},
  username: {
    fontFamily: Fonts.BBold,
    fontSize: 20,
    color: Colors.text,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.BRegular,
    marginBottom: 15 * ratioH,
  },
  underlineText: {
    fontFamily: Fonts.BMedium,
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 15 * ratioH,
  },
  imageBackground: {
    width: 375 * ratioW,
    height: 423 * ratioH,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imageBackgroundText: {
    fontFamily: Fonts.CBold,
    textDecorationLine: 'underline',
    fontSize: 24,
    color: Colors.text,
  },
  headerBg: {
    paddingVertical: 10 * ratioH,
    flexDirection: 'row',
  },
});

export default styles;
