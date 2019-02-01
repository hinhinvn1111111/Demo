import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';


const {width,height} = Dimensions.get('window');

import {firebaseApp} from './fibaseConfig';



export default class Register extends Component {
    constructor(prosp){
        super(prosp);
        this.state={
            usn : '',
            pw : ''
        }
    }
    // dangki(){
    //     firebaseApp.auth().createUserWithEmailAndPassword(this.state.usn, this.state.pw)
    //     .then(()=>{
    //         Alert.alert(
    //             'Alert Title',
    //             'Dang ki thanh cong : '+this.state.usn,
    //             [
    //               {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //               {text: 'OK', onPress: () => console.log('OK Pressed')},
    //             ],
    //             { cancelable: false }
    //           )
    //         this.setState({
    //             usn : '',
    //             pw : ''
    //         })
    //     })
    //     .catch(function(error) {
    //         alert('dang ki that bai');
    //     });
    // }
    render() {
        return (
            <View style={{width,height,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
                <TextInput onChangeText={(value)=>this.setState({usn:value})} style={{marginTop:50,borderWidth:1,backgroundColor:'#fff',height:40,width:300}}  value={this.state.usn} />
                <TextInput secureTextEntry={true} onChangeText={(value)=>this.setState({pw:value})} style={{marginTop:10,borderWidth:1,backgroundColor:'#fff',height:40,width:300}}  value={this.state.pw} />
                
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={{padding:10,marginTop:30,textAlign:'center',color:"#fff",fontWeight:'bold',width:100,height:40,backgroundColor:'blue',borderRadius:5,justifyContent:'center',alignItems:'center'}}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}