import React, { Component } from 'react';
import { 
  View
} from 'react-native';


import DemoParallaxScrollView from './src/ParallaxScrollView';

export default class App extends Component {
  state = {  }
  render() {
    return (
        <DemoParallaxScrollView />
    );
  }
}