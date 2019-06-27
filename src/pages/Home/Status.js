import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';


import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


import styles from './Home.style'

import StatusHeader from './StatusHeader';
import StatusBody from './StatusBody'
import StatusFooter from './StatusFooter'


export default class Status extends Component {
   

  render() {
   
    return (
        
        <View>
        {
            this.props.data.map((item,index) => {
                return(
                  <View key={index} style={{marginTop:5,marginBottom:5}}  >
                    <StatusHeader 
                        id={item.id}
                        avatar={item.user.avatar}
                        name={item.user.name}
                        createdAt={item.createdAt}
                      />
                      <StatusBody 
                        text={item.content}
                        image={item.media}
                      />
                      <StatusFooter response={item.response} />
                  </View>
                )
            }) 
        }
          </View>
    )
  }
}

