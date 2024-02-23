import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page:{
        flex: 1,
    },

    iconContainer:{
        position: 'absolute',
        top: 50,
        left: 10,
    },

    image: {
        width: "100%",
        aspectRatio: 2/1,
        marginTop: 100,
    },
    title:{
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,

    },
    language: {
        color: "grey",
        fontSize:15,

    },
    container: {
        margin: 10,
    },
    menuTitle:{
        marginVertical: 10,
        fontSize: 16,
        letterSpacing: 0.7,

    }
});