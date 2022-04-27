import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* Render product compnent? */}
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg' }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>Clean Architecture Provider for software engineers and beginners</Text>
                    {/* To rn=ender ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star}  name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-empty" size={20} color={"#e47911"} />
                        <Text style={{fontSize: 20,}}>19,000</Text>
                    </View>

                    <Text style={styles.price}>from $120</Text>
                </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    page:{
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 200,       
    },   
    image:{
        flex: 2,
        width: 150,
        resizeMode: 'contain',
    },
    rightContainer:{
        padding: 10,        
        flex: 3,
    },
    title:{  
        fontSize: 20,
        marginTop: 10,    
        
    },
    ratingsContainer:{
        flexDirection:'row',
        marginTop: 20,       

    },
    star:{
        marginRight: 8,

    },
    price:{
        fontSize: 20,
        marginTop: 10,   
        fontWeight: 'bold',

    },

});

export default HomeScreen;