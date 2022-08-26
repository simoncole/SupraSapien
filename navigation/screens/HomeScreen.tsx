import * as React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from "../../styles/GlobalStyles";
import ExperimentalProtocolDash from '../../components/ExperimentalProtocolDash';
import ActiveProtocolsDash from '../../components/ActiveProtocolsDash';


export default function HomeScreen(){
    return(
        <View style={[GlobalStyles.background, {alignItems: 'center',}]}>
            <Text style={[GlobalStyles.headerTextDefault, {marginTop: 8}]}>
                Your Experimental Protocol
            </Text>
            <ExperimentalProtocolDash/>
            <Text style={GlobalStyles.headerTextDefault}>
                Your Active protocols
            </Text>
            <ActiveProtocolsDash/>


        </View>
    )
}