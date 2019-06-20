import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Home/Header'
import Tab from '../Home/Tab'


export default class Menu extends Component {

    
    constructor(){
        super()
        this.state={
         menu: require('../../data/menu.json')
  
        }
      }

  render() {
  
    return (
        
        <View>
        <Header />
        <Tab  componentId={this.props.componentId} />
        <ScrollView>

        {
            this.state.menu.profile.map((item,index) => {
                return(
                    <TouchableOpacity  key={index} >
                        <ListItem 
                           
                            leftAvatar={{ source: { uri: item.avatar_url } }}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </TouchableOpacity>
                )
            }) 
          }
          <Divider style={{backgroundColor:'grey'}} />
          {
            this.state.menu.shorcut.map((item,index) => {
                return(
                    <TouchableOpacity  key={index} >
                        <ListItem 
                            title={item.title}
                            subtitle={item.subtitle}
                            leftIcon={{ name:item.icon,type:item.type, color:'#4167b2' }}
                        />
                    </TouchableOpacity>
                )
            }) 
          }

          </ScrollView>
          </View>
    )
  }
}