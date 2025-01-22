import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Post = ({ imageUri, description }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(likes + (liked ? -1 : 1)); 
    setLiked(!liked); 
  };

  const handleShare = () => {
    console.log('Post Shared');
  };

  const handleBookmark = () => {
    console.log('Post Bookmarked');
  };

  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: imageUri }} style={styles.postImage} />
      <Text style={styles.postDescription}>{description}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Icon
            name={liked ? 'heart' : 'heart-o'}
            size={25}
            color={liked ? 'red' : 'black'}
          />
          <Text style={styles.buttonText}> {likes} Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <Icon name="share" size={25} color="black" />
          <Text style={styles.buttonText}> Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleBookmark}>
          <Icon name="bookmark-o" size={25} color="black" />
          <Text style={styles.buttonText}> Bookmark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginVertical:5,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal:8
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
});

export default Post;
