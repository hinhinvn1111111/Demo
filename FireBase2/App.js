
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,YellowBox} from 'react-native';
import Login from './src/login';
import Register from './src/register';
import {createStackNavigator,createAppContainer} from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);


export default class App extends Component{
  render() {
    return (
        <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    Details: Register
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);


