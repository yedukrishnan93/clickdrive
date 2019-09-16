import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import Header from './Header';
import Bestgrid from './Bestgrid';

export default class Interests extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Card style={{margin: 10, height: 400, width: 400}}>
          <Text style={{justifyContent: 'center', textAlign: 'center'}}>
            {' '}
            Select Interests{'\n'}Select Image which describe{'\n'}your
            interests
          </Text>
          <Button
            title="Continue"
            onPress={() => this.props.navigation.navigate('UserHome')}></Button>
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
