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
    },
    activeProtocolCard: {
        width: 150,
        height: 150,
        backgroundColor: '#257f28',
        flex: 1,
        padding: 5,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        
    },
    activeProtocolCarousel: {
        flex: 1,
        flexDirection: "row",
    }
})

export default styles;