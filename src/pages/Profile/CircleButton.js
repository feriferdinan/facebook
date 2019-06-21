import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';


export default class CircleButton extends Component {

    

  render() {
  
    return (
                            
                            <View style={{marginVertical:15,alignItems:"center",top:-100 ,flexDirection:"row",justifyContent:"center" }} >
                            <TouchableOpacity>
                                <View style={{flex:1,alignItems:"center",marginHorizontal:4}} >
                                    <View style={{backgroundColor:"#e6e2ff",borderRadius:100,alignItems:"center",padding:11}} >
                                        <IconAnt name="plus" color="#327bd9" size={30} />
                                    </View>
                                        <View style={{margin:5,alignItems:"center"}} >
                                            <Text style={{color:"#4f77b2",textAlign:"center",fontSize:11.5}}>Tambahkan</Text>
                                        </View>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={{flex:1,alignItems:"center",marginHorizontal:4}} >
                                    <View style={{backgroundColor:"#ecedf1",borderRadius:100,alignItems:"center",padding:11}} >
                                        <IconMCI name="eye" color="#1d1e22" size={30} />
                                    </View>
                                        <View style={{margin:5,alignItems:"center"}} >
                                            <Text style={{textAlign:"center",fontSize:11.5}} >Lihat Sebagai</Text>
                                        </View>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={{flex:1,alignItems:"center",marginHorizontal:4}} >
                                    <View style={{backgroundColor:"#ecedf1",borderRadius:100,alignItems:"center",padding:11,width:53}} >
                                        <Icon name="user-edit" color="#1d1e22" size={27} />
                                    </View>
                                        <View style={{margin:5,alignItems:"center"}} >
                                            <Text style={{textAlign:"center",fontSize:11.5}} >Edit Profile</Text>
                                        </View>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={{flex:1,alignItems:"center",marginHorizontal:4}} >
                                    <View style={{backgroundColor:"#ecedf1",borderRadius:100,alignItems:"center",padding:11}} >
                                        <IconFeather name="more-horizontal" color="#1d1e22" size={30} />
                                    </View>
                                        <View style={{margin:5,alignItems:"center"}} >
                                            <Text style={{textAlign:"center",fontSize:11.5}} >Selengkapnya</Text>
                                        </View>
                                </View>
                                </TouchableOpacity>
                            </View>

    )
  }
}