import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Demo extends Component {
    // _get(){
    //     return fetch('https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyDqkHt6XLNjOL0-orGPUSbEaeNUuACtRhg')
    //     .then((response)=>response.json())
    //     .then((responseJson)=>{
    //         alert(responseJson.status);
    //     })
    //     .catch((e)=>{
    //         alert(e);
    //     })
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{}}>
                    <Text>GET</Text>
                </TouchableOpacity>
            </View>
        );
    }
}