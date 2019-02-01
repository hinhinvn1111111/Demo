import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyD1vfjVf0VGuYnpdEWhWCfQ3Hd8STVtmbQ';

const {width,height} =Dimensions.get('window');

export default class ChiDuong extends Component {
  constructor(props){
    super(props);
    this.state = {
        lat : 0,
        long : 0,
        draw : false,
        id : 0
    }
  }
  componentWillMount(){
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat =position.coords.latitude;
            const long = position.coords.longitude;
            this.setState({lat,long})
            //alert(lat + "       " + long)
        },
        (error) => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
  }
  _ChiDuong(){
        if(this.state.draw===true){
          return(
              <MapViewDirections
                origin={{
                  latitude:10.877640,
                  longitude:106.766193
                }}
                destination={{
                  latitude:10.871497,
                  longitude:106.764358
                }}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="pink"
              />
            )
        }
        else{
          return null;
        }
  }
  
  render() {
    return (
        <View style={{width,height}}>
          <MapView key={this.state.id}
            initialRegion={{
              latitude:10.877640,
              longitude:106.766193,
              latitudeDelta:0.009,
              longitudeDelta:0.012
            }}
            showsUserLocation={true}
        	  followsUserLocation={true}
            showsMyLocationButton={true}
            style={{width:"100%",height:"70%"}}
            >
            <MapView.Circle 
                center={{latitude:10.877640,longitude:106.766193}}
                radius={200}
                strokeWidth={1}
                fillColor="rgba(255,0,0,0.1)"
            />
            <MapView.Marker
                coordinate={{latitude:this.state.lat,longitude:this.state.long}}
            />
            {/*-------------------------- Vẽ đường đi giữa 2 điểm -----------------------*/}
            <MapView.Marker 
              coordinate={{
                latitude:10.877640,
                longitude:106.766193
              }}
            />
            <MapView.Marker 
              coordinate={{
                latitude:10.871497,
                longitude:106.764358
              }}
            />
            {/* <MapViewDirections
              origin={{
                latitude:10.877640,
                longitude:106.766193 
              }}
              destination={{
                latitude:10.871497,
                longitude:106.764358
              }}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="pink"
            /> */}
            {this._ChiDuong()}
        </MapView>
        <TouchableOpacity style={{position:'absolute',width:100,height:50,backgroundColor:'rgba(156, 39, 176, 0.3)'}} onPress={()=>{this.setState({draw:!this.state.draw,id:this.state.id + 1})}}>
              <Text>Chỉ đưởng</Text>
        </TouchableOpacity>
        </View>
    );
  }
}
