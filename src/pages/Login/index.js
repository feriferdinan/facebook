import React, { Component } from 'react';
import {Alert,Modal, Text, TextInput, View ,Button,StyleSheet,
  Image,ScrollView,StatusBar,TouchableOpacity,TouchableHighlight,AsyncStorage} from 'react-native';
import { Navigation } from 'react-native-navigation';

const axios = require('axios');

import styles from './Login.style'


export default class Login extends Component {

  constructor(){
    super()
    this.state= {
      email:'Telepon atau Email',
      password:'Kata Sandi',
      buttonLogin:'MASUK',
      buttonForgotPassword:'LUPA KATA SANDI?',
      dashOr:'ATAU',
      buttonRegister:'BUAT AKUN FACEBOOK BARU',
      buttonMoreLanguage:'Lainnya...',

      inputEmail:"",
      inputPass:"",

      modalVisible:false,
     
    }
    
  }

  
  toEnglishLanguage = () => {
    this.setState({
      email:'Phone or Email',
      password:'Password',
      buttonLogin:'Log In',
      buttonForgotPassword:'Forgot Password?',
      dashOr:'OR',
      buttonRegister:'Create New Facebook Account',
      buttonMoreLanguage:'More...'
    })
  }
  toIndonesianLanguage = () => {
    this.setState({
      email:'Telepon atau Email',
      password:'Kata Sandi',
      buttonLogin:'Masuk',
      buttonForgotPassword:'Lupa Kata Sandi?',
      dashOr:'OR',
      buttonRegister:'Buat Akun Facebook Baru',
      buttonMoreLanguage:'Lainnya...'
    })
  }



  handleLogin =  () => {
      axios.post("http://192.168.0.24:3000/auth/signin",{
        "email" : this.state.inputEmail,
        "password" : this.state.inputPass
      })
      .then(res =>{
        const  data = res.data.data
        axios.post("http://192.168.0.24:3000/auth/create/authorization",{
          "user_id" : data.id,
          "name" : data.name,
          "email" :data.email
        })
        .then (res => {
          console.log(res.data.data.token)
          console.log(data)
          if (data == null){
            alert("Tidak Dapat Menemukan Akun")
          }else{
            AsyncStorage.setItem('token', res.data.data.token);
             Navigation.push(this.props.componentId,{
               component:{
                 name:"Home"
               }
             })
          }
        })
        .catch(err => {
          alert("Tidak Dapat Menemukan Akun ")
          console.log("auth create",err)
        })
      })
      .catch(err =>{
        Alert.alert(
          'Tidak Dapat Menemukan Akun',
          `Kelihatanya ${this.state.inputEmail} tidak cocok dengan akun yang ada. Jika Anda belum memiliki akun Facebook, Anda dapat membuatnya sekarang. `,
          [
            {
              text: 'BUAT AKUN',
              onPress: () => console.log(' Pressed'),
              style: "default",
            },
            {text: 'COBA LAGI',  onPress:this.handleLogin},
          ],
         
        );
        console.log('erordi auth sign in:',err)
      })
  }

  async componentDidMount(){
    const value = await AsyncStorage.getItem('token')
    if(value !== null ){
      await Navigation.push(this.props.componentId,{
         component:{
           name:"Home"
         }
       });
     }

   }

  
  setModalVisible(visible){
    this.setState({modalVisible:visible})
  }
  // goToHome = (screenName) => {
  //   Navigation.push(this.props.componentId,{
  //     component:{
  //       name:screenName
  //     }
  //   });
  // }

  
  render() {
    return (
     <ScrollView>
       <StatusBar barStyle='dark-content' backgroundColor='#30477c' translucent = {true} />
      <View style={styles.container}>
      <Modal
          style={{height:'90%',width:'90%'}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      
        <Image style={styles.banner}
          source={require('../../assets/img/logo/login-banner.jpg')}
           />
          <View style={{flexDirection:'row',justifyContent:'center'}} >
            <TouchableOpacity>
              <Text style={styles.textLanguage} onPress={this.toEnglishLanguage} >English </Text>
              </TouchableOpacity>
              <Text style={styles.textLanguage} >&bull;</Text>
              <TouchableOpacity>
              <Text style={styles.textLanguage} onPress={this.toIndonesianLanguage} >Indonesia</Text>
              </TouchableOpacity>
              <Text style={styles.textLanguage} >&bull;</Text>
              <TouchableHighlight>
              <Text style={styles.textLanguage} onPress={() => {
                this.setModalVisible(true);
              }} > {this.state.buttonMoreLanguage}</Text>
              </TouchableHighlight>
              <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
         >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>  
          </View>
          <View style={styles.form}>
            <View  style={styles.wrapperInput} >
                    <TextInput 
                    style={styles.textInput} 
                    placeholder={this.state.email}
                    underlineColorAndroid='#2D598C'
                    onChangeText={(email) => this.setState({
                      inputEmail:email
                    })}
                    />
                    <TextInput 
                    style={styles.textInput} 
                    placeholder={this.state.password}
                    textContentType='password'
                    secureTextEntry={true}
                    underlineColorAndroid='#2D598C'
                    onChangeText={(pass) => this.setState({
                      inputPass:pass
                    })}
                    />
                    <Button title={this.state.buttonLogin}
                     color='#213970'
                     onPress={this.handleLogin}
                      />
            </View>
      <View style={styles.wrapperButtonForgot} >
          <Text style={styles.buttonForgot} >{this.state.buttonForgotPassword}</Text>
      </View>
        <View style={styles.wrapperHr}>
          <Text style={styles.hr} ></Text>
          <Text style={{justifyContent:'center', alignContent:'center'}} >{this.state.dashOr}</Text>
          <Text style={styles.hr} ></Text>
        </View>

        <View style={styles.wrapperButtonSignUp} >
            <Button color='#00A400' title={this.state.buttonRegister} />
        </View>

        </View>
 </View>

      </ScrollView>
     
    );
  }
}



