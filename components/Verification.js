import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import Header from './Header';
export default class Verification extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
    };
  }
  handleChange = evt => this.setState({code: evt});
  render() {
    const {code} = this.state;
    const isEnabled = typeof code !== 'undefined' && code.length > 0;
    return (
      <View style={styles.container}>
        <Header></Header>
        <Card style={{padding: 10, margin: 10, top: 200}}>
          <Text style={{justifyContent: 'center', textAlign: 'center'}}>
            Verification Code {'\n'}Please enter the verification code send to{' '}
            {'\n'}
          </Text>
          <TextInput
            style={styles.signupBox}
            placeholder="--- --- --- ---"
            value={this.state.code}
            onChangeText={this.handleChange}></TextInput>
          <Text>{'\n'}</Text>
          <Button
            title="Continue"
            onPress={() =>
              this.props.navigation.navigate('Registration')
            }
            disabled={!isEnabled}></Button>
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
  },
});
