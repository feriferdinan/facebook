import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


import styles from './Home.style'


export default class CreateStatus extends Component {

    
    constructor(){
        super()
        this.state={
         post:  require('../../data/post.json')
  
        }
      }

  render() {
  
    return (
        
        <View>
        {
            this.state.post.map((item,index) => {
                return(
          <View key={index} style={{marginTop:5,marginBottom:5}}  >
              <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff'}}  >
              <View style={{flex:1,marginTop:10}} >
                  <Image style={styles.imageProfile}
                  source={{uri:item.profilePict}}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
              <Text style={{fontWeight:'bold',color:'black'}} >{item.name}</Text>
              <Text style={{fontWeight:'100',color:'black'}} >{item.datePost}</Text>
                  </View>
              <View style={{flex:1,marginTop:15}} >
              <IconF name="more-horizontal" size={30} color="grey" />
              </View>
              </View>
              </TouchableOpacity>

            
              <View style={{backgroundColor:'#ffffff'}}  >
              <TouchableOpacity>
                <Text style={{padding:5}} >{item.content.text}</Text>
                </TouchableOpacity>
                  <TouchableOpacity>                  
                  <View style={{width:"100%",width:"100%",  flexDirection:'row',flexWrap:"wrap"}} >
                    <Image source={{uri:item.content.image}} style={{height:105,width:'100%'}} />
                  
                </View>
                </TouchableOpacity>
                  
              </View>
             

              <Divider style={{backgroundColor:'grey'}} />
              <View style={{width:'100%', height:40,backgroundColor:'#ffffff'}} >
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:6,backgroundColor:'#ffffff'}} >
            
                  <View style={styles.wrapperLikeComment} >
                  <TouchableOpacity>
                  <IconAnt style={styles.likeComment}  name="like2" size={25} color="grey" />
                    </TouchableOpacity>
                  </View>
                
                <View style={styles.wrapperLikeComment} >
                <TouchableOpacity>
                <Icon style={styles.likeComment}  name="comment-alt" size={25} color="grey" />
                 
                  </TouchableOpacity>
                </View>
                <View style={styles.wrapperLikeComment} >
                <TouchableOpacity>
                <IconMCI style={styles.likeComment}  name="share-outline" size={30} color="grey" />
                  </TouchableOpacity>
                
                </View>
                </View>
              </View>

              <Divider style={{backgroundColor:'grey'}} />

           
          </View>
                )
            }) 
          }
          </View>
    )
  }
}