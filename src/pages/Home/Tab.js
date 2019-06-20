import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';

import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconE from 'react-native-vector-icons/Entypo';


import styles from './Home.style'


export default class Tab extends Component {

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId,{
      component:{
        name:screenName
      }
    });
  }
  


  render() {
    return (
        <View style={{backgroundColor:'#ffff',width:'100%', height:50,borderBottomWidth:1,borderBottomColor:'#e3e3e3'}} >
        <View style={{flex:1,flexDirection:'row',paddingHorizontal:6}} >
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity  >
                <IconE style={styles.iconTab}  name="newsletter" size={30} color="grey" onPress={() => this.goToScreen("Home")} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity>
                <IconMCI style={styles.iconTab}  name="account-group-outline" size={30} color="grey" onPress={() => this.goToScreen("Home")}  />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity>
                <Icon style={{marginTop:5}}  name="store" size={21} color="grey" onPress={() => this.goToScreen("Home")} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity>
                <IconMCI style={styles.iconTab}  name="account-circle-outline" size={30} color="grey" onPress={() => this.goToScreen("Home")} />
          </TouchableOpacity>
          </View>
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity>
                <IconIon style={styles.iconTab}  name="ios-notifications-outline" size={30} color="grey" onPress={() => this.goToScreen("Home")} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperIconTab} >
            <TouchableOpacity>
                <IconFeather style={styles.iconTab}  name="menu" size={30} color="grey" onPress={() => this.goToScreen("Menu")} />
            </TouchableOpacity>
          </View>
          </View>
        </View>
    )
  }
}