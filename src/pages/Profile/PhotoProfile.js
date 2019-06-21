import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';



export default class PhotoProfile extends Component {

    

  render() {
  
    return (
        
             <View style={{margin:15,alignItems:"center",top:-100}} >
                   <TouchableOpacity>
                       <Image source={{uri:"https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg"}}
                              style={{width:150,height:150,resizeMode:"cover",borderRadius:100,borderWidth:5,borderColor:"white"}}
                         />
                    </TouchableOpacity>
            </View>
                            
    )
  }
}