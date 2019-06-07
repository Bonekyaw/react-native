/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

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
          <Text style={styles.badge}>A</Text>
        </View>
        <View>
          <Text style={{marginTop: 10, fontWeight: 'bold'}}>David Chan</Text>
          <Text style={{color: '#777'}}>lorem Ipsum Hum Lorem Guin</Text>
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
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
