import React, { useLayoutEffect } from "react";
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native/";
import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contact(){
    const navigation = useNavigation();

    function handleHome() {
        navigation.dispatch(StackActions.popToTop); //Volta para o início da pilha de navegação
    }

    return(
        <View style={styles.container}>
            <Text>Contact</Text>
            <Button title="Go to home" onPress={handleHome}/>
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