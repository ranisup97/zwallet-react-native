import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ToastAndroid,
  BackHandler,
  TouchableOpacity,
  Alert,
  TextInput,
  Keyboard,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {Button, IconButton, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';
const Login = (props) => {
  // console.log(props,'login')
  const {message} = props;
  const inputPassword = React.useRef();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [exitApp, setExitApp] = React.useState(0);
  const [width, setWidth] = React.useState(390);
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();

  const onSubmit = () => {
    Keyboard.dismiss();
    setLoading(true);
    dispatch(
      AuthLogin({
        email: email,
        password: password,
      }),
    );
  };

  //back handler di login ketika tombol back di klik maka akan muncul pesan
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show('Tekan Kembali untuk keluar', ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  });
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setWidth(390);
  };

  const _keyboardDidHide = () => {
    setWidth(390);
  };

  const [register, setRegister] = React.useState(false);

  const onRegister = () => {
    setRegister(true);
    setTimeout(() => {
      props.navigation.navigate('SignUp');
      setRegister(false);
    });
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <Text style={[style.logo, {width: width}]}>Zwallet</Text>
        <View style={style.box}>
          <View style={{padding: 15}}>
            <Text style={style.hello}>Login</Text>
            <Text style={[style.helloSpan]}>
              Login to your axisting account to acces all the features in
              Zwallet.
            </Text>
          </View>
          <View style={{padding: 15}}>
            <View style={style.inputItem}>
              <Image
                source={require('../../../assets/images/icons/mail.png')}
              />
              <TextInput
                style={{width: '100%', marginLeft: 10}}
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
              <Image
                source={require('../../../assets/images/icons/lock.png')}
              />
              <TextInput
                style={{width: '100%', marginLeft: 10}}
                ref={inputPassword}
                value={password}
                placeholder="Masukkan Password"
                autoCapitalize={'none'}
                secureTextEntry={hidePassword}
                returnKeyType="send"
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => onSubmit()}
                underlineColorAndroid="#fff"
              />
              <TouchableOpacity
                onPress={() => setHidePassword(!hidePassword)}
                style={{position: 'absolute', right: 0}}>
                <Image
                  source={require('../../../assets/images/icons/eye-crossed.png')}
                  color="#444"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
            >
          <Text style={{textAlign: 'right', marginRight: 10,  color: 'black'}}>
            Forgot Password?
          </Text>
          </TouchableOpacity>
          </View>

          <View style={{padding: 20, marginTop: 30}}>
            <TouchableOpacity
              style={{backgroundColor: '#6379F4', borderRadius: 8, padding: 12}}
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}>
              <Text style={{textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>

            <Text
              style={{
                padding: 15,
                marginTop: 50,
                textAlign: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <View 
              style={{flexDirection: 'row'}}>
                <Text style={{ color: 'black'}}>
                Don't have an account? Let's 
                </Text>
                <Text
                  style={{color: '#6379F4'}}
                  value={register}
                  onPress={() => onRegister()}> Sign Up
                </Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
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
    // margin: 10,
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: responsiveFontSize(2),
    color: 'grey',
  },
  inputWrap: {
    padding: 15,
  },
  inputItem: {
    backgroundColor: '#fff',
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6379F4',
    overflow: 'hidden',
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
    color: 'grey',
    padding: 15,
  },
});
