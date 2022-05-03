import React, {useState} from 'react';
import {View, Text} from 'react-native'
import styles from './styles';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/Buttons/Button';



const ProductScreen = () =>{
    const [selectedOption, setSelectedOption] = useState(product.options[0]);
    const [quantity, setQuantity] = useState(1);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>

            {/* image carousel */}

            {/* Option Selector */}
            <Picker            
              selectedValue={selectedOption}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedOption(itemValue)
              }>
                {/* <Picker.Item label='Black' value="Java"/>
                <Picker.Item label='Space Array' value="JavaScript"/> */}
                {product.options.map((option) =>
                 (<Picker.Item label={option} value={option} style={styles.picker} />)
                 )}
            </Picker>

            {/* Product description */}
            <Text style={styles.description}>
                {product.description}
            </Text>

            {/* Quantity selector */}
            {/* Create a seperate component for this because it is reusable */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            

            {/* Price */}
            <Text style={styles.price}>${product.price}
                    {/* We want to render the old price when we have an old price */}
                    {/* this below is how you render conditional statements */}
                    {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text>)}
            </Text>

            {/*  Buttons */}
            {/* Create a seperate component for this because it is reusable */}
            <Button text={'Add to Cart'} onPress={async () => console.log('Added to cart')} />
            <Button text={'Buy Now'} onPress={async () => console.log('Bought ')} />



        </View>
    )
}

export default ProductScreen