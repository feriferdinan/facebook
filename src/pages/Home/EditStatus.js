import React, { Component } from 'react';
import { AsyncStorage,Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,Modal,TouchableHighlight} from 'react-native';
import { Navigation } from 'react-native-navigation';
import {ListItem} from 'react-native-elements'



import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';


import styles from './Home.style'
import configs from '../../../config'

const axios = require('axios');

export default class EditStatus extends Component {
    
    constructor(){
        super()
        this.state={
            modalVisible:false,
            inputStatus:"",
            token:""
    }
    }


  async componentWillMount(){
    const valueToken= await AsyncStorage.getItem('token')
    this.setState({
      token:valueToken
    })
    var id = this.props.id
    console.log(id)
    that = this
     let config = {
      headers: {
        'Authorization': 'jwt ' + this.state.token
      }
    }
    axios.get(`http://${configs.ipaddress}:3000/feeds/${id}`,config)
    .then(function (response) {
      console.log(response.data.data)
      that.setState({
          inputStatus:response.data.data.content
      })
    }) .catch(function (error) {
      console.log(error);
    });
}

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId,{
      component:{
        name:screenName
      }
    });
  }



  handleUpdateStatus = () => {
    this.setModalVisible(false)
    let config = {
      headers: {
        'Authorization': 'jwt ' + this.state.token
      }
    }
    axios.patch(`http://${configs.ipaddress}:3000/feeds`,{
      content: this.state.inputStatus
    },config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    
    return (
      
          <View>
          <ListItem 
            containerStyle={{backgroundColor:"#30477c"}}
            title="Edit Postingan"
            leftElement={
              <TouchableHighlight onPress={() => {this.setModalVisible(false)}} >             
                <IconAnt name="arrowleft" color="#ffff" size={20} />
              </TouchableHighlight>
            }
            rightElement={
              <TouchableHighlight onPress={() => {this.handleUpdateStatus()}} >
                <Text style={{color:"#fff"}} >Kirim</Text>
              </TouchableHighlight>
            }
            titleStyle={{color:"#fff"}}
          />
          
            <View style={{lex:1,flexDirection:"column",margin:10}} >
            <View style={{flexDirection:'row',paddingHorizontal:6 }}  >
              <View style={{flex:1,marginTop:10, width:40,
                            height:40,borderRadius:100,backgroundColor:"grey"}} >
                  <Image 
                    style={{ width:40,height:40,borderRadius:40}}
                    source={require('../../assets/img/profile/mark.jpg')}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
              <Text style={{fontWeight:'bold',color:'black'}} >Mark Zukenberg</Text>
                <View style={{flexDirection:"row",marginVertical:5}}>
                    <TouchableOpacity>
                        <View style={{height:25,borderRadius:7,borderWidth:0.4,flexDirection:"row",alignItems:"center",padding:5,marginRight:10}}>
                            <IconMCI name="earth" size={14} color="#8e949b" />
                            <Text style={{color:"#8e949b",fontWeight:"400",marginHorizontal:5}} >Public</Text>
                            <IconAnt name="caretdown" size={14} color="#8e949b" />
                        </View>
                    </TouchableOpacity>
                    
                </View>
                  </View>
              <View style={{flex:1,marginTop:15}} >
              
              </View>
              </View>
              <View >
                  <TextInput 
                    multiline = {true}
                    numberOfLines = {1}
                    value={this.state.inputStatus}
                    style={{fontSize:20,flexWrap:"wrap"}} 
                    onChangeText={(text) => this.setState({
                      inputStatus:text
                    })}
                  />
              </View>

            </View>
            </View>
  
       
    )
  }
}

