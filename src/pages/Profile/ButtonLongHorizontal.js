import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import styles from './Profile.style'



export default class ButtonLongHorizontal extends Component {

    

  render() {
  
    return (
    
            <View style={{marginVertical:7,backgroundColor:"#ecedf1",borderRadius:10,width:"90%",alignItems:"center"}} >
                <Text style={{color:"black",padding:10}} >+ Tambahkan Hobi</Text>
            </View>
                                
    )
  }
}