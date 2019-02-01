import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Login extends Component {
    static navigationOptions = {
        header : null
    };
    constructor(prosp){
        super(prosp);
        this.state={
            usn : '',
            pw : ''
        }
    }
    render() {
        return (
            <View style={{width,height,backgroundColor:'lightblue',alignItems:'center',justifyContent:'center'}}>
                <TextInput onChangeText={(value)=>this.setState({usn:value})} style={{marginTop:50,borderWidth:1,backgroundColor:'#fff',height:40,width:300}}  value={this.state.usn} />
                <TextInput secureTextEntry={true} onChangeText={(value)=>this.setState({pw:value})} style={{marginTop:10,borderWidth:1,backgroundColor:'#fff',height:40,width:300}}  value={this.state.pw} />
                <TouchableOpacity>
                    <Text style={{padding:10,marginTop:30,textAlign:'center',color:"#fff",fontWeight:'bold',width:100,height:40,backgroundColor:'blue',borderRadius:5,justifyContent:'center',alignItems:'center'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')}>
                    <Text style={{padding:10,marginTop:20,textAlign:'center',color:"#fff",fontWeight:'bold',width:100,height:40,backgroundColor:'blue',borderRadius:5,justifyContent:'center',alignItems:'center'}}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}