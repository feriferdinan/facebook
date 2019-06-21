import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';


export default class Name extends Component {

    

  render() {
  
    return (
       
                            <View style={{margin:15,alignItems:"center",top:-100}} >
                                <Text style={{fontWeight:"bold",fontSize:20,color:"black"}} >Mark Zuckerberg</Text>
                            </View>
                         
    )
  }
}