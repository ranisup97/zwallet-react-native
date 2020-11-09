import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image, ToastAndroid } from 'react-native'

import {Button, IconButton} from 'react-native-paper';

const SignUp = (props) => {
    const inputPassword = React.useRef();
    const [username, setUsername] = React.useState(null);
    const [email, setEmail] = React.useState(null); 
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [login, setLogin] = React.useState(false);

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          ToastAndroid.show(
            `SignUp Sukses, Silakan Create PIN`,
            ToastAndroid.SHORT,
          );
          props.navigation.navigate('CreatePIN');
          setLoading(false);
        }, 3000);
        };

        const onLogin = () => {
            setLogin(true);
            setTimeout(() => {
              props.navigation.navigate('Login');
              setLogin(false);
            }, 1000);
            };
    return (
        <ScrollView>
            <View style={{padding:70}}>
                <Text style={{textAlign:'center', fontSize: 25, color: '#6379F4'}}>Zwallet</Text>
            </View>
            <View style={{backgroundColor: '#fff', borderRadius: 25}}>
            <Text style={{textAlign:'center', fontSize: 17, fontWeight: 'bold', paddingTop:40}}>Sign Up</Text>
            <Text style={{paddingBottom: 20, marginTop: 30, textAlign: 'center', color:'grey'}}>
            Create your account to access Zwallet.
            </Text>

            <View style={styles.inputItem}>
                <Image style={{marginTop: 12}} source={require('../../../assets/images/icons/person.png')}/>
            <TextInput
                    // ref={inputPassword}
                    value={username}
                    placeholder="Enter your username"
                    autoCapitalize={'none'}
                    // secureTextEntry={true}
                    returnKeyType="send"
                    onChangeText={(text) => setUsername(text)}
                    onSubmitEditing={() => inputPassword.current.focus()}
                    onSubmitEditing={() => onSubmit()}
                  />

            </View>

            <View style={styles.inputItem}>
                <Image style={{marginTop: 12}} source={require('../../../assets/images/icons/mail.png')}/>
            <TextInput
                    // ref={inputPassword}
                    value={email}
                    placeholder="Enter your e-mail"
                    autoCapitalize={'none'}
                    // secureTextEntry={true}
                    returnKeyType="send"
                    onChangeText={(text) => setEmail(text)}
                    onSubmitEditing={() => inputPassword.current.focus()}
                    onSubmitEditing={() => onSubmit()}
                  />

            </View>

            <View style={styles.inputItem}>
                <Image style={{marginTop: 12}} source={require('../../../assets/images/icons/lock.png')}/>
            <TextInput
                    // ref={inputPassword}
                    value={password}
                    placeholder="Create your password"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                  />

            </View>

            <View style={{paddingTop: 40, borderRadius: 16}}>
                    <Button
                    onPress={() => onSubmit()}
                    color="#DADADA"
                    mode="contained"
                    // disabled={loading}
                    // loading={loading}
                    >
                    Sign Up
                    </Button>
                </View>

                <View style={{paddingTop: 30}}>
                    <Text style={{textAlign: 'center'}}>
                    Already have an account? Let’s 
                    <Text style={{color: 'blue'}}
                    onPress={() => onLogin()}
                    > Login</Text>
                    </Text>
                </View>


            </View>

            
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    inputItem: {
        paddingTop: 30,
        flexDirection: 'row',
        padding: 5,
        // borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: '#333',
        marginVertical: 5,
        borderRadius: 5,
      },
})
