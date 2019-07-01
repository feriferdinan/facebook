import React, { Component } from 'react';
import {Alert,BackHandler,AsyncStorage, Modal,Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

import TimeAgo from 'react-native-timeago';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';

const axios = require('axios');

import styles from './Home.style'
import configs from '../../../config'


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

  _deletePostConfirm = (id) => {
    this.setModalVisible(false)
     var id =id
      Alert.alert(
      'Hapus Postigan?',
      'Anda bisa mengeditnya jika ingin mengubah sesuatu',
      [
        {text: 'Hapus', onPress:()=> this._deletePost(id) },
        {
          text: 'Edit',
          onPress:()=> this._updatePost(id)
        },
        {text: 'Batal', onPress: () => console.log('OK Pressed'),
        style: 'cancel',
        },
      ],
      {cancelable: true},
    );
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
    axios.delete(`http://${configs.ipaddress}:3000/feeds/${id}`,config)
    .then(function (response) {
      console.log(response.data)
    })
    
    .catch(function (error) {
      console.log(error);
    });
  }

  _updatePost = async (id) => {
    this.setModalVisible(false)
    await Navigation.push(this.props.componentId,{
      component:{
        name:"EditStatus",
        passProps: {
          id: id
        }
      }
    })
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
          <View style={{height:605,backgroundColor:"rgba(0, 0, 0, 0.3)"}} />
          </TouchableOpacity>
          <TouchableOpacity   >
            <View style={{positon:"absolute",bottom:0}}>
                  <ListItem 
                      containerStyle={{backgroundColor:"#ffff"}}
                      title="Hapus"
                      leftIcon={{ name:"trash",type:"evilicon", color:'grey' }}
                      onPress={()=>this._deletePostConfirm(id)}
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
                  <Image 
                    style={styles.imageProfile}
                    source={{uri:avatar}}
                  />
              </View>
              <View style={{flex:6,margin:10}} >
                <Text style={{fontWeight:'bold',color:'black'}} >{name}</Text>
                <View style={{flexDirection:"row"}} >
                <TimeAgo time={createdAt} interval={30000} />
                <Text style={{marginHorizontal:5}} >&bull;</Text>
                <IconAnt  name="earth" size={13} color="grey"  style={{textAlignVertical:"center"}}/>
                </View>
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