import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import TitledInputBox from '../components/TitledInputBox';
import KeyValueInputBox from '../components/KeyValueInputBox';

const AttributesScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [language, setLanguage] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')
    const [pushSub, setPushSub] = useState('')
    const [emailSub, setEmailSub] = useState('')

    const [customAttributeKey, setCustomAttributeKey] = useState('')
    const [customAttributeValue, setCustomAttributeValue] = useState('')

    const setStandardAttributes = () => {
        /* TODO: add SDK method */
        if (firstName) {

        }

        /* TODO: add SDK method */
        if (lastName) {

        }

        /* TODO: add SDK method */
        if (email) {

        }

        /* TODO: add SDK method */
        if (country) {

        }

        /* TODO: add SDK method */
        if (homeCity) {

        }

        /* TODO: add SDK method */
        if (language) {

        }

        /* TODO: add SDK method */
        if (gender) {

        }

        /* TODO: add SDK method */
        if (phone) {

        }

        /* TODO: add SDK method */
        if (birthday) {

        }

        /* TODO: add SDK method */
        if (pushSub) {

        }

        /* TODO: add SDK method */
        if (emailSub) {

        }
    }

    const setCustomAttribute = () => {
        /* TODO: add SDK method */
        if (customAttributeKey && customAttributeValue) {

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Standard Attributes</Text>
                <TitledInputBox title={'First Name'} setValue={setFirstName} />
                <TitledInputBox title={'Last Name'} setValue={setLastName} />
                <TitledInputBox title={'Email'} setValue={setEmail} />
                <TitledInputBox title={'Country'} setValue={setCountry} />
                <TitledInputBox title={'Home City'} setValue={setHomeCity} />
                <TitledInputBox title={'Lanugage'} setValue={setLanguage} />
                <TitledInputBox title={'Gender'} setValue={setGender} />
                <TitledInputBox title={'Phone'} setValue={setPhone} />
                <TitledInputBox title={'Birthday'} setValue={setBirthday} />
                <TitledInputBox title={'Push Sub'} setValue={setPushSub} />
                <TitledInputBox title={'Email Sub'} setValue={setEmailSub} />
                <Button title={'Set Standard Attributes'} onPress={setStandardAttributes} />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Custom Attributes</Text>
                <KeyValueInputBox setKey={setCustomAttributeKey} setValue={setCustomAttributeValue} />
                <Button title={'Set Custom Attribute'} onPress={setCustomAttribute} />
            </View>
        </View >
    );
};

export default AttributesScreen;

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
