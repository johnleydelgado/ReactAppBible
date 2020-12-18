import React from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// const DATA = [
//     {
//         ObjArry: [
//             id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//             title: 'First Item',
//             content: ['1', '2', '3']
//         ],

//     },

// ];

const BibleList = ({ data }) => (
    // console.log(data);

    <View>
        <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{ flex: 1, justifyContent: 'space-between', flexWrap: 'wrap' }}
            renderItem={({ item }) => (
                <View style={styles.content}>
                    <Text style={{ fontFamily: 'OpenSansL', fontSize: 10 }}>{item.name}</Text>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <FontAwesome5 name='book-open' size={40} color='darkgrey' />
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
        />
    </View>

);

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        fontFamily: 'OpenSansB',
        width: '100%'
    },
    parentContent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: width,
        backgroundColor: 'red'
    },
    content: {
        backgroundColor: 'whitesmoke',
        justifyContent: 'space-between',
        width: width / 2 * 0.9,
        borderRadius: 20,
        margin: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

})
export default BibleList;