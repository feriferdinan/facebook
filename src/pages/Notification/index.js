import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Home/Header'
import Tab from '../Home/Tab'


export default class index extends Component {

    

  render() {
  
    return (
        
        <View>
        <Header />
        <Tab  componentId={this.props.componentId} />
        <ScrollView>
            <View>

            </View>
          </ScrollView>
          </View>
    )
  }
}