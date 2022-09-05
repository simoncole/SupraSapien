import { useQuery } from "@tanstack/react-query";
import { ScrollView, View, Text } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import styles from "../styles/HomeScreenStyles";
import ActiveProtocolsCard from "./ActiveProtocolCard";

export default function ActiveProtocolsDash({username}: any){
    //get the current active protocols for the user
    //component gets data as props
    
    const activeProtocols = useQuery(["activeProtocols"], async () => {
        const res = await fetch(`http://localhost:4000/getUserActiveProtocols/${username}`);
        return res.json();
    })

    return(
        <View style={[GlobalStyles.banner, {height: 175}]}>
            {
                activeProtocols.isLoading ?
                    <Text>Loading...</Text>
                :
                activeProtocols.isError?
                    <Text>Error</Text>
                :
                    <ScrollView horizontal={true} style={styles.activeProtocolCarousel}>
                        {
                            activeProtocols.data.map((element: any) => {
                                return(
                                    <ActiveProtocolsCard protocolName={element.activeProtocols} protocolDescription="This is a test description in the actual app it will hopefully be not too long that is one thing I'm worried about but I guess you can always make the card scrollable as well"/>
                                )
                            })
                        }
                    </ScrollView>
            }
            
        </View>
    );

}