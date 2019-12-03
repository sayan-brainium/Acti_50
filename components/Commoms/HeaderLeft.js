import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity, Modal, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class HraderLeft extends Component {


  render() {

    return (
      <View style={styles.headerLeftAll}>
        <TouchableOpacity>
          <Icon name="ios-menu" style={{ paddingLeft: 20,position:'relative',marginTop:3}} size={35} color="#010080" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 40, height:40, position: 'relative', marginLeft: 20,alignSelf:'center' }}
            source={require('../../assets/images/logo.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerLeftAll: {
    flexDirection: "row",
    justifyContent:'center'
  },


})