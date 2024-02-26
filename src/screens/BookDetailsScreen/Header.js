import {View, Text, Image} from 'react-native';
import styles from './styles';

const DEFAULT_IMAGE = 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';


const BookHeader = ({book}) => {
    return (
        <View style ={styles.page}> 
            <Image
            source={{
                uri: book.image.startsWith('http') ? book.image : DEFAULT_IMAGE,}} 
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