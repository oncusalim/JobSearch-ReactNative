import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { JobItem } from '../components';
import { JobStyle } from '../styles';


const Jobs = props => {

    const [data, setData] = useState([]);
    const [visibleFlag, setVisibleFlag] = useState(false);
    const [modalItem, setModalItem] = useState([]);

    function fetchData() {
        axios.get(`https://jobs.github.com/positions.json?description=${selectedJob}`)
            .then(response => {
                setData(response.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderList = (value) => {
        return (
            <JobItem item={value} selectedModal={() => modalFunc(value)} />
        )
    }

    function modalFunc(item) {
        setVisibleFlag(true);
        setModalItem(item);
    }
    const savedJob = async (item) => {
        let getData = await AsyncStorage.getItem('@mystorage')
        getData = (getData == null) ? [] : JSON.parse(getData);
        const updateData = [...getData, item];

        await AsyncStorage.setItem('@mystorage', JSON.stringify(updateData))
        setVisibleFlag(false);
    }


    const selectedJob = props.route.params.selectedJob;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>

                <Text style={JobStyle.header}>{props.route.params.selectedJob} İle İlgili İşler</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderList(item)}
                />
                <Modal isVisible={visibleFlag}
                    onBackdropPress={() => setVisibleFlag(false)}
                >
                    <View style={JobStyle.modalcontainer}>
                        <View style={{ borderBottomWidth: 1 }}>
                            <Text style={JobStyle.modalTitle}>{modalItem.title}</Text>
                            <Text style={JobStyle.modalTitle}>{modalItem.company} / {modalItem.location}</Text>
                        </View>
                        <Text numberOfLines={7}>{modalItem.description}</Text>
                        <TouchableOpacity style={JobStyle.saveButton}
                            onPress={() => savedJob(modalItem)}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>SAVE JOB</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
                <TouchableOpacity style={JobStyle.saveListContainer}
                    onPress={() => props.navigation.navigate("SavedJobsPage")}
                >
                    <Text style={JobStyle.saveListText}>SAVE LIST</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export { Jobs }