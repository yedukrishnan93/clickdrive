import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class BestGrid extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
        <View style={{width: 50, height: 50}}>
          <Image source={require('../assets/car.png')} style={{width: 50, height: 50}}></Image>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
        <Image source={require('../assets/car.png')} style={{width: 50, height: 50}}></Image>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
        <Image source={require('../assets/car.png')} style={{width: 50, height: 50}}></Image>
        </View>
      </View>
    );
  }
}
