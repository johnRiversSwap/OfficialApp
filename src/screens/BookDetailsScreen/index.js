import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import books from '../../../assets/data/books.json';
import {Ionicons} from "@expo/vector-icons";
import UserListItem from '../../components/UserListItem';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const book=books[1];

const BookDetailsPage = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;

    return (
        <View style ={styles.page}> 
            <FlatList 
                ListHeaderComponent={()=><Header book={book}/>}
                data={book.users}
                renderItem={({item}) => <UserListItem user={item}/>}
                /* keyExtractor={(item) => item.name} */
            />
            <Ionicons 
                onPress={()=> navigation.goBack()}
                name="arrow-back-circle" 
                size={45} 
                color="black" 
                style={styles.iconContainer}
            />
        </View>
    );
};



export default BookDetailsPage;