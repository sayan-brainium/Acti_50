import React from 'react';
import { Text, View, Image,ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';


const ProductListing = (props) => (
  <View>
    <>
      <TouchableOpacity style={styles.ImageContainer} onPress={this.navigateTo}>
        <View style={styles.ImageContainerBorder}>
          <ImageBackground
            style={styles.ProductImage}
            source={props.productimage}>
          <View style={styles.DescriptionContainer}>
            <Text style={styles.ProductName}>{props.name}</Text>
            <Text style={styles.ProductDescription}>{props.desc}</Text>
          </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </>
  </View>
);

const styles = StyleSheet.create({
  ImageContainer: {
    marginRight: 10,
  },
  ImageContainerBorder: {
    borderWidth: 2,
    borderColor: "#e1b1dd",
    padding: 5,
    justifyContent: 'center'
  },
  ProductImage: {
    width: 140,
    height: 150
  },
  DescriptionContainer:{
    alignSelf:'flex-end',
    backfaceVisibility:'visible',
    backgroundColor:'rgba(45, 45, 45, 0.8)',
    height:60,
    width:'100%',
    position:'absolute',
    top:91,
    paddingTop:5,
    paddingLeft:5,
    paddingRight:5
  },
  ProductName:{
    textAlign:'justify',
    color:'#fefefe',
    fontSize:12,
    fontWeight:'bold'
  },
  ProductDescription:{
    textAlign:'justify',
    color:'#fefefe',
    fontSize:10,
  },
})

export default ProductListing;