import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'https://img.icons8.com/ios/2x/apple-app-store-filled.png';
        } else if (routeName === 'Settings') {
          iconName = 'https://img.icons8.com/nolan/2x/apple-app-store.png';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Image source={{uri:iconName}} style={{width:20,height:20,resizeMode:'cover'}} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }

);