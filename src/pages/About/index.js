import React, { useLayoutEffect } from "react";
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native/";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function About(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.name === '' ? 'About' : route.params?.name
        })
    }, [])

    function navegaContato() {
        navigation.navigate('Contact');
    }

    return(
        <View style={styles.container}>
            <Text>About</Text>
            <Text>{route.params?.name}</Text>
            <Text>{route.params?.email}</Text>
            <Button title="Ir para Contact" onPress={ navegaContato } />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});