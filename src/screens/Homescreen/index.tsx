import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
//importing my product item
import ProductItem from '../../components/ProductItem/ProductItem';
import products from '../../data/products';



const HomeScreen = () => {
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
            renderItem={({item}) => <ProductItem item={item}/>}
            />




                            
        </View>
    )

};

const styles = StyleSheet.create({
    page:{
        padding: 10,
    },    
 
});

export default HomeScreen;