import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const MagazineListing = (props) => (
    <View>
        <TouchableOpacity style={styles.ImageContainer} onPress={this.navigateTo}>
            <View style={styles.ImageContainerBorder}>
                <Image
                    style={styles.MagazineImage}
                    source={props.magazineimage}>
                </Image>
            </View>
            <View style={styles.Description}>
                <Text style={styles.MagazineName}>{props.name}</Text>
                <Text style={styles.MagazineDescription}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
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
    MagazineImage: {
        width: 160,
        height: 100
    },
    Description:{
        
        marginTop:10,
        width:180
    },
    MagazineName:{
        fontWeight:'bold',
        fontSize:12,
        textAlign:'justify',
        color:'#040404'
    },
    MagazineDescription:{
        marginTop:5,
        fontSize:10,
        textAlign:'justify',
        color:'#6c6c6c'
    },
})

export default MagazineListing;