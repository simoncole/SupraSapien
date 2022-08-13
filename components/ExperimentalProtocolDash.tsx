import { StyleSheet, View, Text, Pressable, Image, Vibration } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { useEffect, useState } from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming, FadeOut, interpolateColor, useDerivedValue } from "react-native-reanimated";
import { useQuery } from "@tanstack/react-query";

import styles from "../styles/HomeScreenStyles";
import GradientText from "./GradientText";

export default function ExperimentalProtocolDash(){
    const [completionStatus, setCompletionStatus] = useState(false);
    const [pressedState, setPressedState] = useState(false);

    // const progress = useSharedValue(0);
    const progress = useDerivedValue(() => {
        return pressedState ? withTiming(0) : withTiming(1)
    }, [pressedState])


    const buttonColorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(progress.value, [0, 1], ["#126514", "#25BE28"])
        return {
            backgroundColor: backgroundColor,
        }
    })

    const handleCompletionPressIn = () => {
        Vibration.vibrate(500);
        setPressedState(true);
    }

    const handleCompletionPressOut = () => {
        setCompletionStatus(true);
    }

    // const handleCompletionPress = () => {
    //     buttonOpacity.value = withTiming(0, {
    //         duration: 1000,
    // }, () => setCompletionStatus(true));
    // }

    const getProtocolData = async () => {
        const res = await fetch("http://localhost:4000/protocols/1");
        const data = await res.json();
        return data.data;
    }

    const { data: protocolData, 
        isLoading: protocolDataLoading, 
        isError:protocolDataError } 
        = useQuery(["protocolData"], getProtocolData)

    // const activeProtocolName = "Morning Light";

    return(
        <View style={[GlobalStyles.banner, {height: 175}]}>
            <View style={{flex: 1, alignItems: 'center'}}>
                {
                    protocolData?
                    <Text>{protocolData[0].protocolName}</Text>
                    :
                    protocolDataLoading?
                    <Text>Loading...</Text>
                    :
                    <Text>There was an error in getting the data</Text>
                }

                {!completionStatus?
                <Pressable 
                onPressIn={handleCompletionPressIn}
                onPressOut={handleCompletionPressOut}
                >
                    <Animated.View
                    style={[styles.completedButton,
                    {flex: 1, alignItems: "center", justifyContent: 'center'}, buttonColorStyle]}>
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



