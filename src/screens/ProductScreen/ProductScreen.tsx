import React, {useState} from 'react';
import {View, Text} from 'react-native'
import styles from './styles';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';



const ProductScreen = () =>{
    const [selectedOption, setSelectedOption] = useState(product.options[0]);
    return(
        <View>
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
                 (<Picker.Item label={option} value={option} />)
                 )}
            </Picker>

            {/* Product description */}
            <Text style={styles.description}>
                {product.description}
            </Text>

            {/* Quantity selector */}
            <QuantitySelector />
            

            {/* Price */}
            <Text style={styles.price}>${product.price}
                    {/* We want to render the old price when we have an old price */}
                    {/* this below is how you render conditional statements */}
                    {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text>)}
            </Text>

            {/*  Buttons */}
        </View>
    )
}

export default ProductScreen