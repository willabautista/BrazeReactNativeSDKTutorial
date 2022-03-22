import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


const KeyValueInputBox = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <TextInput multiline={false} onChangeText={key => props.setKey(key)} />
            </View>
            <View style={styles.textBox}>
                <TextInput multiline={false} onChangeText={value => props.setValue(value)} />
            </View>
        </View>
    );
}

export default KeyValueInputBox;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 400,
        paddingTop: 10,
        paddingBottom: 10
    },
    textBox: {
        borderColor: '#000000',
        borderWidth: 1,
        width: 170,
        padding: 3,
        borderRadius: 4
    }
});