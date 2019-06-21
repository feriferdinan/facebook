import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import { Divider,ListItem,Icon } from 'react-native-elements';


import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


import styles from './Home.style'

export default class StatusFooter extends Component {

    constructor(){
        super();
        this.state ={
          iconName:'like2',
          iconType:'antdesign',
          iconPress:false,
          IconColor:'#aaa',
          response:[],
          total:0,
        }
    }
    _setTotal =() =>{
        return this.props.response.reduce((a,b) =>a+b.count,0 );
    }
    _pressLikeIcon =(icon)=>{
      if(this.state.iconPress){
        this.setState({
          iconName:'like2',
          iconType:'antdesign',
          iconPress:false,
          IconColor:'#aaa',
          total :this.state.total - 1
        })
      }else {
        switch(icon) {
          case 'like':
            this.setState({
              iconName:'like1',
              iconType:'antdesign',
              iconPress:true,
              IconColor:'blue',
              total :this.state.total + 1
            })
          
        }
      }
    }
    componentDidMount(){
        this.setState({
            total: this._setTotal(),
            response:this.props.response
        })
    }

  render() {
   
    return (
        
                 <View>
                 <TouchableOpacity>
                   <View style={{flexDirection:'row',backgroundColor:'white',height:40}} >
                    <ReactionPost response={this.state.response} />
                    <View style={{justifyContent:"center"}} >
                    <Text>{this.state.total}</Text>
                    </View>
                </View>
                    </TouchableOpacity>

              <Divider style={{backgroundColor:'grey'}} />
              <View style={{width:'100%', height:40,backgroundColor:'#ffffff'}} >
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:6,backgroundColor:'#ffffff'}} >
            
                  <View style={styles.wrapperLikeComment} >
                  <TouchableOpacity >
                  <Icon 
                      style={styles.likeComment}  
                      name={this.state.iconName}
                      type={this.state.iconType}
                      color={this.state.IconColor}
                      size={25} 
                      onPress={() => this._pressLikeIcon('like',this.state.iconPress)}
                   />
                    </TouchableOpacity>
                  </View>
                
                <View style={styles.wrapperLikeComment} >
                <TouchableOpacity>
                <IconFA5 style={styles.likeComment}  name="comment-alt" size={25} color="grey" />
                 
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
  }
}

class ReactionPost extends Component {
    render() {
        let data =this.props.response;
        data = data.sort((a,b) => b.count - a.count );
        let topThreeData = data.slice(0,3);
        return(
            <View style={{flexDirection:"row",marginHorizontal:10}} >
                {
                    topThreeData.map((item,index) =>{
                        return(
                        <View key={index}
                              style={{justifyContent:"center"}} >
                            <Icon 
                                name={item.name}
                                type={item.type}
                                type={item.type}
                                color={item.color}
                                size={20}
                            />
                         </View>
                        )
                         
                    })
                }
            </View>
        )
    }
}
