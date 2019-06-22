import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import styles from './Profile.style'

import Header from '../Home/Header'
import Tab from '../Home/Tab'
import Wallpaper from './Wallpaper'
import PhotoProfile from './PhotoProfile';
import Name from './Name';
import Bio from './Bio';
import About from './About'
import CircleButton from './CircleButton';


export default class index extends Component {

    

  render() {
  
    return (
        
        <View>
            <Header />
                <Tab  componentId={this.props.componentId} />
                 <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.container} >
                        <View style={{backgroundColor:"white",position:'relative'}} >
                            <Wallpaper />
                            <PhotoProfile />
                            <Name />
                            <Bio />
                            <CircleButton />
                            <About />

                            <View style={{alignItems:"center"}} >
                            <Divider color="grey" width="90%" />
                            </View>  
                            <View style={{marginVertical:10,alignItems:"center",top:-100 ,flexDirection:"column",justifyContent:"center" }} >
                                <View style={{marginVertical:7,backgroundColor:"#ecedf1",borderRadius:10,width:"90%",alignItems:"center"}} >
                                    <Text style={{color:"black",padding:10}} >+ Tambahkan Hobi</Text>
                                </View>
                                <View style={{marginVertical:7,backgroundColor:"#ecedf1",borderRadius:10,width:"90%",alignItems:"center"}} >
                                    <Text style={{color:"black",padding:10}} >Tambahkan Item Unggulan</Text>
                                </View>
                                <View style={{marginVertical:7,backgroundColor:"#e4f2ff",borderRadius:10,width:"90%",alignItems:"center"}} >
                                    <Text style={{color:"#1c77eb",padding:10}} >Edit Detail Publik</Text>
                                </View>
                            </View>


                            <View style={{margin:10,top:-100 ,flexDirection:"row" }} >
                                <View style={{marginVertical:7}} > 
                                    <Text style={{color:"black",fontWeight:"bold",fontSize:20}} >Teman</Text>
                                    <Text style={{color:"grey",fontWeight:"normal",fontSize:18}} >1.554 Teman</Text>
                                </View>
                                <View style={{marginVertical:7,position:"absolute",right:0}} >
                                    <Text style={{color:"#1c77eb",fontWeight:"normal",fontSize:18}} >Cari Teman</Text>
                                </View>
                            </View>
                                <View style={{marginHorizontal:10,top:-100,flexDirection:"row",flexWrap:"wrap",flexBasis:"28%"}}>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                                <View style={{flexDirection:"column"}} >
                                    <Image source={{uri:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2Fa7c0a756d6b04801bd97d880c40e4113%2F960x0.jpg%3Ffit%3Dscale"}}
                                            style={{width:100,height:100,resizeMode:"cover",borderRadius:10,margin:5}}
                                     />
                                    <Text style={{marginHorizontal:10}} >John Wick</Text>
                                </View>
                            </View>

                        </View>
                    </View>


                </ScrollView>
        </View>
    )
  }
}