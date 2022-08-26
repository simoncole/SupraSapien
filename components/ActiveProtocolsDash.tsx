import { ScrollView, View, Text } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import styles from "../styles/HomeScreenStyles";
import ActiveProtocolsCard from "./ActiveProtocolCard";


export default function ActiveProtocolsDash(){
    //get the current active protocols for the user
    //component gets data as props
    

    return(
        <View style={[GlobalStyles.banner, {height: 175}]}>
            <ScrollView horizontal={true} style={styles.activeProtocolCarousel}>
                <ActiveProtocolsCard protocolName="testName" protocolDescription="test description here this is a test desctipton this should be short"/>
                <ActiveProtocolsCard protocolName="testName" protocolDescription="test description here this is a test desctipton this should be short"/>
                <ActiveProtocolsCard protocolName="testName" protocolDescription="test description here this is a test desctipton this should be short"/>
            </ScrollView>
        </View>
    );

}