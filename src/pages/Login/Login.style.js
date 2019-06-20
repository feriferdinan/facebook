
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
      flex: 1,  
      color:'#FFFFFF'
    },
    banner:{
      width : '100%',
      height:210
   
    },
    wrapperLogo:{
      resizeMode:'cover'
    },
   
    form:{
      flex:3,
      flexDirection: 'column',
      margin:10,
      justifyContent:'center',
      marginTop: 40,
      marginBottom:0,
      marginHorizontal:30
  
    },
    textLanguage:{
      margin:5,
      marginHorizontal: 2,
      paddingHorizontal: 1,
      textAlign:'center',
      color:'#2D598C',
      
    },
    textInput:{
      height:35,
      borderRadius: 3,
      marginBottom:5,
      fontWeight: 'bold',
    },
    wrapperInput:{
      alignContent: 'center',
      
    },
    wrapperButtonForgot:{
      flex:1,
      margin:15,
      alignItems: 'center',
    },
    wrapperHr:{
      flex:1,
      marginTop:10,
      height:30,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:5
  
    },
    wrapperButtonSignUp:{
      flex:1,
      marginTop:20,
      marginBottom:20,
      alignItems: 'flex-end', 
      flexDirection:"row",
      justifyContent:'center'
     
    },
    hr:{
      width:'45%',
      borderTopWidth: 1,
      borderTopColor:'#bebebe',
      marginTop:23,
      marginLeft: 5,
      marginRight: 5,
    },
    buttonSignUp:{
      backgroundColor:'#00A400',
    },
    buttonForgot:{
      color:'#2D598C',
      fontWeight:'bold',
    },
  
  })
  