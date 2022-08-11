import * as React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from "../../styles/GlobalStyles";
import ExperimentalProtocolDash from '../../components/ExperimentalProtocolDash';


export default function HomeScreen(){
    return(
        <View style={[GlobalStyles.background, {alignItems: 'center',}]}>
            <Text style={[GlobalStyles.headerTextDefault, {marginTop: 8}]}>
                Your Experimental Protocol:
            </Text>
            <ExperimentalProtocolDash/>
        </View>
    )
}