import {View, Text, StyleSheet } from 'react-native';
import books from '../../../assets/data/books.json';
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';

const user = books[0].users[0];

const UserDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity>1){
            setQuantity(quantity-1);
        }
    };

    const onPlus = () => {
        setQuantity(quantity+1);
    };

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.location}>{user.location}</Text>
            <Text style={styles.location}>{user.reviews}</Text>
            <Text style={styles.location}>{user.rating}</Text>

            <View style={styles.separator}/>

            <View style={styles.row}> 
                <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus}/>
            </View>
            <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Add {quantity} to basket
                    </Text>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: '100%',
      paddingVertical: 40,  
      padding: 10,
    },
    name:{
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    location:{
        color: "grey"
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,

    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },

    quantity:{
        fontSize: 25,
        marginHorizontal: 20,
    },

    button:{
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center"

    },
    buttonText:{
        color: "white",
        fontWeight: "600",
        fontSize: 20,

    }
  
  });

export default UserDetailsScreen;