import React from 'react'
import { StyleSheet, View, 
    TextInput, 
    ScrollView, 
    SafeAreaView, 
    Image, 
    ToastAndroid,
    Keyboard} from 'react-native'
import {
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

import {Button, IconButton, Text} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { AuthLogin } from '../../../redux/actions/Auth';
const Login = (props) => {
  // console.log(props,'login')
    const inputPassword = React.useRef();
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    
    const [width, setWidth] = React.useState(390);
    const [hidePassword, setHidePassword] = React.useState(true)
    const dispatch = useDispatch()
    const onSubmit = () => {
      Keyboard.dismiss()
        setLoading(true);
        dispatch(
        AuthLogin({
            email: email,
            password: password,
        })
        );
    };

    React.useEffect(() => {
      Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  
      // cleanup function
      return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      };
    }, []);

    const _keyboardDidShow = () => {
      setWidth(390)
    };
  
    const _keyboardDidHide = () => {
      setWidth(390)
    };
    
    const [register, setRegister] = React.useState(false);

        const onRegister = () => {
            setRegister(true);
            setTimeout(() => {
              props.navigation.navigate('SignUp');
              setRegister(false);
            }, 1000);
            };

    return (
        <>
        <ScrollView  keyboardShouldPersistTaps='always'>
        <Text style={[style.logo, {width:width}]}>Zwallet
          
        </Text>
        <View style={style.box}>
        <View style={{padding: 15}}>
          <Text style={style.hello}>Login</Text>
          <Text style={[style.helloSpan]}>Login to your axisting account to acces all the features in Zwallet.</Text>
        </View>
        <View style={style.inputWrap}>
          <View style={style.inputItem}>
            <TextInput
              placeholder="Masukkan Email"
              autoCapitalize={'none'}
              value={email}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => inputPassword.current.focus()}
              returnKeyType="next"
              underlineColorAndroid="#fff"
            />
          </View>
          <View style={style.inputItem}>
            <TextInput
              ref={inputPassword}
              value={password}
              placeholder="Masukkan Password"
              autoCapitalize={'none'}
              secureTextEntry={hidePassword}
              returnKeyType="send"
              // returnKeyLabel='Masuk'
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={() => onSubmit()}
              underlineColorAndroid="#fff"
            />
            <View style={{ position: 'absolute', right: 0, }}>
              <IconButton 
                onPress={()=> setHidePassword(!hidePassword)}
                color='#444'
                icon={hidePassword ? 'eye-outline': 'eye-off-outline'}
              />

            </View>
          </View>
        </View>
        <Text style={{textAlign: 'right', marginRight: 10}}>Forgot Password?

        </Text>
        
        <View style={{padding: 70, backgroundColor: '#fff'}}>
        <Button
          onPress={() => onSubmit()}
          color="#6379F4"
          mode="contained"
          disabled={loading}
          loading={loading} >
          Login
        </Button>
        {/* <RectButton
          onPress={() => alert('aha')}
          rippleColor='#fff'
        >
          <View accessible
            style={{
              elevation: 3,
              backgroundColor: '#116242',
              padding: 15,
              borderRadius: 5
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Masuk</Text>
          </View>
        </RectButton> */}
        <Text style={style.textSignUp}>
          Don't have an account? Lets Sign Up
        </Text>
      </View>
      </View>
      </ScrollView>
        </>
        //     <View style={styles.container}>
        //         <Text style={styles.logo}>Zwallet</Text>
        //             <View style={styles.box}>
        //                 <Text style={styles.textLogin}>
        //                     Login
        //                 </Text>
        //                 <Text style={styles.muted}>
        //                     Login to your axisting account to acces all the features in Zwallet
        //                 </Text>
        //         <View style={styles.inputWrap}>
                
        //         <View style={styles.inputItem}>
                    
        //         {/* <Image style={{marginTop: 20}}source={require('../../../assets/images/icons/mail.png')}/> */}
        //         <TextInput
        //             placeholder="Enter your E-mail"
        //             autoCapitalize={'none'}
        //             value={email}
        //             onChangeText={(text) => setEmail(text)}
        //             onSubmitEditing={() => inputPassword.current.focus()}
        //             returnKeyType="next"
        //         />
        //         </View>
        //         <View style={styles.inputItem}>
        //         <TextInput
        //             ref={inputPassword}
        //             value={password}
        //             placeholder="Masukkan Password"
        //             autoCapitalize={'none'}
        //             secureTextEntry={true}
        //             returnKeyType="send"
        //             // returnKeyLabel='Masuk'
        //             onChangeText={(text) => setPassword(text)}
        //             onSubmitEditing={() => onSubmit()}
        //           />
        //         </View>
        //         </View>
        //         <View style={styles.buttonLogin}>
        //             <Button
        //             onPress={() => onSubmit()}
        //             color="#6379F4"
        //             mode="contained"
        //             disabled={loading}
        //             loading={loading}>
        //             Login
        //             </Button>
        //         </View>
        //         <View>
        //             <Text style={{padding: 15, marginTop: 150, textAlign:'center', flexDirection:'row'}}>
        //                 Don't have an account ? Let's 
        //                 <Text style={{color: 'blue'}}
        //                 value={register}
        //                 onPress={() => onRegister()}
        //                 > Sign Up</Text>
        //             </Text>
        //         </View>
                
        //     </View>
            
        // {/* </View> */}
        // </View>
    )
}

