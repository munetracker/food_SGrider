import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    // const result_arr = [
    //     {title:'Cost Effective', price:'$'},
    //     {title:'Bit Pricier', price:'$$'},
    //     {title:'Big Spender', price:'$$$'}
    // ]

    function filterResultsByPrice( price ) {
        if(price === "all"){
            return results;
        }else if (price === "not"){
            let price_arr = ['$','$$','$$$'];
            return results.filter( result => {
                return (!price_arr.includes(result.price))
            })
        }
        return results.filter( result => {
            return result.price === price;
        })
    }

    return (
        // <View style={{ flex:1 }}>
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={searchApi}
            />
            { errorMessage ? <Text> {errorMessage} </Text> : null }
            {/* <Text style={styles.text}> {results.length} Results </Text> */}

            {/* <FlatList
                data = {result_arr}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                    return 
                    <ResultsList results={filterResultsByPrice(item.price)} title={item.title}/>
                }}
            /> */}

            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList 
                    results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList 
                    results={filterResultsByPrice('$$$')} title='Big Spender'/>
                <ResultsList 
                    results={filterResultsByPrice('all')} title='All'/>
                <ResultsList 
                    results={filterResultsByPrice('not')} title='Not All'/>
            </ScrollView>
        {/* </View> */}
        </>
    )
};

const styles = StyleSheet.create({
    text:{
        marginLeft: 30
    }
});

export default SearchScreen;


