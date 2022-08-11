import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    background: {
        backgroundColor: '#252525',
        color: '#e91e63',
        flex: 1,
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    textDefault: {
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 16,
    },
    headerTextDefault: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Arial',
        padding: 2,
    },
    banner: {
        backgroundColor: '#4A4A4A',
        width: '100%',
    }



})

export default GlobalStyles;