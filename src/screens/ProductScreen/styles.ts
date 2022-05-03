import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor:'white'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#007eb9',

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
    picker:{
        fontSize:16,
        color:'#007eb9',
        fontWeight: 'bold',
    },
    description:{
        marginVertical: 10,
        fontSize: 15,
        lineHeight: 22,
        
    }

 });

 export default styles;