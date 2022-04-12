import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import TitledInputBox from '../components/TitledInputBox';
import KeyValueInputBox from '../components/KeyValueInputBox';
import ReactAppboy from 'react-native-appboy-sdk';

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
            ReactAppboy.setFirstName(firstName)
        }

        /* TODO: add SDK method */
        if (lastName) {
            ReactAppboy.setLastName(lastName)
        }

        /* TODO: add SDK method */
        if (email) {
            ReactAppboy.setEmail(email)
        }

        /* TODO: add SDK method */
        if (country) {
            ReactAppboy.setCountry(country)
        }

        /* TODO: add SDK method */
        if (homeCity) {
            ReactAppboy.setHomeCity(homeCity)
        }

        /* TODO: add SDK method */
        if (language) {
            ReactAppboy.setLanguage(language)
        }

        /* TODO: add SDK method */
        if (gender) {
            ReactAppboy.setGender(gender)
        }

        /* TODO: add SDK method */
        if (phone) {
            ReactAppboy.setPhoneNumber(phone)
        }

        /* TODO: add SDK method */
        if (birthday) {
            var birthaySplit = birthday.split('/')
            ReactAppboy.setDateOfBirth(parseInt(birthaySplit[2]), parseInt(birthaySplit[1]), parseInt(birthaySplit[0]))
        }

        /* TODO: add SDK method */
        if (pushSub) {
            ReactAppboy.setPushNotificationSubscriptionType(pushSub)
        }

        /* TODO: add SDK method */
        if (emailSub) {
            ReactAppboy.setEmailNotificationSubscriptionType(emailSub)
        }
    }

    const setCustomAttribute = () => {
        /* TODO: add SDK method */
        if (customAttributeKey && customAttributeValue) {
            ReactAppboy.setCustomUserAttribute(customAttributeKey, customAttributeValue)
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
                <TitledInputBox title={'Gender'} setValue={setGender} placeholder={'m, f, u, o, n, p'} />
                <TitledInputBox title={'Phone'} setValue={setPhone} />
                <TitledInputBox title={'Birthday'} setValue={setBirthday} placeholder={'dd/mm/yyyy'} />
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
