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
          style={{left: 10,top:80}}></Image>
          <Text style={{justifyContent: 'center', textAlign: 'center',top:200}}>
            Hold Tight {'\n'}We are preparing instructor list 
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
      tabBarIcon: ({tintColor}) => {
        return (<Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/Home.png')}/>);
      },
    },
  },
  Add: {
    screen: UserHome,
    navigationOptions: {
      tabBarLabel: 'Add Lesson',
      tabBarIcon: ({tintColor}) => {
        return (<Image
          style={{ width: 60, height: 60 }}
          source={require('../assets/Add.png')}/>);
      },
    },
  },
  Profile: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Person',
      tabBarIcon: ({tintColor}) => {
        return (<Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/person.png')}/>);
      }
        
      ,
    },
  },
});
export default createAppContainer(TabNavigator);
