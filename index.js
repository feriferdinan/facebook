/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Routing from './src/routing';



export default class App extends Component {
  render() {
    return (
      <Routing />
    );
  }
}
