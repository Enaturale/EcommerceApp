import React, {useState}  from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//importing the styles for this page
import Styles from './Styles'
import QuantitySelector from '../QuantitySelector/QuantitySelector';

interface CartProductItemProps{
    cartItem:{
        id:string;
        quantity: number;
        option?: string;
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
    
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
    const {quantity: quanitiyProp, item} = cartItem
  //  const item = props.item

  //state to keep the quanity selector
  const [quantity, setQuantity] = useState(quanitiyProp);
    return(
         //add a new view
        <View>
        <View style={Styles.container}>
                <Image style={Styles.image} source={{ uri: item.image}} />
                <View style={Styles.rightContainer}>
                    <Text style={Styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* To rn=ender ratings */}
                    <View style={Styles.ratingsContainer}>
                        {/* We want to loop the stars instead of using them one after the other using an array*/}
                        {[0, 0, 0, 0, 0].map((el, i) =>
                            <FontAwesome 
                               style={Styles.star} 
                               name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                               size={20} 
                               color={"#e47911"}  />) 
                        }
                        
                        <Text style={{fontSize: 20,}}>{item.ratings}</Text>
                    </View>

                    <Text style={Styles.price}>${item.price}
                    {/* We want to render the old price when we have an old price */}
                    {/* this below is how you render conditional statements */}
                    {item.oldPrice && (<Text style={Styles.oldPrice}> ${item.oldPrice}</Text>)}
                    </Text>
                   
                </View>

               
            </View>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>
    )
}



export default CartProductItem;