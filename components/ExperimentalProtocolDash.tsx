import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { useState } from "react";

import styles from "../styles/HomeScreenStyles";
import GradientText from "./GradientText";

export default function ExperimentalProtocolDash(){
    const [completionStatus, setCompletionStatus] = useState(false);
    const activeProtocolName = "Morning Light";
    const handlePress = () => {
        setCompletionStatus(true);
    }
    return(
        <View style={[GlobalStyles.banner, {height: 175}]}>
            <View style={{flex: 1, alignItems: 'center'}}>
                {
                !completionStatus?
                    <Pressable 
                    onPress={handlePress} 
                    style={[styles.completedButton, {flex: 1, alignItems: "center", justifyContent: 'center'}]}
                    >
                        {/* <Text style={[GlobalStyles.headerTextDefault, styles.completedButtonText]}>
                            Completed Today??
                        </Text> */}
                        <GradientText style={styles.completedButtonText}>Completed Today??</GradientText>
                    </Pressable>
                    :
                    <Text style={GlobalStyles.headerTextDefault}>Yay!!!!</Text>

                }
            </View>
        </View>
    );
}



