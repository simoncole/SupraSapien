import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    completedButton: {
        width: 300,
        height: 125,
        marginVertical: 20,
        marginHorizontal: 50,
        backgroundColor: '#257f28',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    completedButtonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Arial',
        padding: 2,
    }
})

export default styles;