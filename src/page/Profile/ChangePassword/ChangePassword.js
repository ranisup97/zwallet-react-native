import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput,ToastAndroid } from 'react-native'
import {Button, IconButton} from 'react-native-paper';

const ChangePassword = (props) => {

    const inputPassword = React.useRef()
    const [password, setPassword] = React.useState(null);
    const [passwordRepeat, setPasswordRepeat] = React.useState(null);
    const [passwordNew, setPasswordNew] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          ToastAndroid.show(
            `Pasword has change`,
            ToastAndroid.SHORT,
          );
          props.navigation.navigate('Profile');
          setLoading(false);
        }, 3000);
        };
    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 3}}>
        <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Change Password</Text>
        </View>
        <View>
            <Text style={{padding: 15, color: '#7A7886', marginTop: 20}}>
            You must enter your current password and then type your new password twice.
            </Text>
        </View>       

        <View style={styles.inputItem}>
            <Image source={require('../../../assets/images/icons/lock.png')} style={{marginTop: 10}}/>
                <TextInput
                    ref={inputPassword}
                    value={password}
                    placeholder="Current Password"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    // returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
        </View>
        <View style={styles.inputItem}>
            <Image source={require('../../../assets/images/icons/lock.png')} style={{marginTop: 10}}/>
                <TextInput
                    ref={inputPassword}
                    value={passwordRepeat}
                    placeholder="New Password"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    // returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => setPasswordRepeat(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
        </View>

        <View style={styles.inputItem}>
            <Image source={require('../../../assets/images/icons/lock.png')} style={{marginTop: 10}}/>
                <TextInput
                    ref={inputPassword}
                    value={passwordNew}
                    placeholder="Repeat Password"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    // returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => setPasswordNew(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
        </View>

        <View style={{backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 40, width: '75%', marginLeft: 40}}>
                    <Button
                            onPress={() => onSubmit()}
                            disabled={loading}
                            autoCapitalize='none'
                            loading={loading}
                            color='grey'
                        ><Text>Change Password</Text>
                        
                        </Button>
                        </View>

    


    </ScrollView>
    
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    inputItem: {
        flexDirection: 'row',
        padding: 5,
        // borderWidth: 1,
        borderColor: '#333',
        marginVertical: 5,
        borderRadius: 5,
        marginTop: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})
