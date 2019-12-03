import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';


export default function (props) {

  const BtnGradient = () => {
    return (
      <>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#b8d816', '#08e462']} style={styles.lineUp} />
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#b8d816', '#08e462']} style={[ {padding: 8},{width:props.width}]}>
          <Text style={[styles.buttonText,{color:props.color}]}>
            {props.text}
          </Text>
        </LinearGradient>
      </>
    )
  }
  return (
    <>
      <View style={styles.MainContainer}>
        <Ripple onPress={props.onPress} disabled={props.disabled}>
          <BtnGradient />
        </Ripple>
      </View>
    </>
  )
}
const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -4
  },
  TrapezoidStyle: {
    padding: 8,
  },
  lineUp: {
    padding: 5,
    rotation: -2,
    marginBottom: -5
  }

})