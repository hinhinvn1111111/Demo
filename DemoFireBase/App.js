import React, {Component} from 'react';
import {Platform, ListView,StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Firebase from 'firebase';

export default class App extends Component{
  constructor(props){
    super(props);
    var root = new Firebase('https://tlcn-a8f24.firebaseio.com/');
    // this.itemsRef = root.child('HinHin'); // Trỏ đến nhánh HinHin
    this.itemsRef = root;
    this.state = {
        tao_hang : new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
    this.items = [];
    this.itemsRef.on('child_added',(dataSnapshot)=>{
        this.items.push({
            id : dataSnapshot.key(),
            value : dataSnapshot.val().HinHin
        })

        this.setState({
            tao_hang:this.state.tao_hang.cloneWithRows(this.items)
        })
    })
  }
  saveSET(){
      this.itemsRef.set({
          ReactNative:"KP"
      })
  }
  savePUSH(){
      this.itemsRef.child('Demo PUSH').push({
          PUSH : "Firebase in ReactNative"
      })
  }
  ADDdata(){
      this.itemsRef.child("HinHin/ReactNative").on("value",function(snapshot){
          alert(snapshot.val());
      })
  }
  taodulieuchohang(datarow){
      return(
        <View>
            <Text>{datarow.value}</Text>
            <View style={{height:1,backgroundColor:'black'}}></View>
        </View>
      )
  }
  render() {
    return (
      <View style={styles.container}>
          {/* <TouchableOpacity onPress={()=>this.saveSET()}>
            <Text>Lưu phương thức SET</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.savePUSH()}>
            <Text>Lưu phương thức PUSH</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.ADDdata()}>
            <Text>Lưu phương thức Add</Text>
          </TouchableOpacity> */}
          <Text>Danh sách firebase</Text>
          <ListView 
            dataSource={this.state.tao_hang}
            renderRow={this.taodulieuchohang.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
