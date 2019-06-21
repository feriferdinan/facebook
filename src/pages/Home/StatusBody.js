import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';


import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


import styles from './Home.style'


export default class StatusBody extends Component {



   

  render() {
      const {text,image} = this.props;
   
    return (            
              <View style={{backgroundColor:'#ffffff'}}  >
              <TouchableOpacity>
                <View style={{marginHorizontal:9}} >
                  <Text style={{padding:5}} >{text}</Text>
                </View>
                </TouchableOpacity>
                  <TouchableOpacity>                  
                   <View style={{width:"100%",width:"100%",  flexDirection:'row',flexWrap:"wrap"}} >
                    <Image source={{uri:image}} style={{height:300,width:'100%',resizeMode:"cover"}} />
                </View>
        
                </TouchableOpacity>
                  
              </View>
    )
  }
}


