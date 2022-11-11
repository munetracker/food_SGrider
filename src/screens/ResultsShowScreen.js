import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id)
    }, [])


    if(!result){
        return null;
    }

    return (
        <View>
            {/* <Text>{navigation.getParam('id')}</Text> */}
            <FlatList
                // horizontal
                // showsHorizontalScrollIndicator = {false}
                data = {result.photos}
                keyExtractor={(item, index)=>index}
                renderItem={({item}) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
});

export default ResultsShowScreen;