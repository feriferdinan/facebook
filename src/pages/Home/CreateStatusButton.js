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

const axios = require('axios');

export default class CreateStatusButton extends Component {
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
    console.log("ini token createstatusbuton",this.state.token)
   }

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId,{
      component:{
        name:screenName
      }
    });
  }
  setModalVisible(visible){
    this.setState({modalVisible:visible})
  }

  handleCreateStatus = () => {
    let config = {
      headers: {
        'Authorization': 'jwt ' + this.state.token
      }
    }
    axios.post('http://192.168.0.24:3000/feeds',{
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
      <TouchableOpacity  onPress={() => {
        this.setModalVisible(true);
      }}>
        <Modal
          style={{height:'100%',width:'100%'}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View>
          <ListItem 
            containerStyle={{backgroundColor:"#30477c"}}
            title="Buat Postingan"
            leftElement={
              <TouchableHighlight onPress={() => {this.setModalVisible(false)}} >             
                <IconAnt name="arrowleft" color="#ffff" size={20} />
              </TouchableHighlight>
            }
            rightElement={
              <TouchableHighlight onPress={() => {this.handleCreateStatus(),this.setModalVisible(false)}} >
                <Text style={{color:"#fff"}} >Kirim</Text>
              </TouchableHighlight>
            }
            titleStyle={{color:"#fff"}}
          />
            <View style={{flexDirection:"column", backgroundColor:'#ffffff',margin:10}} >
            <View style={{flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff'}}  >
              <View style={{flex:1,marginTop:10, width:40,
      height:40,borderRadius:100,backgroundColor:"grey"}} >
                  <Image style={styles.imageProfile}
                    source={{ }}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
              <Text style={{fontWeight:'bold',color:'black'}} >Mark Zukenberg</Text>
                <View style={{flexDirection:"row",marginVertical:5}}>
                    <TouchableOpacity>
                        <View style={{height:25,backgroundColor:"#ffff",borderRadius:7,borderWidth:0.4,flexDirection:"row",alignItems:"center",padding:5,marginRight:10}}>
                            <IconMCI name="earth" size={14} color="#8e949b" />
                            <Text style={{color:"#8e949b",fontWeight:"400",marginHorizontal:5}} >Public</Text>
                            <IconAnt name="caretdown" size={14} color="#8e949b" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{height:25,backgroundColor:"#ffff",borderRadius:7,borderWidth:0.4,flexDirection:"row",alignItems:"center",padding:5}}>
                            <IconAnt name="plus" size={14} color="#8e949b" />
                            <Text style={{color:"#8e949b",fontWeight:"400",marginHorizontal:5}} >Album</Text>
                            <IconAnt name="caretdown" size={14} color="#8e949b" />
                        </View>
                    </TouchableOpacity>
                </View>
                  </View>
              <View style={{flex:1,marginTop:15}} >
              
              </View>
              </View>
              <View >
                  <TextInput placeholder="Apa yang Anda pikirkan?" style={{fontSize:20,flexWrap:"wrap"}} 
                    onChangeText={(text) => this.setState({
                      inputStatus:text
                    })}
                  />
              </View>

            </View>
            </View>
  
        </Modal>
        <View style={{flexDirection:'row',paddingHorizontal:6 , backgroundColor:'#ffffff',marginTop:10,marginBottom:5}} >
        <View style={{flex:1,marginVertical:5,marginTop:8}} >
          <TouchableOpacity  onPress={() => this.goToScreen("Profile")} >
            <Image style={styles.imageProfile}
            source={require('../../assets/img/profile/mark.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:6,margin:10}} >
            <View style={{borderWidth:0.5,borderRadius:50,paddingLeft:20,height:35,paddingVertical:5}} >
              <Text>Apa yang Anda Pikirkan?</Text>
            </View>
            </View>
        <View style={{flex:1}} >
            <IconFeather style={{width:24,height:32,marginTop:8,marginLeft:5}}  name="image" size={25} color="grey" />
            <Text style={{color:'grey',fontWeight:"100",fontSize:11.5,top:-6,left:5}} >Foto</Text>
        </View>
    </View>
    </TouchableOpacity>
    )
  }
}

