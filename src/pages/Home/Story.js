import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';

import styles from './Home.style'

export default class Story extends Component {
    

  render() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >

        <View style={{backgroundColor:'#ffffff',width:'100%', height:230}}  >
       <View style={{flex:1,flexDirection:'row',paddingHorizontal:5,marginVertical:10}} >
           {/* add own story */}
         <View style={styles.wrapperImageStory} >
           <Image style={styles.imageStory} 
                 source={require('../../assets/img/profile/mark.jpg')} />
           <Image style={{resizeMode:'cover',position:'absolute',margin:7,width:40,height:40,borderRadius:100}}
                 source={require('../../assets/img/icon/plus.jpg')} />
                 <Text style={styles.namePeopleStory} >Tambahkan Ke Cerita</Text>
         </View>
         {
             this.props.data.map((item,index) => {
                 return(
                   <View style={styles.wrapperImageStory} key={index} >
                   <Image style={styles.imageStory} 
                         source={{uri: item.storyPict}}/>
                         <View style={styles.wrapperPublicStory} >
                       <Image style={{resizeMode:'cover',position:'absolute',width:34,height:34,borderRadius:100}}
                         source={{uri: item.storyPict}} />
                         </View>
                         <Text style={styles.namePeopleStory} >{item.name}</Text>
                 </View>
                 );
             }) 
           }
         
       </View>
       </View>
        </ScrollView>
    )
  }
}