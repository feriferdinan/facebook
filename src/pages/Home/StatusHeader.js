import React, { Component } from 'react';
import {BackHandler,AsyncStorage, Modal,Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';

import TimeAgo from 'react-native-timeago';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';

const axios = require('axios');


import styles from './Home.style'


export default class StatusHeader extends Component {
  constructor(){
    super()

    BackHandler.addEventListener('hardwareBackPress', function() {
       return this.setModalVisible(false)
     
    });
  
    this.state={
      modalVisible:false,

      inputStatus:"",
      token:""
    }
  }
  setModalVisible(visible){
    this.setState({modalVisible:visible})
  }
  
  async componentDidMount(){
    const valueToken= await AsyncStorage.getItem('token')
    this.setState({
      token:valueToken
    })
    console.log("ini token statusheader",this.state.token)
   }

  _deletePost = (id) => {
    var id = id
    console.log(id)
    that = this
     let config = {
      headers: {
        'Authorization': 'jwt ' + this.state.token
      }
    }
    axios.delete(`http://192.168.0.24:3000/feeds/${id}`,config)
    .then(function (response) {
      console.log(response.data)
    })
    
    .catch(function (error) {
      console.log(error);
    });
  }

  _updatePost = (id) => {
    var id = id
    console.log(id)
    that = this
     let config = {
      headers: {
        'Authorization': 'jwt ' + this.state.token
      }
    }
    axios.get(`http://192.168.0.24:3000/feeds/${id}`,config)
    .then(function (response) {
      console.log(response.data.data)
    }) .catch(function (error) {
      console.log(error);
    });
  }

  

  render() {
      const {avatar,name,createdAt,id} = this.props;
   
    return (
      <View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <TouchableOpacity  onPress={()=>this.setModalVisible(false)} >
          <View style={{height:460,backgroundColor:"rgba(0, 0, 0, 0.3)"}} />
          </TouchableOpacity>
          <TouchableOpacity   >
            <View style={{positon:"absolute",bottom:0}}>
                  <ListItem 
                      containerStyle={{backgroundColor:"#ffff"}}
                      title="Hapus"
                      leftIcon={{ name:"trash",type:"evilicon", color:'grey' }}
                      onPress={()=>this._deletePost(id)}
                  />
                  <ListItem 
                      containerStyle={{backgroundColor:"#ffff"}}
                      title="Edit Postingan"
                      leftIcon={{ name:"pencil",type:"evilicon", color:'grey' }}
                      onPress={()=>this._updatePost(id)}
                  />
                  
              </View>
            </TouchableOpacity>  
  
        </Modal>
        
              <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff'}}  >
              <View style={{flex:1,marginTop:10}} >
                  <Image style={styles.imageProfile}
                  source={{uri:avatar}}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
              <Text style={{fontWeight:'bold',color:'black'}} >{name}</Text>
              
              <TimeAgo time={createdAt} interval={30000} />
              
                  </View>
              <TouchableOpacity onPress={() => {this.setModalVisible(true)}} >
                <View style={{flex:1,marginTop:15}} >
                  <IconF name="more-horizontal" size={30} color="grey" />
                </View>
              </TouchableOpacity>
              </View>
              </TouchableOpacity>

      
              </View>
    )
  }
}