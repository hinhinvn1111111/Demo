import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {Field,reduxForm} from 'redux-form';

const renderField = ({label,keyboardType,name})=>{
    return(
        <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
            <Text style={{fontSize:14,fontWeight:'bold',width:80}}>{label}</Text>
            <TextInput 
                style={{borderColor:'steelblue',borderWidth:1,height:37,width:220,padding:5}}
                keyboardType={keyboardType}            

            />
        </View>
    );
}
// const ConteactComponent = props =>{
//     const {handleSubmit} = props;
//     return(
//         <View style={{flex:1,flexDirection:'column',margin:40,justifyContent:"center"}}>
//             <Text style={{fontSize:18,fontWeight:'bold',width:200,textAlign:"center",margin:10}}>Redux-form Example</Text>
//             <Field keyboardType="default" label="Username: " component={renderField} name="Username" />
//             <Field keyboardType="email-address" label="Email: " component={renderField} name="Email" />
//             <TouchableOpacity onPress={handleSubmit} style={{margin:10,alignItems:"center"}}>
//                 <Text style={{backgroundColor:"steelblue",color:'white',fontSize:16,height:37,width:200,textAlign:"center",margin:10}}>Submit</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
class ConteactComponent  extends Component {
    state = {  }
    render() {
        const {handleSubmit} = props;
        return (
            <View style={{flex:1,flexDirection:'column',margin:40,justifyContent:"center"}}>
                <Text style={{fontSize:18,fontWeight:'bold',width:200,textAlign:"center",margin:10}}>Redux-form Example</Text>
                <Field keyboardType="default" label="Username: " component={renderField} name="Username" />
                <Field keyboardType="email-address" label="Email: " component={renderField} name="Email" />
                <TouchableOpacity onPress={handleSubmit} style={{margin:10,alignItems:"center"}}>
                    <Text style={{backgroundColor:"steelblue",color:'white',fontSize:16,height:37,width:200,textAlign:"center",margin:10}}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ContactForm = reduxForm({
    form:'contact'
})(ConteactComponent)