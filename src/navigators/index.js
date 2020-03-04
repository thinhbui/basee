import React from 'react';
import {createAppContainer} from 'react-navigation';
import {TouchableOpacity, Image} from 'react-native';
import TabNavigation from './tabNavigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Icons, Fonts } from 'src/constants';


const Root = createStackNavigator(
  {
    TabNavigation: {
      screen: TabNavigation,
      navigationOptions: {
        headerShown: false,
      },
    }
  },
  {
    defaultNavigationOptions: {
      headerLeft: ({onPress}) => (
        <TouchableOpacity
          style={{}}
          hitSlop={{top: 15, bottom: 25, left: 15, right: 15}}
          onPress={onPress}>
          <Image source={Icons.back} />
        </TouchableOpacity>
      ),
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerTitleStyle: {
        fontFamily: Fonts.BLight,
      },
      headerBackTitleStyle: {},
    },
  },
);
const App = createAppContainer(Root);

export default App;
