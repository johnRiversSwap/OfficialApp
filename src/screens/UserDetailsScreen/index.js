import {View, Text, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { generateClient } from 'aws-amplify/api';
import {getUser} from '../../../src/graphql/queries';

const client = generateClient();

const UserDetailsScreen = () => {
    const [userDetails, setuserDetails] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    const identifier = route.params?.id;

    const onMinus = () => {
        if (quantity>1){
            setQuantity(quantity-1);
        }
    };

    const onPlus = () => {
        setQuantity(quantity+1);
    };

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const userData = await client.graphql({
                    query: getUser,
                    variables: { id: identifier }
                });
                setuserDetails(userData.data.getUser);
            }catch (error) {
                console.log("Error fetching users details:", error);
            }
        }

        fetchUserDetails();

    },[identifier])

    if(!userDetails)  {
        return <ActivityIndicator size={"large"} color={"grey"}/>;
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{userDetails.name}</Text>
            <Text style={styles.location}>{userDetails.location}</Text>
            <Text style={styles.location}>{userDetails.reviews}</Text>
            <Text style={styles.location}>{userDetails.rating}</Text>

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