import { 
    View, 
    Text, 
    FlatList, 
    Image, 
    StyleSheet,
    useWindowDimensions,
 } from 'react-native'
import React, { useCallback, useState } from 'react'


const ImageCarousel= ({image}: {image: [string]}) => {
    //to fit the image to the size of the screen
    const windowWidth = useWindowDimensions().width;

    //we need a state for the dots
    const [activeIndex, setActiveIndex] = useState(1);

    //
    const onFlatlistUpdate= useCallback(({viewableItems}) => {
        if(viewableItems.length > 0){
          setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);

  return ( 
    <View style={styles.container}>
        {/* // the Image carousel will receive an array of images to render */}
        {/* so we need a  flatlist for that */}
      <FlatList 
      data={image}
      renderItem={({item}) => (
          <Image  
          style={[styles.image, {width: windowWidth - 30}]} 
          source={{uri: item}}/>        

      )}
      horizontal  //to place the images in an horizontal line
      showsHorizontalScrollIndicator={false} //to remove the scroll indicator
      snapToInterval ={windowWidth - 30} //to snap one image to the center when the indicator is between two images
      snapToAlignment ={'center'}
      decelerationRate={'fast'}
      viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }} //this is how visible items can be managed

        onViewableItemsChanged ={onFlatlistUpdate}
      />

      {/* adding dot indicator */}
      {/* Before adding the state */}
      {/* <View style={styles.dotContainer}>
       {image.map((image, index) =>(
          <View style={styles.dot} /> 
        ))}
      </View> */}

      <View style={styles.dotContainer}>
       {image.map((image, index) =>(
          <View 
             style={[
                 styles.dot, 
                 {backgroundColor: index === activeIndex ? '#007eb9' : '#e0e0e0' }
                ]} />
        ))}
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
    container:{

    },
    image:{       
        height: 250,
        resizeMode: 'contain'

    },
    dotContainer:{
        flexDirection: 'row',    
        justifyContent: 'center', 
        marginTop: 10,

    },
    dot:{
        width: 15,
        height: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#e0e0e0',
        marginHorizontal: 3,
    },

})

export default ImageCarousel;