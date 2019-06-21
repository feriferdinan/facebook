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


export default class FriendRequest extends Component {

    

  render() {
    let data =this.props.data;
    data = data.sort((a,b) => b.count - a.count );
    let topTwoData = data.slice(0,2);
  
    return (
        
      <View>
              <TouchableOpacity>
                <View style={{ backgroundColor:'#ffffff'}} >
                  <View style={{marginHorizontal:10,marginVertical:10}} >
                    <Text style={{fontWeight:'bold',color:"black"}}>Permintaan Pertemanan</Text>
                    <Text style={{color:"#306bbc",position:"absolute",right:0}}>LIHAT SEMUA</Text>
                  </View>
                </View>
              </TouchableOpacity>

             <Divider color="grey" />
             {
                 topTwoData.map((item,index) => {
                     return(

             <TouchableOpacity key={index} >
             <View style={{flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff'}}  > 
                <View style={{flex:1,margin:10}} >
                    <Image style={{width:60,height:60,borderRadius:100}}
                    source={{uri:item.profilePict}}
                    />
                </View>
                <View style={{flex:4,margin:10}} >
                  <Text style={{fontWeight:'800',color:'black'}} >{item.name}</Text>
                  <Text style={{fontWeight:'100',color:'black'}} >mengirimi anda permintaan Pertemanan</Text>
                  <Text style={{fontWeight:'100',color:'grey',fontSize:12.5}} >{item.sameFriend} teman yang sama</Text>
                  <View style={{flexDirection:"row",marginTop:10}} >
                  <TouchableOpacity>
                    <View style={{height:30,width:120,backgroundColor:"#1878f3",borderRadius:5,marginRight:'4.5%'}}>
                      <Text style={{color:"#fff",fontWeight:"400",justifyContent:"center",textAlign:"center",paddingVertical:"5%"}} >KONFIRMASI</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{height:30,width:120,backgroundColor:"#ffff",borderRadius:5,borderWidth:0.5,marginLeft:"4.5%"}}>
                      <Text style={{color:"grey",fontWeight:"400",justifyContent:"center",textAlign:"center",paddingVertical:"5%"}} >HAPUS</Text>
                    </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex:1,marginTop:15}} >
                <IconF name="more-horizontal" size={30} color="grey" />
                </View>
              </View>
            </TouchableOpacity>
                     );
                 })
             }

            
                <Divider color="grey" />
            <TouchableOpacity>
                <View style={{ backgroundColor:'#ffffff',marginBottom:5}} >
                  <View style={{marginHorizontal:10,marginVertical:10,alignItems:"center"}} >
                    <Text style={{fontWeight:'300',color:"grey"}}>Lihat Semua ></Text>
                  </View>
                </View>
              </TouchableOpacity>
                <Divider color="grey" />

            </View>
    )
  }
}