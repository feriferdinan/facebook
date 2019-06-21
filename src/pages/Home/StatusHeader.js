import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';


import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


import styles from './Home.style'


export default class StatusHeader extends Component {



   

  render() {
      const {profilePict,name,datePost} = this.props;
   
    return (
        
              <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff'}}  >
              <View style={{flex:1,marginTop:10}} >
                  <Image style={styles.imageProfile}
                  source={{uri:profilePict}}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
              <Text style={{fontWeight:'bold',color:'black'}} >{name}</Text>
              <Text style={{fontWeight:'100',color:'black'}} >{datePost}</Text>
                  </View>
              <View style={{flex:1,marginTop:15}} >
              <IconF name="more-horizontal" size={30} color="grey" />
              </View>
              </View>
              </TouchableOpacity>

      
    
    )
  }
}