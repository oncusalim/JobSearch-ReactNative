import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Styles } from '../styles'

const JobItem = props => {
    return (

        <TouchableOpacity
            style={{ borderWidth: 1, margin: 5, padding: 5, borderRadius: 8, borderColor: 'gray' }}
            onPress={props.selectedModal}
        >

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {props.item.title}</Text>
            <Text style={{ fontSize: 17 }}>{props.item.location} / {props.item.company}</Text>

        </TouchableOpacity>

    )
}

export { JobItem }