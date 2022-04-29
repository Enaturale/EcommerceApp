import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 200,   
        marginVertical: 5,    
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
        marginTop: 10,      
        alignItems: 'center' ,
    },
    star:{
        marginRight: 8,
    },
    price:{
        fontSize: 20,
        marginTop: 10,   
        fontWeight: 'bold',
    },
    oldPrice:{
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 5,
        textDecorationLine: 'line-through',        
    },

})

export default styles;