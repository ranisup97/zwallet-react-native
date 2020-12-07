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
  const [checked, setChecked] = React.useState(false);
  

  const {message} = props;
  const [exitApp, setExitApp] = React.useState(0);
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();

  const submitRegister = () => {
    Keyboard.dismiss();
    
    setLoading(true);
    dispatch(
      AuthSignUp({
        firstName: firstName,
        email: email,
        password: password,
      }),
      props.navigation.pop()
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

  
  return (
    <ScrollView>
      <View style={{padding: 70}}>
        <Text style={{textAlign: 'center', fontSize: 25, color: '#6379F4', fontWeight: 'bold'}}>
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

        <View style={{padding: 15}}>
        <View style={styles.inputItem}>
          <Image
            source={require('../../../assets/images/icons/person.png')}
          />
          <TextInput
          style={{width:'100%', marginLeft: 10}}
            value={firstName}
            placeholder="Enter your firstName"
            autoCapitalize={'none'}
            returnKeyType="next"
            onChangeText={(text) => setfirstName(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
          />
        </View>
        </View>

        <View style={{padding: 15}}>
        <View style={styles.inputItem}>
          <Image
            source={require('../../../assets/images/icons/mail.png')}
          />
          <TextInput
          
          style={{width:'100%', marginLeft: 10}}
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
        </View>

        <View style={{padding: 15}}>
        <View style={styles.inputItem}>
          <Image
            source={require('../../../assets/images/icons/lock.png')}
          />
          <TextInput
          
          style={{width:'100%', marginLeft: 10}}
            ref={inputPassword}
            value={password}
            placeholder="Create your password"
            autoCapitalize={'none'}
            returnKeyType="send"
            secureTextEntry={hidePassword}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => submitRegister()}
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


        
        <View style={{paddingTop: 15, borderRadius: 16}}>
          <TouchableOpacity
          style={{backgroundColor: '#6379F4', padding: 12, marginLeft: 20, marginRight: 20, borderRadius: 12}}
            disabled={checked || loading}
            loading={checked || loading}
            onPress={submitRegister}
              ><Text style={{textAlign:'center', color: '#fff', fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View 
              style={{flexDirection: 'row',left: '8%',padding: 40, alignContent: 'center', textAlign: 'center'}}>
                <Text style={{ color: 'black', textAlign: 'center'}}>
                Already have an account? Let's 
                </Text>
                <TouchableOpacity>
                <Text
                  style={{color: '#6379F4', textAlign: 'center'}}
                  onPress={() => props.navigation.navigate('Login')}> Login
                </Text>
                </TouchableOpacity>
                </View>

      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputItem: {
    backgroundColor: '#fff',
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6379F4',
    overflow: 'hidden',
  },
});
