import React, { Component } from 'react';
import { View,Platform, TouchableOpacity, StatusBar, StyleSheet, TouchableHighlight,Text} from 'react-native';
import HraderLeft from "../../components/Commoms/HeaderLeft";
import HeaderRight from "../../components/Commoms/HeaderRight";
import HomeComponent from "../../components/Home/index"

export default class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#ffffff',
      height: Platform.OS === 'android' ? 30 : 55,
      marginTop: Platform.OS === 'ios' ? -10 : 0,
      paddingBottom: Platform.OS === 'ios' ? 0: 25,
      ...Platform.select({
        ios: { backgroundColor: '#ffffff'},
        android: { backgroundColor: '#ffffff'}
      }),
    },
    headerLeft: 
    (
      <HraderLeft/>
    ),
    headerRight:(
      <HeaderRight/>
    ),
  })


  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="#dfdfdf" barStyle="light-content" />
        <HomeComponent navigation={this.props.navigation} />
      </View>
    );
  }
}