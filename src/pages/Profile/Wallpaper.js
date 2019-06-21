import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';


export default class Wallpaper extends Component {

    
 

  render() {
  
    return (
        
             <View style={{margin:15}} >
                <TouchableOpacity>
                 <Image source={{uri:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2016%2F08%2Fmark-zuckerberg-1024.jpg&w=400&c=sc&poi=face&q=85"}}
                   style={{borderTopLeftRadius:10,borderTopRightRadius:10,width:"100%",height:240,resizeMode:"cover"}}
                    />
                </TouchableOpacity>
              </View>
                           
    )
  }
}