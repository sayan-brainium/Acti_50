import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HraderRight extends Component {

  render() {
    return (      
       
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
          <Icon name="ios-search" style={{ paddingLeft: 20 }} size={30} color="#010080" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="ios-notifications" style={{ paddingLeft: 20 }} size={30} color="#010080" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="ios-cart" style={{ paddingLeft: 20,paddingRight:20 }} size={30} color="#010080" />
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
 
})