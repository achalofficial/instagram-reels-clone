import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Post from '../components/Post';  

// Import the local image
const HandWithPhone = require('../../assets/images/HandWithPhone.jpg');

// Dummy stories
const dummyStories = [
  { id: '1', name: 'User1', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'User2', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'User3', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'User4', image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'User5', image: 'https://via.placeholder.com/100' },
];

// Dummy posts
const dummyPosts = [
  { id: '1', image: HandWithPhone, description: 'This is a post description 1' },
  { id: '2', image: 'https://via.placeholder.com/350', description: 'This is a post description 2' },
  { id: '3', image: 'https://via.placeholder.com/350', description: 'This is a post description 3' },
];

const HomeScreen = () => {
  const storiesWithAddButton = [
    { id: '0', name: 'Your Story', isAddButton: true },
    ...dummyStories,
  ];

  const handleAddStoryClick = () => {
    console.log('Add Story Clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storySection}>
        <Text style={styles.sectionTitle}>Stories</Text>
        <FlatList
          data={storiesWithAddButton}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.isAddButton ? (
              <TouchableOpacity style={styles.storyContainer} onPress={handleAddStoryClick}>
                <View style={styles.addStoryButton}>
                  <Text style={styles.addStoryPlus}>+</Text>
                </View>
                <Text style={styles.storyName}>{item.name}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.storyContainer}>
                <Image source={{ uri: item.image }} style={styles.storyImage} />
                <Text style={styles.storyName}>{item.name}</Text>
              </View>
            )
          }
        />
      </View>

      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            imageUri={item.image}
            description={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storySection: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  addStoryButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  addStoryPlus: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#d3d3d3',
  },
  storyName: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default HomeScreen;
