/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './app/Main/Main';
import Intro from './app/Intro/Intro';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RNClassPassIntro extends Component {
  state = {
    loggedIn: false,
  }
  createAccount = () => {
    console.log('Create account')
  }
  subscribe() {
  }
  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loggedIn ? (
              <Intro screenProps={{
                createAccount: this.createAccount
              }} />
          ) : (
              <Main />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNClassPassIntro', () => RNClassPassIntro);
