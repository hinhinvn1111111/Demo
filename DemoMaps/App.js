import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
        place : '',
        lat : 0,
        long : 0
    }
  }
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      type: 'address',
      country: 'VN',
      latitude: 53.544389,
      longitude: -113.490927,
      radius: 10
    })
    .then((place) => {
		  this.setState({place:place.name,lat:place.latitude,long:place.longitude})
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => alert(error.message));  // error is a Javascript Error object
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput onFocus={()=>this.openSearchModal()}
          style={{width:150,height:40,backgroundColor:'#fff'}}
          value={this.state.place}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(this.state.lat + '-'+this.state.long)}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
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
  }
});
