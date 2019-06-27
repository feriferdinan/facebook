import React, { Component } from 'react';
import {AsyncStorage, Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Home/Header'
import Tab from '../Home/Tab'


export default class index extends Component {

    
    constructor(){
        super()
        this.state={
         menu: require('../../data/menu.json')
  
        }
      }

      _handleLogout = () =>{
        AsyncStorage.clear();
        Navigation.push(this.props.componentId,{
            component:{
              name:"Login"
            }
          })
      }

  render() {
  
    return (
        
        <View>
        <Header />
        <Tab  componentId={this.props.componentId} />
        <ScrollView showsVerticalScrollIndicator={false}   >


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

          <Divider style={{backgroundColor:'grey'}} />
          <TouchableOpacity   >
                <ListItem 
                    containerStyle={{backgroundColor:"#f5f6f8"}}
                    title="Keluar"
                    leftIcon={{ name:"log-out",type:"entypo", color:'#4167b2' }}
                    onPress={this._handleLogout}
                />
            </TouchableOpacity>
          <Divider style={{backgroundColor:'grey'}} />

            <View style={{marginBottom:100}} >

            </View>
          </ScrollView>
          </View>
    )
  }
}