import {View, Text, Image} from 'react-native';
import styles from './styles';

const BookHeader = ({book}) => {
    return (
        <View style ={styles.page}> 
            <Image
            source={{uri:book.image}} 
            style={styles.image}
            resizeMode="contain"
            />
            <View style={styles.container}>
                <Text style={styles.title}>{book.title} - {book.author}</Text>
                <Text style ={styles.language}>{book.language}</Text> 
                <Text style={styles.menuTitle}>Users:</Text> 
            </View>
        </View>
    );
}

export default BookHeader;