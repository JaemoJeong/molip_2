import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, TextInput, Alert, Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from "axios"
import Toast from 'react-native-toast-message';

export class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          response: "click to connect to server",
          name: "ddf",
          id:"!!",
          pw: ""
        }
      }
    
      connect = async () => {
        
        const URL = "http://192.249.18.167:443/welcome"
        const data_url = "http://192.249.18.167:443/api/movie"
        const id = this.state.name;
        const pw = this.state.pw;
        try {
            //const response = await fetch(URL + "/" + this.state.name);
           
            const response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify({name: this.state.name}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(response.status != 200){
                throw new Error("Something is wrong"+response.status +  this.state.name)
            }
            const responseText = await response.text();
            this.setState({response: responseText});
            axios.get(data_url)
            .then((Response)=>{
                const datas = Response.data;
                for(var data of datas){
                    console.log(data.pw);
                    if((id===data.id) && (pw===data.pw)) this.setState({id: "success"});
                    else {
                        this.setState({id: "fail"});
                        Toast.show({
                            type:'error',
                            position:'top',
                            text1:'Info',
                            text2:'detail',
                            visibilityTime: 5000,
                            autoHide: true,
                            onShow: () => {},
                            onHide: () => {},
                        });
                    }
                }
                
            })
            .catch((Error)=>{console.log(Error)})

            //this.setState({id: user});
          
        }catch(error) {
            Alert.alert(error.message);

        }


        // fetch(URL).then(response => {
        //   if(response.status == 200) {
        //     return response.text()
        //   }
        //   else {
        //       throw new Error("Something is wrong")
        //   }
        // }).then(resonseText => {
        //     this.setState({response: resonseText});
        // }).catch(error => {
        //     console.error(error.message)
        // });
      }
    
    setText = (text) => {
        //throw new Error("Something is wrong"+text)
        this.setState({name: text});
    }

      
    setPw = (text) => {
        //throw new Error("Something is wrong"+text)
        this.setState({pw: text});
    }

    toastConfig = {
        success: internalState => (
            <View style={{height:40, width: '90%', backgroundColor: 'yellow'}}>
                <Text>{internalState.text1}</Text>
            </View>
        ),
        error: () => {},
        info: () => {},
        any_custom_type: () => {},
    }

    render() {
        return (
        < View style={styles.container} >
            <View style={styles.bookContainer}>
                <ImageBackground source={require('../assets/books.jpg')}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}> BookApp </Text>
                    <Text style={styles.subtitle}> Only for students </Text>
                    <Toast ref={(ref)=>{Toast.setRef(ref)}}/>
                    <View style={[styles.inputContainer, styles.centerbox]}>
                        <TextInput
                            placeholder="ID"
                            style={styles.input}
                            onChangeText={this.setText}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            onChangeText={this.setPw}
                            secureTextEntry
                        />
                         
                    
                        <Text style={styles.title}> {this.state.response} </Text>
                        <Text style={styles.title}> {this.state.id} </Text>
               
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={this.connect}
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