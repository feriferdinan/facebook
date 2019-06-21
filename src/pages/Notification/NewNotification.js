import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';



import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';



import Header from '../Home/Header'
import Tab from '../Home/Tab'

import styles from './Notification.style'


export default class NewNotification extends Component {

    

  render() {
    let data =this.props.data;
    data = data.sort((a,b) => b.count - a.count );
    let topTwoData = data.slice(0,4);
  
    return (
        
      <View>
              <TouchableOpacity>
                <View style={{ backgroundColor:'#ffff'}} >
                  <View style={{marginHorizontal:10,marginVertical:10}} >
                    <Text style={{fontWeight:'bold',color:"black"}}>Baru</Text>
                  </View>
                </View>
              </TouchableOpacity>

             <Divider color="grey" />
             {
                 topTwoData.map((item,index) => {
                     return(

             <TouchableOpacity key={index} >
             <View style={{flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#e6f2ff'}}  > 
                <View style={{flex:1,margin:10}} >
                    <Image style={{width:60,height:60,borderRadius:100}}
                    source={{uri:item.profilePict}}
                    />
                </View>
                <View style={{flex:4,margin:10}} >
                  <Text style={{fontWeight:'800',color:'black'}} >{item.name}</Text>
                  <Text style={{fontWeight:'100',color:'black'}} >{item.newNotificationContent}</Text>
                  <Text style={{fontWeight:'100',color:'#477cbe',fontSize:12.5}} >{item.date}</Text>
                </View>
                <View style={{flex:1,marginTop:15}} >
                <IconF name="more-horizontal" size={30} color="grey" />
                </View>
              </View>
            </TouchableOpacity>
                     );
                 })
             }

            <View style={{marginBottom:5}} ></View>
                <Divider color="grey" />
    

            </View>
    )
  }
}