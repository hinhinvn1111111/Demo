
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

arrLocations=[];

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        arr : []
    }
  }
  
  _load(){
    
        try{
            fetch('http://192.168.40.2:8888/Tieu_Luan_Chuyen_Nganh/Server/DemoCheckPlace.php',{
            method:'POST',
            body:JSON.stringify({
              Username : 'b',
                
            })
            })
            .then((response)=>response.json())
            .then((responsiveJSON)=>{
                for(let i of responsiveJSON){
                    //
                    //alert(i.ID);
                    arrLocations.push(i);
                }
            })
            .catch((e)=>{
                alert(e);
            })
        }catch{

        }
      
  }
  componentWillMount(){
    this._load();
  }
  _render(){
    if(arrLocations.length > 0) {
      
    }
    else{
      return(
        <View style={{flex:1,backgroundColor:'lightblue'}}>
          <Text onPress={()=>alert('aaaaaaaaa')} style={{fontSize:20}}>Thêm địa điểm</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
          {this._render()}
      </View>
    );
  }
}
