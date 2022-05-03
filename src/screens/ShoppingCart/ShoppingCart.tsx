import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
//importing my product item
import CartProductItem from '../../components/CartProductItem/CartProductItem';
import products from '../../data/cart';

const ShoppingCart = () => {
    return (
        <View style={styles.page}>
            {/* Render product compnent? */}
            {/* you need flatlist so that it scrolls. first do it without a flat list */}
            {/* <ProductItem item={products[0]} />
            <ProductItem item={products[1]} />
            <ProductItem item={products[2]} />
            <ProductItem item={products[3]} /> */}

            <FlatList 
            data={products}
            renderItem={({item}) => <CartProductItem cartItem={item}/>}
            />                            
        </View>
    )

};

const styles = StyleSheet.create({
    page:{
        padding: 10,
    },    
 
});

export default ShoppingCart;