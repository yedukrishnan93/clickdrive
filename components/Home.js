import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import {Card} from 'react-native-elements';
import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Card
          style={{padding: 10, margin: 10, height: 800, width: 800, flex: 1}}>
          <Text style={styles.wordStyle}>
            Sign up {'\n'}Create new Account {'\n'}
          </Text>
          <TextInput
            style={styles.signupBox}
            placeholder="Enter your phone number"
          />
          <Text>{'\n'}</Text>
          <Button
            title="Continue"
            onPress={() => this.props.navigation.navigate('Verification')}
          />
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
    borderRadius: 2,
    borderWidth: 0.5,
  },
  wordStyle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: '#0274f5',
    height: 250,
    width: 370,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
