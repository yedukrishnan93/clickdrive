import React from 'react';
import {StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';
import {Card} from 'react-native-elements';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import {Icon} from "react-native-elements";
import Header from "./Header";

class UserHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Image
          source={require('../assets/car.png')}
          style={{left: 50}}></Image>
          <Text style={{justifyContent: 'center', textAlign: 'center'}}>
            Hold Tight {'\n'}We are preparing instructorlist 
            {'\n'}which match your interest.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: UserHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="add" color={tintColor} size={25} />
      ),
    },
  },
  Add: {
    screen: UserHome,
    navigationOptions: {
      tabBarLabel: '+',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={50} />
      ),
    },
  },
  Profile: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={25} />
      ),
    },
  },
});
export default createAppContainer(TabNavigator);
