import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';



import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';



import Header from '../Home/Header'
import Tab from '../Home/Tab'

import styles from './Notification.style'
import FriendRequest from './FriendRequest'


export default class index extends Component {
constructor(){
  super();
  this.state={
    newfriend:require("../../data/friendrequest.json")
  }
}
    

  render() {
  
    return (
        
        <View>
        <Header />
        <Tab  componentId={this.props.componentId} />

          <ScrollView>

            <View style={styles.container} >
              <FriendRequest data={this.state.newfriend} />

            </View>
          </ScrollView>

        </View>
    )
  }
}