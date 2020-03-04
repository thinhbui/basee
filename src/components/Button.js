import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {ratioH, ratio, ratioW} from '../utils/devices';
import {Fonts, Colors} from '../constants';

const Button = ({
  title,
  icon,
  bgColor,
  onPress,
  vectorIcon,
  containerStyle,
  textStyle,
  noIcon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onPress()}>
      {noIcon ? null : vectorIcon ? (
        <IonicIcons name={vectorIcon} size={25 * ratioW} color="#fff" />
      ) : (
        <Image
          source={icon}
          style={{
            marginRight: 22 * ratio,
          }}
        />
      )}
      <Text style={styles.text(textStyle)}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: Colors.Indigo,
};

export default Button;

const styles = {
  container: {
    backgroundColor: Colors.Indigo,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50 * ratio,
    borderRadius: 5,
    marginBottom: 10 * ratioH,
    paddingHorizontal: 15 * ratio,
  },
  text: textStyle => ({
    fontSize: 16 * ratio,
    color: '#fff',
    fontFamily: Fonts.BBold,
    marginBottom: 3,
    ...textStyle,
  }),
};
