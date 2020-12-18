import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import SearchBox from '../../component/SearchBox';
import { COLORS } from '../../constant/colors'
import { FontAwesome5 } from '@expo/vector-icons';
import BibleList from '../../component/Home/BibleList';

function Home(props) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://api.scripture.api.bible/v1/bibles?name=English', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': 'cf738bbca742523b4237e47f3e1190f2'
            }
        })
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(true), formatData();
            })
    }, [isLoading]);

    const formatData = () => {
        let sortedVersions = {};
        console.log(sortedVersions);
    }

    return (
        <View style={styles.container}>
            <SearchBox />
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <View style={styles.header_items}>
                        <FontAwesome5 name='star' size={20} color={COLORS.mainColor} />
                        <Text style={{ fontFamily: 'OpenSansB', color: 'darkgrey', textAlign: 'center', }}>Top Read</Text>
                    </View>
                    <View style={styles.header_items}>
                        <FontAwesome5 name='book-open' size={20} color={COLORS.thirdColor} />
                        <Text style={{ fontFamily: 'OpenSansB', color: 'darkgrey' }}>Verses</Text>
                    </View>
                    <View style={styles.header_items}>
                        <FontAwesome5 name='praying-hands' size={20} color='gold' />
                        <Text style={{ fontFamily: 'OpenSansB', color: 'darkgrey' }}>Prayers</Text>
                    </View>
                    <View style={styles.header_items}>
                        <FontAwesome5 name='newspaper' size={20} color='black' />
                        <Text style={{ fontFamily: 'OpenSansB', color: 'darkgrey' }}>News</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content} >
                <BibleList data={data} />
            </View>
        </View>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    header: {
        flex: 2,
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        width: width / 2 * 1.5,
        height: 70,
        backgroundColor: 'white'
    },
    header_items: {
        alignItems: 'center'
    },
    content: {
        flex: 8,
    },
    contentHeaderText: {

    }


})
export default Home;