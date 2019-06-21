import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#ffff'
    },
    wrapperIconTab:{
      flex:1,
      marginHorizontal:5,
      marginVertical: 10,
      alignItems:'center'
    },
    iconTab:{
      width:30,
      height:30,
      opacity: 0.7,
    },
    imageProfile:{
      width:40,
      height:40,
      marginLeft:5,
      borderRadius:100
    },
    namePeopleStory:{
      color:'white',
      position:'absolute',
      fontWeight:'300',
      bottom:5,
      textAlign:'center',
      alignItems:'center',
      alignItems:"flex-end"
    },
    imageStory:{
      width:"100%",
      height:"100%",
      borderRadius:10,
      resizeMode:'cover',
      position:'relative'
    },
    wrapperImageStory:{
      backgroundColor:'#f5f6f8',
      width:120,
      height:200,
      borderRadius:10,
      margin:5
    },
    wrapperPublicStory:{
      margin:7,
      resizeMode:'cover',
      position:'absolute',
      borderWidth:1,
      width:40,
      height:40,
      borderRadius:100,
      borderColor:'blue',
      justifyContent:'center',
      alignContent:'center',
      alignItems:"center"
    },
    wrapperLikeComment:{
      flex:1,
      alignItems:'center',
      flexDirection:'column',
      marginVertical:7
      
    },
    likeComment:{
      width:30,
      height:24,
      marginHorizontal:5,
    }
  
  })
  
  
  