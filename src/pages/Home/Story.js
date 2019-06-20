import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';

import styles from './Home.style'

export default class Story extends Component {
    constructor(){
        super()
        this.state={
         story:  require('../../data/story.json')
        }
      }

  render() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >

        <View style={{backgroundColor:'#ffffff',width:'100%', height:160}}  >
       <View style={{flex:1,flexDirection:'row',paddingHorizontal:6}} >
           {/* add own story */}
         <View style={styles.wrapperImageStory} >
           <Image style={styles.imageStory} 
                 source={require('../../assets/img/profile/mark.jpg')} />
           <Image style={{resizeMode:'cover',position:'absolute',margin:7,width:30,height:30,borderRadius:100}}
                 source={require('../../assets/img/icon/plus.jpg')} />
                 <Text style={styles.namePeopleStory} >Tambahkan Ke Cerita</Text>
         </View>
         {
             this.state.story.map((item,index) => {
                 return(
                   <View style={styles.wrapperImageStory} key={index} >
                   <Image style={styles.imageStory} 
                         source={{uri: item.storyPict}}/>
                         <View style={styles.wrapperPublicStory} >
                       <Image style={{resizeMode:'cover',position:'absolute',width:27,height:27,borderRadius:100}}
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