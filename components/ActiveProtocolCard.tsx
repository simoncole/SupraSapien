import { View, Text } from "react-native";
import styles from "../styles/HomeScreenStyles";

interface ActiveProtoclolsCardProps {
    protocolName: string,
    protocolDescription: string,
};

export default function ActiveProtocolsCard({protocolName, protocolDescription}: ActiveProtoclolsCardProps){
    return(
        <View style={styles.activeProtocolCard}>
            <Text>{protocolName}</Text>
            <Text>{protocolDescription}</Text>
        </View>
    )
}