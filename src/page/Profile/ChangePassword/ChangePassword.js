import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../../redux/actions/Update';

const ChangePassword = (props) => {
  const inputCurrentPassword = React.useRef();
  const inputNewPassword = React.useRef();
  const inputReapetPassword = React.useRef();
  const [currentPassword, setCurrentPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [reapetPassword, setReapetPassword] = React.useState(null);
  const [hidePassword1, setHidePassword1] = React.useState(true);
  const [hidePassword2, setHidePassword2] = React.useState(true);
  const [hidePassword3, setHidePassword3] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  const onUpdateSubmit = () => {
    if (currentPassword && newPassword && newPassword === reapetPassword) {
      dispatch(
        changePassword({
          id: Auth.data.token.id,
          token: Auth.data.token.token,
          password: reapetPassword,
        }),
        setCurrentPassword(''),
        setNewPassword(''),
        setReapetPassword(''),
      );
    } else {
      ToastAndroid.show(
        `new password & reapet password no match`,
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <View>
          <View>
            <View
              style={{
                position: 'absolute',
                zIndex: 10,
                top: 27,
                left: 5,
              }}>
              {/* <IconButton
                color="#4D4B57"
                icon="arrow-left"
                onPress={() => props.navigation.navigate('Profile')}
              /> */}
              <Image
                style={{marginTop: 10, marginLeft: 10}}
                source={require('../../../assets/images/icons/arrow-left.png')}
                onPress={() => props.navigation.navigate('Profile')}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                left: 55,
                marginTop: 20,
                top: 15,
                fontFamily: 'Nunito-Regular',
              }}>
              <Text
                style={{
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  color: '#4D4B57',
                }}>
                Change Password
              </Text>
            </Text>
            <Text style={styles.txt}>
              You must enter your current password and then type your new
              password twice.
            </Text>
            <View style={styles.inputWrap}>
              <View style={styles.inputItem}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: 3,
                    left: -0.1,
                  }}>
                  <Image
                    source={require('../../../assets/images/icons/lock.png')}
                    style={{marginTop: 10}}
                  />
                </View>
                <TextInput
                  style={{paddingLeft: 35, fontFamily: 'Nunito-Regular'}}
                  placeholder="Current Password"
                  autoCapitalize={'none'}
                  ref={inputCurrentPassword}
                  value={currentPassword}
                  secureTextEntry={hidePassword1}
                  onChangeText={(e) => setCurrentPassword(e)}
                  onSubmitEditing={() => inputNewPassword.current.focus()}
                  returnKeyType="next"
                />
                <View style={{position: 'absolute', right: 0}}>
                  
                <TouchableOpacity
                  onPress={() => setHidePassword1(!hidePassword1)}
                  >
                  <Image
                  
                    source={require('../../../assets/images/icons/eye-crossed.png')}
                    style={{marginTop: 15}}
                  />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputItem}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: 3,
                    left: -0.1,
                  }}>
                  <Image
                    source={require('../../../assets/images/icons/lock.png')}
                    style={{marginTop: 10}}
                  />
                </View>
                <TextInput
                  style={{paddingLeft: 35, fontFamily: 'Nunito-Regular'}}
                  placeholder="New Password"
                  autoCapitalize={'none'}
                  ref={inputNewPassword}
                  value={newPassword}
                  placeholder="New Password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword2}
                  onChangeText={(e) => setNewPassword(e)}
                  onSubmitEditing={() => inputReapetPassword.current.focus()}
                  returnKeyType="next"
                />
                <View style={{position: 'absolute', right: 0}}>
                  {/* <IconButton
                    onPress={() => setHidePassword2(!hidePassword2)}
                    color="#444"
                    icon={hidePassword2 ? 'eye-outline' : 'eye-off-outline'}
                  /> */}
                  <TouchableOpacity
                  onPress={() => setHidePassword2(!hidePassword2)}
                  >
                  <Image
                    source={require('../../../assets/images/icons/eye-crossed.png')}
                    style={{marginTop: 15}}
                  />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputItem}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: 3,
                    left: -0.1,
                  }}>
                  <Image
                    source={require('../../../assets/images/icons/lock.png')}
                    style={{marginTop: 10}}
                  />
                </View>
                <TextInput
                  style={{paddingLeft: 35, fontFamily: 'Nunito-Regular'}}
                  ref={inputReapetPassword}
                  value={reapetPassword}
                  placeholder="Repeat Password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword3}
                  onChangeText={(e) => setReapetPassword(e)}
                  onSubmitEditing={() => onUpdateSubmit()}
                  returnKeyType="send"
                />
                <View style={{position: 'absolute', right: 0}}>
                  {/* <IconButton
                    onPress={() => setHidePassword3(!hidePassword3)}
                    color="#444"
                    icon={hidePassword3 ? 'eye-outline' : 'eye-off-outline'}
                  /> */}

                <TouchableOpacity
                onPress={() => setHidePassword3(!hidePassword3)}
                >
                <Image
                  
                  source={require('../../../assets/images/icons/eye-crossed.png')}
                  style={{marginTop: 15}}
                />
                </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnSubmit}>
          <View style={{padding: 6}}>
            <Button
              style={{
                borderRadius: 12,
                padding: 6,
                backgroundColor: '#6379F4',
                
              }}
              mode="contained"
              onPress={() => onUpdateSubmit()}
              //   onPress={() => props.navigation.navigate("PersonalInformation")}
            >
              Change Password
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFF',
  },
  zwallet: {
    textAlign: 'center',
    fontSize: 26,
    color: '#6379F4',
    fontWeight: 'bold',
    marginTop: 30,
  },
  body: {
    display: 'flex',
  },
  bgwallet: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: 'white',
    height: 390,
    marginTop: 40,
  },
  zapp: {
    textAlign: 'left',
    fontSize: 24,
    color: '#3A3D42',
    fontWeight: 'bold',
  },
  txt: {
    fontFamily: 'Nunito-Regular',
    color: 'rgba(58, 61, 66, 0.6)',
    marginTop: 40,
    padding: 20,

    fontStyle: 'normal',
    textAlign: 'left',
  },
  inputWrap: {
    padding: 20,
  },
  inputItem: {
    fontFamily: 'Nunito-Regular',
    padding: 5,
    marginBottom: 5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    borderBottomWidth: 2,
    marginVertical: 5,
    borderRadius: 5,
  },
  forgot: {
    fontStyle: 'normal',
    color: '#3A3D42',
    color: 'rgba(58, 61, 66, 0.6)',
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 10,
    right: 25,
  },
  btnSubmit: {
    marginTop: 90,
    padding: 15,
    backgroundColor: '#fff',
  },
  submited: {
    shadowColor: 'rgba(100, 87, 87, 0.05)',
    borderRadius: 12,
  },
});
export default ChangePassword;
