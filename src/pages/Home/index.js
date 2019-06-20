import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';

import styles from './Home.style'
import Header from './Header'
import Tab from './Tab'
import Story from './Story'
import CreateStatus from './CreateStatus'
import Status from './Status'



export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>

        {/* Search */}
           <Header />
          {/* Tab */}
              <Tab componentId={this.props.componentId}  />
            <ScrollView>

               {/* Story */}
                <Story />
           
            <View style={{backgroundColor:'#dddde3',width:'100%'}} >
            {/* update status */}
            <CreateStatus />

            {/* Post */}
              <Status />     
            </View>
            </ScrollView>
        </View>
     
    );
  }
}

