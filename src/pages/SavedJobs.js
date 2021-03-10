import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

import Basic from '../swipe/basic';

import { JobItem } from '../components'
const SavedJobs = props => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const myData = await AsyncStorage.getItem('@mystorage')

        setData(JSON.parse(myData))


    }


    useEffect(() => {
        getData()
    }, [])


    console.log('return öncesi ')
    return (
        <SafeAreaView>
            <View style={styles.switchContainer}>
                {console.log("basic üstü")}
                {data.length != 0 ?
                    <Basic data={data} />
                    :
                    null
                }


            </View>
        </SafeAreaView>
    )
}

export { SavedJobs }
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 50,
        flexWrap: 'wrap',
    }
})