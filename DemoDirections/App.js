import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native';
import ChiDuong from './src/chiduong';
import Example from './src/model';
import WheelPicker from './src/wheelPicker';
import MapWithCalosual from './src/mapwithcasual';
//import AnimatedViews from './src/demoMapAnimated';
import DemoView from './src/DemoViewDep';
export default class App extends Component {
  state = {  }
  render() {
    return (
        <View style={{flex:1}}>
            <DemoView />
        </View>
    );
  }
}