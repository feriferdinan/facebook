import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';


import styles from './Home.style'


export default class CreateStatus extends Component {

  render() {
    return (
        <View style={{flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff',marginTop:10,marginBottom:5}} >
        <View style={{flex:1,marginVertical:5,marginTop:8}} >
            <Image style={styles.imageProfile}
            source={require('../../assets/img/profile/mark.jpg')}
            />
        </View>
        <View style={{flex:6,margin:10}} >
            <TextInput style={{borderWidth:0.5,borderRadius:50,paddingLeft:20,height:35}}  placeholder='Apa yang Anda pikirkan?' placeholderTextColor='black' ></TextInput>
            </View>
        <View style={{flex:1}} >
            <IconFeather style={{width:24,height:32,marginTop:8,marginLeft:5}}  name="image" size={25} color="grey" />
            <Text style={{color:'grey',fontWeight:"100",fontSize:11.5,top:-6,left:1}} >Photo</Text>
        </View>
    </View>
    )
  }
}