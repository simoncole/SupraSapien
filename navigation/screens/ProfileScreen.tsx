import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import GlobalStyles from "../../styles/GlobalStyles";

import Profile from "../../components/Profile";


export default function ProfileScreen(){
    return(
        <View style={GlobalStyles.background}>
            <Profile/>
        </View>
    )
}