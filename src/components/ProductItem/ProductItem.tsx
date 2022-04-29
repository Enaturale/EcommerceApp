import React  from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//importing the styles for this page
import styles from "./Styles";

interface ProductItemProps{
    item:{
        id: string;
        title: string;
        image: string;
        avgRating:number;
        ratings: number;
        price: number;
        oldPrice?: number; //the question mark makes the old price optional
    }
}

const ProductItem = ({item}: ProductItemProps) => {
  //  const item = props.item
    return(
        <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.image}} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* To rn=ender ratings */}
                    <View style={styles.ratingsContainer}>
                        {/* We want to loop the stars instead of using them one after the other using an array*/}
                        {[0, 0, 0, 0, 0].map((el, i) =>
                            <FontAwesome 
                               style={styles.star} 
                               name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                               size={20} 
                               color={"#e47911"}  />) 
                        }
                        
                        <Text style={{fontSize: 20,}}>{item.ratings}</Text>
                    </View>

                    <Text style={styles.price}>${item.price}
                    {/* We want to render the old price when we have an old price */}
                    {/* this below is how you render conditional statements */}
                    {item.oldPrice && (<Text style={styles.oldPrice}> ${item.oldPrice}</Text>)}
                    </Text>
                   
                </View>
            </View>
    )
}



export default ProductItem;