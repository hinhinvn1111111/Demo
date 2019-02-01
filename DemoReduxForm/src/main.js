

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import {Provider} from 'react-redux';
import ContactForm from './components/contactForm';

const handleSubmit=vl=>{
    alert(`submitting form with value = ${vl}`)
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <ContactForm handleSubmit={handleSubmit} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
