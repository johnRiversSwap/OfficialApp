import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookItem = ({book}) => {

  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate("Book details", {id: book.id});
  }

  return(
    <Pressable  onPress = {onPress} style={styles.bookContainer}>
        <Image source={{
          uri: book.image,
          }} 
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.row}>
            <View>
                <Text style={styles.title}>{book.title} - {book.author}</Text>
                <Text style={styles.language}>{book.language}</Text>
            </View>
            <View style={styles.rating}>
                <Text style={styles.title}>rating</Text>
            </View>
    
        </View>

        
        {/* <Text style={styles.closestUser}>{book.user}</Text> */}
        
    </Pressable>

  )
};

export default BookItem;

const styles = StyleSheet.create({
    bookContainer: {
      width:"100%",
      marginVertical: 15,
    },
  
    image: {
      width:"100%",
      aspectRatio: 1/1,
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      marginVertical: 5,
    },
    closestUser: {
      color: "grey",
    },
    language: {
  
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
  
  });
  