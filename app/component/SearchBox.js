import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import React from "react";
const SearchBox = () => {
    return (
        <SafeAreaView style={styles.header_safe_area}>
            <Searchbar style={styles.searchStyle} placeholder='Search....' />
        </SafeAreaView>
    );

};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    header_safe_area: {
        zIndex: 1000,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignSelf: 'flex-start'
    },
    searchStyle: {
        margin: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width / 2 * 1.4,
        height: 40,

    }
})

export default SearchBox;