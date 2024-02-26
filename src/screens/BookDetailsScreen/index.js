import {View, Text, Image, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import UserListItem from '../../components/UserListItem';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import {getBook, listBookUsers, listUsers} from '../../../src/graphql/queries';


const client = generateClient();

const BookDetailsPage = () => {
    const [book, setBook] = useState(null);
    const [bookUsers, setBookUsers] = useState([]);
    const route = useRoute();
    const navigation = useNavigation();
    const identifier = route.params?.id;

    useEffect(() => {
        async function fetchBookUsers() {
            try {
                const bookData = await client.graphql({
                    query: getBook,
                    variables: { id: identifier }
                });
                setBook(bookData.data.getBook);

                const bookUsersData = await client.graphql({
                    query: listBookUsers,
                    variables: {
                        filter: {
                            bookId: { eq: identifier }
                        }
                    }
                });
                const userIds = bookUsersData.data.listBookUsers.items.map(item => item.userId);

                const usersData = await client.graphql({
                    query: listUsers,
                });
                const filteredUsers = usersData.data.listUsers.items.filter(user => userIds.includes(user.id));
                setBookUsers(filteredUsers);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }

        fetchBookUsers();
    }, [identifier]);
    
    
    if (!book) {
        return <ActivityIndicator size={"large"} color={"grey"}/>;
    }

    return (
        <View style ={styles.page}> 
            <FlatList 
                ListHeaderComponent={()=><Header book={book}/>}
                data={bookUsers}
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