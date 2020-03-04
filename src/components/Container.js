import React from 'react';
import {View} from 'react-native';
import { PADDING_BOTTOM } from 'src/utils/devices';

const Container = props => {
  const container = {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: PADDING_BOTTOM
  };
  return (
    <View
      style={[container, props.style]}
      >
      {props.children}
    </View>
  );
};

export default Container;
