import React, { Component } from 'react';
import { 
    View,
    Text
} from 'react-native';

import Modal from 'react-native-modalbox';

export default class DemoModal extends Component {
    state = {  }
    show(){
        this.refs.myModal.open();
    }
    render() {
        return (
            <Modal 
                ref={'myModal'}
                style={{
                    justifyContent:'center',
                    width:200,
                    height:200
                }}
                onClosed={()=>alert('close')}
            >
                <Text>aaaaaaaa</Text>
            </Modal>
        );
    }
}