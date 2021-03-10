import React from 'react';
import {StyleSheet} from 'react-native'


export const Styles=StyleSheet.create({
    topic:{
        justifyContent:'center',
        margin:10,
        padding:5,
        borderRadius:8,
        alignItems:'center',
        

    },
    topic_text:{
        fontSize:28,
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    }
})

export const JobStyle=StyleSheet.create({
    header:{
        fontSize:26, 
        alignSelf:'center', 
        fontWeight:'bold',
         marginBottom:10
    },
    modalcontainer:{
        backgroundColor:'white',
        borderRadius:8,
        padding:5,
        margin:5,
    },
    modalTitle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    },
    saveButton:{
        backgroundColor:'powderblue',
        padding:5,
        margin:5,
        borderRadius:10
    },
    saveListContainer:{
        backgroundColor:'blue', 
        position:'absolute',
         bottom:10,
          right:10,
          borderRadius:10,
          padding:10

    },
    saveListText:{
        color:'white',
        fontSize:20,
        margin:5,

    }
})

