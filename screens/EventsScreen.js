import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import KeyValueInputBox from '../components/KeyValueInputBox';
import TitledInputBox from '../components/TitledInputBox';

const EventsScreen = () => {
    const [eventName, setEventName] = useState('')
    const [eventPropertyKey, setEventPropertyKey] = useState('')
    const [eventPropertyValue, setEventPropertyValue] = useState('')

    const [productId, setProductId] = useState('')
    const [price, setPrice] = useState(0)
    const [currencyCode, setCurrencyCode] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [purchasePropertyKey, setPurchasePropertyKey] = useState('')
    const [purchasePropertyValue, setPurchasePropertyValue] = useState('')

    const logCustomEvent = () => {
        if (eventName) {
            if (eventPropertyKey && eventPropertyValue) {
                let eventProperty = {}
                eventProperty[eventPropertyKey] = eventPropertyValue

                /* TODO: add SDK method */
            }
            else {
                /* TODO: add SDK method */

            }
        }
    }

    const logPurchase = () => {
        if (productId && price && currencyCode && quantity) {
            if (purchasePropertyKey && purchasePropertyValue) {
                let purchaseProperty = {}
                purchaseProperty[purchasePropertyKey] = purchasePropertyValue

                /* TODO: add SDK method */
            }
            else {
                /* TODO: add SDK method */

            }
        }
    }

    return (
        <View style={styles.container}>
            <View styles={styles.sectionContainer}>
                <Text style={styles.title}>Custom Event</Text>
                <TitledInputBox title={'Event Name'} setValue={setEventName} />
                <Text>Event Property</Text>
                <KeyValueInputBox setKey={setEventPropertyKey} setValue={setEventPropertyValue} />
                <Button title={'Log Custom Event'} onPress={logCustomEvent} />
            </View>
            <View styles={styles.sectionContainer}>
                <Text style={styles.title}>Purchase</Text>
                <TitledInputBox title={'Product Id'} setValue={setProductId} />
                <TitledInputBox title={'Price'} setValue={setPrice} />
                <TitledInputBox title={'Currency Code'} setValue={setCurrencyCode} />
                <TitledInputBox title={'Quantity'} setValue={setQuantity} />
                <Text>Purchase Property</Text>
                <KeyValueInputBox setKey={setPurchasePropertyKey} setValue={setPurchasePropertyValue} />
                <Button title={'Log Purchase'} onPress={logPurchase} />
            </View>
        </View>
    );
};

export default EventsScreen;

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
