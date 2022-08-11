import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { useEffect, useState } from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming, FadeOut } from "react-native-reanimated";

import styles from "../styles/HomeScreenStyles";
import GradientText from "./GradientText";

export default function ExperimentalProtocolDash(){
    const [completionStatus, setCompletionStatus] = useState(false);

    const buttonOpacity = useSharedValue(1);

    const buttonOpacityStyle = useAnimatedStyle(() => {
        return {
            opacity: buttonOpacity.value,
        }
    })

    const handleCompletionPressIn = () => {
        buttonOpacity.value = withTiming(0.2, {
            duration: 500,
        });
    }

    const handleCompletionPressOut = () => {
        setCompletionStatus(true);
    }

    // const handleCompletionPress = () => {
    //     buttonOpacity.value = withTiming(0, {
    //         duration: 1000,
    // }, () => setCompletionStatus(true));
    // }

    const activeProtocolName = "Morning Light";

    return(
        <View style={[GlobalStyles.banner, {height: 175}]}>
            <View style={{flex: 1, alignItems: 'center'}}>
                {!completionStatus?
                <Pressable 
                onPressIn={handleCompletionPressIn}
                onPressOut={handleCompletionPressOut}
                >
                    <Animated.View
                    style={[styles.completedButton,
                    {flex: 1, alignItems: "center", justifyContent: 'center'}, buttonOpacityStyle]}>
                        <GradientText style={styles.completedButtonText}>Completed Today??</GradientText>
                    </Animated.View>
                </Pressable>
                :
                <GradientText style={styles.completedButtonText}>YAY!!!</GradientText>
                }
            </View>
        </View>
    );
}



