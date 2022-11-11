import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <FontAwesome style={styles.iconstyle} name="search" />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const universal_color = ['#F0EEEE'];
const styles = StyleSheet.create({
    background:{
        marginTop: 10,
        backgroundColor: universal_color[0],
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
    iconstyle:{
        marginHorizontal: 10,
        fontSize: 40,
        color: "black",
        alignSelf: 'center'
    },
});

export default SearchBar;


