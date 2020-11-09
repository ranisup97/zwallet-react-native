import React from 'react'
import { StyleSheet, View, 
    TextInput, 
    ScrollView, 
    SafeAreaView, Image, 
    ToastAndroid} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

import {Button, IconButton, Text} from 'react-native-paper';
const Login = (props) => {
    const inputPassword = React.useRef();
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [register, setRegister] = React.useState(false);

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          ToastAndroid.show(
            `Login Sukses, Selamat Datang ${username}`,
            ToastAndroid.SHORT,
          );
          props.navigation.navigate('MainApp');
          setLoading(false);
        }, 3000);
        };

        const onRegister = () => {
            setRegister(true);
            setTimeout(() => {
              props.navigation.navigate('SignUp');
              setRegister(false);
            }, 1000);
            };

    return (
            <View style={styles.container}>
                <Text style={styles.logo}>Zwallet</Text>
                    <View style={styles.box}>
                        <Text style={styles.textLogin}>
                            Login
                        </Text>
                        <Text style={styles.muted}>
                            Login to your axisting account to acces all the features in Zwallet
                        </Text>
                <View style={styles.inputWrap}>
                
                <View style={styles.inputItem}>
                    
                {/* <Image style={{marginTop: 20}}source={require('../../../assets/images/icons/mail.png')}/> */}
                <TextInput
                    placeholder="Enter your E-mail"
                    autoCapitalize={'none'}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    onSubmitEditing={() => inputPassword.current.focus()}
                    returnKeyType="next"
                />
                </View>
                <View style={styles.inputItem}>
                <TextInput
                    ref={inputPassword}
                    value={password}
                    placeholder="Masukkan Password"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
                </View>
                </View>
                <View style={styles.buttonLogin}>
                    <Button
                    onPress={() => onSubmit()}
                    color="#6379F4"
                    mode="contained"
                    disabled={loading}
                    loading={loading}>
                    Login
                    </Button>
                </View>
                <View>
                    <Text style={{padding: 15, marginTop: 150, textAlign:'center', flexDirection:'row'}}>
                        Don't have an account ? Let's 
                        <Text style={{color: 'blue'}}
                        value={register}
                        onPress={() => onRegister()}
                        > Sign Up</Text>
                    </Text>
                </View>
                
            </View>
            
        {/* </View> */}
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        
    },
    logo: {
        textAlign: 'center',
        color: '#6379F4',
        fontSize: responsiveFontSize(3),
        paddingBottom: 50,

    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 35,

    },
    textLogin: {
        textAlign: 'center',
        top: 30,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
    },
    inputWrap: {
        padding: 15,
      },
    muted: {
        textAlign: 'center',
        flexDirection: 'row',
        top: 50,
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: responsiveFontSize(2),
        color:'grey',
    },
    inputWrap: {
        top: 100,
        padding: 5,
      },
      inputItem: {
        padding: 5,
        // borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: '#333',
        marginVertical: 5,
        borderRadius: 5,
      },
      buttonLogin:{
        top: 150,
        backgroundColor:"white",
        padding: 15
      },
      
      
})
