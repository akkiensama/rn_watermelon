import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';

import { Button } from './src/components/common'


/** Begin setup database */
import { Database, Q } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { mySchema } from './model/schema'
import Post from './model/Post' //  You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
    dbName: 'myAwesomeApp', //  Give your database a name!
    schema: mySchema,
})

// Then, make a Watermelon database from it!
const database = new Database({
    adapter,
    modelClasses: [
        Post, //  You'll add Models to Watermelon here
    ],
})

const postsCollection = database.collections.get('posts')
/** End setup database */


type Props = {};
export default class App extends Component<Props> {
  state = {
    newPostTitle: '',
    output: ''
  }
  componentWillMount(){
    //const comment = await commentsCollection.find(id)
  }
  async addPost(_title, _body){
    const newPost = await postsCollection.create(post => {
      post.title = _title
      post.body = _body
    })
    Alert.alert("ok")
  }
  async getPost(){
    const fetchedPosts = await postsCollection.query(Q.where('title', this.state.newPostTitle)).fetch()
    this.setState({output: fetchedPosts[fetchedPosts.length - 1].title})
    //Alert.alert(fetchedPosts[fetchedPosts.length - 1].title)
    //console.log(fetchedPosts[33].title)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <View style={styles.inputSectionContainer}>
          <Text>Give your post title</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.setState({newPostTitle: text})}
            value={this.state.text}
          />
          <Button 
            style={styles.addButton}
            onPress = {this.addPost.bind(this, this.state.newPostTitle, "Kien finished watermelonDB")}
          >Add Post</Button>
        </View>
        
        {/* <EnhancedComment comment={comment} /> */}
        <View style={styles.outputSectionContainer}>
          <Button 
            style={styles.getButton}
            onPress = {this.getPost.bind(this)}
          > Get Post </Button>
          <Text style={styles.outputText}>{this.state.output}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  inputSectionContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  inputText: {
    flex: 3,
    borderColor: 'gray', 
    borderWidth: 1
  },
  addButton: {
    flex: 1
  },

  outputSectionContainer: {
    flex: 1
  },
  getButton: {
    flex: 1
  },
  outputText: {
    flex: 3
  }
});
