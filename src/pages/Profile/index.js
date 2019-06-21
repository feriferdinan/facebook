import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import styles from './Profile.style'

import Header from '../Home/Header'
import Tab from '../Home/Tab'
import Wallpaper from './Wallpaper'
import PhotoProfile from './PhotoProfile';
import Name from './Name';
import Bio from './Bio';
import About from './About'
import CircleButton from './CircleButton';


export default class index extends Component {

    

  render() {
  
    return (
        
        <View>
            <Header />
                <Tab  componentId={this.props.componentId} />
                 <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.container} >
                        <View style={{backgroundColor:"white",position:'relative'}} >
                            <Wallpaper />
                            <PhotoProfile />
                            <Name />
                            <Bio />
                            <CircleButton />
                            <About />

                        </View>
                    </View>


                </ScrollView>
        </View>
    )
  }
}