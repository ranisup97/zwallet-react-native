import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  ToastAndroid,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {Button, IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AuthSignUp} from '../../../redux/actions/Auth';

const SignUp = (props) => {
  const inputPassword = React.useRef();
  const [firstName, setfirstName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  const {message} = props;
  const [exitApp, setExitApp] = React.useState(0);
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();

  const onSignUp = () => {
    Keyboard.dismiss();
    setLoading(true);
    dispatch(
      AuthSignUp({
        firstName: firstName,
        email: email,
        password: password,
      }),
    );
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show(
        `SignUp Succesfully!`,
        ToastAndroid.SHORT,
      );
      props.navigation.navigate('Login');
      setLoading(false);
    }, 3000);
  };

  // const onLogin = () => {
  //   setLogin(true);
  //   setTimeout(() => {
  //     props.navigation.navigate('Login');
  //     setLogin(false);
  //   }, 1000);
  // };
  return (
    <ScrollView>
      <View style={{padding: 70}}>
        <Text style={{textAlign: 'center', fontSize: 25, color: '#6379F4'}}>
          Zwallet
        </Text>
      </View>
      <View style={{backgroundColor: '#fff', borderRadius: 25}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: 'bold',
            paddingTop: 40,
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            paddingBottom: 20,
            marginTop: 30,
            textAlign: 'center',
            color: 'grey',
          }}>
          Create your account to access Zwallet.
        </Text>

        <View style={styles.inputItem}>
          <Image
            style={{marginTop: 12}}
            source={require('../../../assets/images/icons/person.png')}
          />
          <TextInput
            // ref={inputPassword}
            value={firstName}
            placeholder="Enter your firstName"
            autoCapitalize={'none'}
            // secureTextEntry={true}
            returnKeyType="next"
            onChangeText={(text) => setfirstName(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
          />
        </View>

        <View style={styles.inputItem}>
          <Image
            style={{marginTop: 12}}
            source={require('../../../assets/images/icons/mail.png')}
          />
          <TextInput
            // ref={inputPassword}
            value={email}
            placeholder="Enter your e-mail"
            autoCapitalize={'none'}
            // secureTextEntry={true}
            value={email}
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
          />
        </View>

        <View style={styles.inputItem}>
          <Image
            style={{marginTop: 12}}
            source={require('../../../assets/images/icons/lock.png')}
          />
          <TextInput
            ref={inputPassword}
            value={password}
            placeholder="Create your password"
            autoCapitalize={'none'}
            secureTextEntry={true}
            returnKeyType="send"
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => onSignUp()}
          />
        </View>

        <View style={{paddingTop: 40,backgroundColor: '#fff', borderRadius: 16}}>
          <Button
            // onPress={() => onSubmit()}
            onPress={() => onSignUp()}
            color="#6379F4"
            mode="contained"
            disabled={loading}
            loading={loading}
              >
          
            Sign Up
          </Button>
        </View>

        <View style={{paddingTop: 30}}>
          <Text style={{textAlign: 'center'}}>
            Already have an account? Let’s
            <TouchableOpacity>
            <Text style={{color: 'blue'}} 
            onPress={() => props.navigation.navigate("Login")}>
              {' '}
              Login
            </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
});
