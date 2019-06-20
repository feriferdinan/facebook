import React, { Component } from 'react';
import { Modal, Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Navigation } from 'react-native-navigation';

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

      modalVisible:false
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

  
  setModalVisible(visible){
    this.setState({modalVisible:visible})
  }
  goToHome = (screenName) => {
    Navigation.push(this.props.componentId,{
      component:{
        name:screenName
      }
    });
  }

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
                    />
                    <TextInput 
                    style={styles.textInput} 
                    placeholder={this.state.password}
                    textContentType='password'
                    secureTextEntry={true}
                    underlineColorAndroid='#2D598C'
                    />
                    <Button title={this.state.buttonLogin}
                     color='#213970'
                     onPress={() => this.goToHome('Home')}
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



