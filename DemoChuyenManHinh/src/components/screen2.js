import React, { Component } from 'react';

import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Demo2 extends Component {
    // static navigationOptions = ({navigation})=>({
    //     title : `${navigation.state.params.name}`
    // })
    render() {
        return (
            <View>
                <Text>Demo 1</Text>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('demo1')}>
                    <Text>Go to Demo1</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}