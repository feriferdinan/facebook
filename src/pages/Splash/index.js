import React, { Component } from 'react';
import { AsyncStorage,View,Image,StatusBar,StyleSheet} from 'react-native';

import { Navigation } from 'react-native-navigation';



export default class index extends Component {

    
    constructor(){
        super()
        const value =  AsyncStorage.getItem('token')
      }

      

      async componentWillMount(){
          (this.value!==null) ? 
                  setTimeout(()=>{
                    Navigation.push(this.props.componentId,{
                          component:{
                            name:"Home"
                          }
                        })
                  },4000)  
                :
                setTimeout(()=>{
                 Navigation.push(this.props.componentId,{
                       component:{
                         name:"Login"
                       }
                     })
               },4000)   
         
    }
    

  render() {
  
    return (
        <View style={{flex:1,backgroundColor:"#fff",flexDirection:"column",justifyContent:"center"}} >
        <StatusBar barStyle='dark-content' backgroundColor='#fff'  />
            <View style={{justifyContent:"center",alignItems:"center",borderRadius:100}} >
                <Image 
                    style={{resizeMode:"cover", width:55,height:55}} 
                    source={require('../../assets/img/logo/facebook-logo-rounded.png')} />
            </View>
        </View>
    )
  }
}