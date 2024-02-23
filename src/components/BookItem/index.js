import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';

const BookItem = ({book}) => {

  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate("Book details", {id: book.id});
  }

  return(
    <Pressable  onPress = {onPress} style={styles.bookContainer}>
        <Image source={{
          uri: book.image.startsWith('http') ? book.image : DEFAULT_IMAGE,
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
  