/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class Item extends Component {
  render(){
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <View >
          <Text style={styles.badge}>{this.props.name[0]}</Text>
        </View>
        <View>
          <Text style={{marginTop: 10, fontWeight: 'bold'}}>{this.props.name}</Text>
          <Text style={{color: '#777'}}>lorem Ipsum Hum Lorem Guin {this.props.name}</Text>
        </View>
      </View>

      )
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./image/12.png')} />
        <Item name="Jackie Chan"/>
        <Item name="Amir Khan"/>
        <Item name="Shar Khan"/>
        <Item name="Bat man"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  badge: {
    width: 48, 
    height: 48,
    borderRadius: 49,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#777',
  },
});
