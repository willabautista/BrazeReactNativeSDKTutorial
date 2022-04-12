import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ReactAppboy from 'react-native-appboy-sdk';

const MessagingScreen = () => {

    return (
        <View style={styles.container}>
            <View styles={styles.sectionContainer}>
                <Text style={styles.title}>Content Cards</Text>
                <Button title={'Launch Content Cards'} onPress={ReactAppboy.launchContentCards} />
            </View>
            <View styles={styles.sectionContainer}>
                <Text style={styles.title}>In App Messages</Text>
            </View>
        </View>
    );
};

export default MessagingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10
    },
    sectionContainer: {
        paddingBottom: 20
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
}); 