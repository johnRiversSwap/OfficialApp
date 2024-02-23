import { StyleSheet, FlatList, View } from 'react-native';
import BookItem from '../../components/BookItem';
import books from '../../../assets/data/books.json';

export default function HomeScreen() {
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
