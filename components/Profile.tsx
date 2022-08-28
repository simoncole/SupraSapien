import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import GlobalStyles from "../styles/GlobalStyles";
import { styles } from "../styles/ProfileStyles";

export default function Profile(){
    //get username and pass
    const {data, isLoading, isError} = useQuery(["userInfo"], async () => {
        const res = await fetch("http://localhost:4000/profile/slimon");
        return res.json();
    });
    return(
        <View style={styles.usernameWrapper}>
            {
                isLoading? 
                    <Text>Loading...</Text>
                :
                    isError?
                        <Text>There was error</Text>
                    :
                    <Text style={styles.userNameText}>{data[0].password}</Text>
            }
        </View>
    );
}