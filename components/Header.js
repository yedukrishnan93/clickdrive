import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import {Card} from 'react-native-elements';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Image
          source={require('../assets/icon.png')}
          style={{left: 130}}></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0274f5',
    position:"relative",
    height: 250,
    width: 370,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
