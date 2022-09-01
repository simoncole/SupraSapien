import * as React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from "../../styles/GlobalStyles";
import ExperimentalProtocolDash from '../../components/ExperimentalProtocolDash';
import ActiveProtocolsDash from '../../components/ActiveProtocolsDash';
import { useQuery } from '@tanstack/react-query';


export default function HomeScreen(){
    const username = "jjung123";

    //get userProtocols, then pass to components
    const getUserProtocols = async () => {
        const res = await fetch(`http://localhost:4000/getUserProtocols/${username}`);
        return res.json();
    }
    const userExperimentalProtocol = useQuery(["getUserProtocols"], getUserProtocols);

    return(
        <View style={[GlobalStyles.background, {alignItems: 'center',}]}>
            <Text style={[GlobalStyles.headerTextDefault, {marginTop: 8}]}>
                You are currently experimeneting with: 
            </Text>
            <ExperimentalProtocolDash userExperimentalProtocol={userExperimentalProtocol}/>
            <Text style={GlobalStyles.headerTextDefault}>
                Your Active protocols
            </Text>
            <ActiveProtocolsDash/>


        </View>
    )
}