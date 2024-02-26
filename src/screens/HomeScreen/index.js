import { StyleSheet, FlatList, View } from 'react-native';
import BookItem from '../../components/BookItem';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import {listBooks} from '../../../src/graphql/queries';


const client = generateClient();

export default function HomeScreen() {
  const [books, setBooks] = useState([]);

  async function fetchBooks () {
    try {
      const APIData = await client.graphql({
        query: listBooks
      });
      console.log("fetchBooks API:",APIData);
      const booksData = APIData.data.listBooks.items;
      setBooks(booksData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect (() => {
    fetchBooks ();
  }, []);

  return (
    <View style= {styles.page}>
      <FlatList 
      data={books} 
      renderItem={({item}) => <BookItem book={item}/>}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        padding: 10,
    }
});
