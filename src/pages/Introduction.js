import React from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native';


import { TopicItems } from '../components'


const topics = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];



const Introduction = props => {

  const renderTopics = (item) => {
    return (

      <TopicItems
        item={item}
      />

    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 25, marginTop: 50 }}>Select a Job..</Text>
        </View>
        <View style={{ flex: 2 }}>
          <ScrollView horizontal contentContainerStyle={{ alignItems: 'flex-start' }}>
            {
              topics.map((t) => {
                return (
                  <TopicItems key={t.id} item={t}
                    onSelected={() => props.navigation.navigate("JobsPage", { selectedJob: t.name })} />)
              })

            }
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export { Introduction }