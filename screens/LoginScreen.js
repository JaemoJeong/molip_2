import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, TextInput, Alert, Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {

    const [ID, setID] = useState('')
    const [password, setPassword] = useState('')

    return (
        < View style={styles.container} >
            <View style={styles.bookContainer}>
                <ImageBackground source={require('../assets/books.jpg')}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}> BookApp </Text>
                    <Text style={styles.subtitle}> Only for students </Text>

                    <View style={[styles.inputContainer, styles.centerbox]}>
                        <TextInput
                            placeholder="ID"
                            value={ID}
                            onChangeText={text => setID(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={styles.button}>
                                <Text style={styles.buttonText}> Login </Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


            </View>

            <StatusBar style="auto" />
        </View >

    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bookContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',


    },
    title: {
        fontSize: 40,
        fontWeight: '500',

    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',

    },
    centerbox: {
        marginTop: '20%',

    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#C2D5DA',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }


})