export default Login
const style = StyleSheet.create({
    headline: {
      backgroundColor: 'red',
      color: 'white',
      padding: 50,
      borderRadius: 50,
      fontSize: 50,
    },
    logo: {
      textAlign: 'center',
      color: '#6379F4',
      fontSize: responsiveFontSize(3),
      paddingBottom: 50,
      marginVertical: 15,
      marginTop: 70,
      fontWeight: 'bold',
    },
    box: {
          backgroundColor: '#fff',
          borderRadius: 35,
    },
    hello: {
      marginTop: 10,
      fontSize: responsiveFontSize(3), 
      fontWeight: 'bold', 
      color: '#444',  
      textAlign: 'center',
    },
    helloSpan: {
      marginTop: 10,
      textAlign: 'center',
      padding: 10,
      paddingLeft: 35,
      paddingRight: 35,
      fontSize: responsiveFontSize(2),
      color:'grey',
    },
    inputWrap: {
      padding: 15,
    },
    inputItem: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#333',
      marginVertical: 5,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#6379F4',
      padding: 15,
      color: 'white',
      borderRadius: 5,
      alignItems: 'center',
      elevation: 5,
    },
    textSignUp: {
      textAlign: 'center',
      color:'grey',
      padding: 15,
    }
    
  });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 80,
        
//     },
//     logo: {
//         textAlign: 'center',
//         color: '#6379F4',
//         fontSize: responsiveFontSize(3),
//         paddingBottom: 50,

//     },
//     box: {
//         flex: 1,
//         backgroundColor: '#fff',
//         borderRadius: 35,

//     },
//     textLogin: {
//         textAlign: 'center',
//         top: 30,
//         fontWeight: 'bold',
//         fontSize: responsiveFontSize(3),
//     },
//     inputWrap: {
//         padding: 15,
//       },
//     muted: {
//         textAlign: 'center',
//         flexDirection: 'row',
//         top: 50,
//         paddingLeft: 35,
//         paddingRight: 35,
//         fontSize: responsiveFontSize(2),
//         color:'grey',
//     },
//     inputWrap: {
//         top: 100,
//         padding: 5,
//       },
//       inputItem: {
//         padding: 5,
//         // borderWidth: 1,
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         // borderColor: '#333',
//         marginVertical: 5,
//         borderRadius: 5,
//       },
//       buttonLogin:{
//         top: 150,
//         backgroundColor:"white",
//         padding: 15
//       },
      
      
// })
