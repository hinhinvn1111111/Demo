import React, { Component } from 'react';
import { 
    View,
    Text
} from 'react-native';

export default class Chitet extends Component {
    state = {  }
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={{flex:1,backgroundColor:'lightblue'}}>
                <Text>{params.name}</Text>
            </View>
        );
    }
}