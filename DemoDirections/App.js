

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude:10.873374 , longitude: 106.765019};
const destination = {latitude: 10.858017, longitude: 106.763414};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDNp7GDfCgIvRW4eL-l5ZA1-j5Ok_Wfo6s';

const {width,height}=Dimensions.get('window')
const ASPECT_RATIO=width/height
const LATITUDE_DELTA=0.009
const LONGTITUDE_DELTA=0.0012

import Demo from './src/demo';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      initialPositions : {
        latitude:0,
        longitude:0,
        latitudeDelta:0,
        longitudeDelta:0
      },
      markerPosition : {
        latitude:0,
        longitude:0
      }
    }
  }

  // watchID  = null;

  // componentDidMount(){
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //         var lat = parseFloat(position.coords.latitude);
  //         var long = parseFloat(position.coords.longitude);
          
  //         var initialRegion = {
  //             latitude:lat,
  //             longitude:long,
  //             latitudeDelta:LATITUDE_DELTA,
  //             longitudeDelta:LONGTITUDE_DELTA
  //         }
  //         this.setState({
  //             initialPositions:initialRegion,
  //             markerPosition:initialRegion
  //         })
  //     },
  //     (error)=>alert(JSON.stringify(error)),
  //     {enableHighAccuracy:true,timeout:20000,maximunAge:1000})

  //     this.watchID=navigator.geolocation.watchPosition((position)=>{
  //       var lat = parseFloat(position.coords.latitude);
  //         var long = parseFloat(position.coords.longitude);

  //         var lastRegion = {
  //             latitude:lat,
  //             longitude:long,
  //             latitudeDelta:LATITUDE_DELTA,
  //             longitudeDelta:LONGTITUDE_DELTA
  //         }
  //         this.setState({
  //             initialPositions:lastRegion,
  //             markerPosition:lastRegion
  //         })
  //     })
  // }

  // componentWillMount(){
  //     navigator.geolocation.clearWatch(this.watchID)
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
              latitude:10.873710,
              longitude:106.765134,
              latitudeDelta:0.09,
              longitudeDelta:0.012
          }}
          style={{width:"80%",height:"80%"}}
        >
          
          <MapView.Marker
            
            coordinate={{latitude:10.873710,longitude:106.765134}}
          >
            
          </MapView.Marker>
          {/* <Marker
            coordinate={{latitude:10.873710,longitude:106.765134}}
          >

          </Marker> */}
        </MapView>
        
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
  radius : {
    height:50,
    width:50,
    borderRadius:50/2,
    overflow:'hidden',
    backgroundColor:'rgba(0,122,255,0.1)',
    borderWidth:1,
    borderColor:'rgba(0,122,255,0.3)',
    alignItems:'center',
    justifyContent:'center'
  },
  marker:{
    height:20,
    width:20,
    borderWidth:3,
    borderColor:'white',
    borderRadius:20/2,
    overflow:'hidden',
    backgroundColor:'#007AFF'
  }
});


