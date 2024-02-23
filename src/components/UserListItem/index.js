import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserListItem = ({user}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress= {()=>navigation.navigate("User details", {id: user.id})} style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.location}>{user.location}</Text>
                <Text style={styles.reviews}>{user.reviews}</Text>
                <Text style={styles.rating}>{user.rating}</Text>
            </View>
            {user.image && (
            <Image source={{uri: user.image}} style={styles.image}/>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{

        paddingVertical:10,
        marginHorizontal: 10,
        borderTopColor:"grey",
        borderTopWidth:1,
        flexDirection: "row"

    },
    name:{
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5,

    },
    location: {
        color: "grey",
        marginVertical: 5,
        fontSize:16,

    },
    reviews:{
        fontSize:16,

    },
    rating:{
        fontSize:16,

    },

    image:{
        height: 75,
        aspectRatio: 1,
    }
});

export default UserListItem;