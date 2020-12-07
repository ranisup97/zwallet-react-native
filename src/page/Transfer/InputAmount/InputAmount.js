import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TextInput } from 'react-native'
import {Button} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux';
import { GetTransfer } from "../../../redux/actions/Transfer";
import { GetUsersById } from '../../../redux/actions/Users';

const InputAmount = (props) => {
  const dispatch = useDispatch()
  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s)=> s.Users)

  React.useEffect(() => {
    dispatch(
      GetUsersById({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
      }),
    );
    console.log(data, 'success get by id');
  }, []);

    const [confirm, setConfirm] = React.useState(false);
        const onConfirm = () => {
            setConfirm(true);
            setTimeout(() => {
              props.navigation.navigate('Confirmation');
              setConfirm(false);
            }, 1000);
            };
    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Transfer</Text>
            </View>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>{data.firstName}</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
            </View>
            
            <Text style={{padding:15, paddingTop: 40, color:'black', textAlign:'center'}}>Rp120.000 Available</Text>

            <View style={{alignItems:'center'}}>
            <View >
            <TextInput
                    // ref={inputPassword}
                    // value={password}
                    fontSize={30}

                    placeholder="0.00"
                    padding={20}
                    autoCapitalize={'none'}
                    // returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    // onChangeText={(text) => setPassword(text)}
                    // onSubmitEditing={() => onSubmit()}
                  />
                  </View>
        </View>

        <View style={styles.inputItem}>
            <Image  source={require('../../../assets/images/icons/edit-2.png')} style={{marginTop: 20}}/>
                <TextInput
                    // ref={inputPassword}
                    // value={password}
                    placeholder="Add some notes"
                    autoCapitalize={'none'}
                    // returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    // onChangeText={(text) => setPassword(text)}
                    // onSubmitEditing={() => onSubmit()}
                  />
        </View>

        <View style={{alignItems:'center'}}>

        <View style={{backgroundColor: '#E7E3E1', borderRadius: 15, marginTop: '60%',width: '70%'}}>
                    <Button
                            // onPress={() => onSubmitPIN()}
                            // disabled={loadPIN}
                            autoCapitalize='none'
                            // loading={loadPIN}
                            color='grey'
                            value={confirm}
                            onPress={() => onConfirm()}
                            
                        ><Text>Continue</Text>
                        
                        </Button>
         </View>
         </View>
            
        </ScrollView>
    )
}

export default InputAmount

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
