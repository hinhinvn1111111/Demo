
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import DemoModal from './src/modal';
import Modal from 'react-native-modalbox';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Modal 
            ref={'myModal'}
            position={'bottom'}
            style={{height:80,backgroundColor:'#fff'}}
          >
            <TouchableOpacity onPress={()=>alert('Update')} style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image 
                  style={{width:26,height:26,resizeMode:'cover'}}
                  source={{uri:'https://img.icons8.com/ios/2x/ball-point-pen-filled.png'}}
                />
              </View>
              <Text style={{fontSize:18,flex:4}}>Chỉnh sửa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>alert('Delete')} style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image 
                  style={{width:26,height:26,resizeMode:'cover'}}
                  source={{uri:'https://img.icons8.com/ios/2x/cancel.png'}}
                />
              </View>
              <Text style={{fontSize:18,flex:4}}>Xóa</Text>
            </TouchableOpacity>
            
          </Modal>
          <TouchableOpacity onPress={()=>this.refs.myModal.open()}>
              <Text>Show myModal</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

