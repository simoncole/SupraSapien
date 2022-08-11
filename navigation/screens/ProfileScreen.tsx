import { View, Text } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";


export default function ProfileScreen(){
    return(
        <View style={GlobalStyles.background}>
            <Text style={GlobalStyles.textDefault}>Profile</Text>
        </View>
    )
}