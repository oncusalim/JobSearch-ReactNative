import React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';

import { Styles } from '../styles'

const TopicItems = props => {
    return (

        <TouchableOpacity style={[Styles.topic,
        { backgroundColor: `#${props.item.color}` }]}
            onPress={props.onSelected}
        >

            <Text style={Styles.topic_text}>{props.item.name}</Text>

        </TouchableOpacity>

    )
}

export { TopicItems }