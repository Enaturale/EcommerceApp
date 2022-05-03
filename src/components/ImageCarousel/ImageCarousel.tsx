import { 
    View, 
    Text, 
    FlatList, 
    Image, 
    StyleSheet,
    useWindowDimensions,
 } from 'react-native'
import React from 'react'


const ImageCarousel= ({image}: {image: [string]}) => {
    const windowWidth = useWindowDimensions().width;

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
      />

      {/* adding dot indicator */}
      {image.map((image, index) =>(
          <View style={styles.dot} />
      ) )}
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
    dot:{

    },

})

export default ImageCarousel;