import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';


import styles from './Profile.style'


export default class About extends Component {

    

  render() {
  
    return (
            <View>
                <View style={styles.wrapperAbout} >
                    <IconE name="graduation-cap" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >Pernah Belajar di</Text>
                    <Text style={styles.aboutBold} >&nbsp;SMK Medikacom Bandung</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconFA name="home" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >Tinggal di</Text>
                    <Text style={styles.aboutBold} >&nbsp;Kota Bandung</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconIon name="md-heart" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} > Married</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconIon name="ios-time" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} > Bergabung pada januari 2013</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconE name="newsletter" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >Diikuti oleh</Text>
                    <Text style={styles.aboutBold} >&nbsp;999 orang</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconAnt name="instagram" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >markzukernberg</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconAnt name="twitter" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >markzukernberg</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconAnt name="linkedin-square" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >markzukernberg</Text>
                </View>
                <View style={styles.wrapperAbout} >
                    <IconFeather name="more-horizontal" size={21} color="#8a8d96" />
                    <Text style={styles.aboutNormal} >Lihat Info Tentang Anda</Text>
                </View>
            </View>
    )
  }
}