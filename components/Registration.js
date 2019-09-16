import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import Datepicker from './Datepicker';
import Header from "./Header";

export default class Registrartion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Card style={{padding: 10, margin: 10}}>
          <Text style={{justifyContent: 'center', textAlign: 'center'}}>
            Sign up {'\n'}Create new Account {'\n'}
          </Text>
          <TextInput
            style={styles.signupBox}
            placeholder="Full name"></TextInput>
          <Text>{'\n'}</Text>
          <TextInput style={styles.signupBox} placeholder="Email"></TextInput>
          <Text>{'\n'}</Text>
          <Datepicker></Datepicker>
          <Text>{'\n'}</Text>
          <TextInput
            style={styles.signupBox}
            placeholder="Location"></TextInput>
          <Text>{'\n'}</Text>

          <Button
            title="Create Account"
            onPress={() =>
              this.props.navigation.navigate('Interests')
            }></Button>
        </Card>
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
  signupBox: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200
  },
});
