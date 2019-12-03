import React from 'react'
import { Text, View, ImageBackground, FlatList, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ProductListing from "./ProductListing"
import MagazineListing from "./MagazineListing"
import { Video } from 'expo-av';


const Deviceheight = Dimensions.get('window').height;

export default function (props) {

    const { navigation } = props

    const Product = [
        {
            id: '1',
            ProductImage: require('../../assets/images/Latest-Products_a_pic.png'),
            Name: "Your Path to Happiness",
            Desc: "Are you oner 40? Do you want to vhange your life, start..."
        },
        {
            id: '2',
            ProductImage: require('../../assets/images/Latest-Products_b_pic.png'),
            Name: "Harmonia i motywacja",
            Desc: "Wszystkich tych, ktorzy chca miec dobra energie i szybka..."
        },
        {
            id: '3',
            ProductImage: require('../../assets/images/Latest-Products_a_pic.png'),
            Name: "Your Path to Happiness",
            Desc: "Are you oner 40? Do you want to vhange your life, start..."
        },
        {
            id: '4',
            ProductImage: require('../../assets/images/Latest-Products_b_pic.png'),
            Name: "Harmonia i motywacja",
            Desc: "Wszystkich tych, ktorzy chca miec dobra energie i szybka..."
        },
        {
            id: '5',
            ProductImage: require('../../assets/images/Latest-Products_a_pic.png'),
            Name: "Your Path to Happiness",
            Desc: "Are you oner 40? Do you want to vhange your life, start..."
        },
    ];

    const Magazine = [
        {
            id: '1',
            MagazineImage: require('../../assets/images/Latest-Magazines_pic.png'),
            Name: "Can drinking tea prevent dementia?",
            Desc: "Researchers followed 957 older asults, average age 65."
        },
        {
            id: '2',
            MagazineImage: require('../../assets/images/Latest-Magazines_b_pic.png'),
            Name: "Varicose veins",
            Desc: "What are varicose veins and hoe to we recogninze them?"
        },
        {
            id: '3',
            MagazineImage: require('../../assets/images/Latest-Magazines_pic.png'),
            Name: "Can drinking tea prevent dementia?",
            Desc: "Researchers followed 957 older asults, average age 65."
        },
        {
            id: '4',
            MagazineImage: require('../../assets/images/Latest-Magazines_b_pic.png'),
            Name: "Varicose veins",
            Desc: "What are varicose veins and hoe to we recogninze them?"
        },
        {
            id: '5',
            MagazineImage: require('../../assets/images/Latest-Magazines_pic.png'),
            Name: "Can drinking tea prevent dementia?",
            Desc: "Researchers followed 957 older asults, average age 65."
        },
    ];

    const video = [
        {
            id: 1,
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        },
        {
            id: 2,
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        },
        {
            id: 3,
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        },
        {
            id: 4,
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        },
        {
            id: 5,
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        },
    ];

    handleVideoRef = component => {
        const payObject = component
    }

    return (
        <ScrollView style={styles.Container}>

            {/* Banner Section */}
            <Image
                style={{ width: "100%", height: 170, position: 'relative', alignSelf: 'center' }}
                source={require('../../assets/images/Banner_pic.png')}>
            </Image>

            {/* 1st Heading Section */}
            <View style={styles.HeadingContainer}>
                <Text style={styles.HeadingName}>Latest Prodects</Text>

                <TouchableOpacity style={styles.BrowseAll}>
                    <Text style={styles.ViewAll}>View All</Text>
                    <Icon name="arrowright" style={{ position: 'relative' }} size={15} color="#bb86d8" />
                </TouchableOpacity>
            </View>

            {/* Product Listing */}
            <View style={styles.FlatlistContainer}>
                <FlatList
                    data={Product}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ProductListing
                                productimage={item.ProductImage}
                                name={item.Name}
                                desc={item.Desc}
                            />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            {/* 2nd Heading Section */}
            <View style={styles.HeadingContainer}>
                <Text style={styles.HeadingName}>Latest Magazines</Text>

                <TouchableOpacity style={styles.BrowseAll}>
                    <Text style={styles.ViewAll}>View All</Text>
                    <Icon name="arrowright" style={{ position: 'relative' }} size={15} color="#bb86d8" />
                </TouchableOpacity>
            </View>

            {/* Magazine Listing */}
            <View style={styles.FlatlistContainer}>
                <FlatList
                    data={Magazine}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <MagazineListing
                                magazineimage={item.MagazineImage}
                                name={item.Name}
                                desc={item.Desc}
                            />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            {/* Subscribe Section */}
            <View style={styles.SubscriptionContainer}>
                <ImageBackground
                    style={styles.SubscriptionImage}
                    source={require("../../assets/images/SUBSCRIBE-NOW_bg.png")}>
                    <Text style={styles.SubscriptionText1}>Subscribe to a plan to enjoy benefits</Text>
                    <Text style={styles.SubscriptionText2}>SUBSCRIBE NOW</Text>
                    <TouchableOpacity style={styles.SubscriptionText3Container}>
                        <Text style={styles.SubscriptionText3}>Click Here</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* 3rd heading Section */}
            <View style={styles.HeadingContainer}>
                <Text style={styles.HeadingName}>Latest Videos</Text>

                <TouchableOpacity style={styles.BrowseAll}>
                    <Text style={styles.ViewAll}>View All</Text>
                    <Icon name="arrowright" style={{ position: 'relative' }} size={15} color="#bb86d8" />
                </TouchableOpacity>
            </View>

            {/* Video Listing */}
            <View style={styles.FlatlistContainer}>
                <FlatList
                    data={video}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.VideoContainer}>
                        <Video
                            source={{ uri: item.source }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={true}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            ref={handleVideoRef}
                            style={{ width: 150, height: 100 }}
                        />
                         </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>









        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginBottom: 20,
    },
    HeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20
    },
    HeadingName: {
        color: "#474747",
        fontSize: 16
    },
    BrowseAll: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ViewAll: {
        color: "#bb86d8",
        fontWeight: 'bold',
        fontSize: 12
    },
    FlatlistContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10
    },
    SubscriptionContainer: {
        marginHorizontal: 20,

    },
    SubscriptionImage: {
        height: 170,
        width: "100%",
        justifyContent: 'center'
    },
    SubscriptionText1: {
        color: '#e3defd',
        textAlign: "justify",
        fontSize: 12,
        alignSelf: 'center',
    },
    SubscriptionText2: {
        marginTop: 5,
        color: '#ffffff',
        textAlign: "justify",
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    SubscriptionText3: {
        marginTop: 5,
        textAlign: "justify",
        fontSize: 10,
        alignSelf: 'center',
        color: '#523eeb'
    },
    SubscriptionText3Container: {
        marginTop: 5,
        height: 40,
        width: 220,
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        shadowColor: '#2a3cbf',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    VideoContainer:{
       borderColor:'#bb86d8',
       borderWidth:2,
     padding:5,
     marginHorizontal:10
    },

})

