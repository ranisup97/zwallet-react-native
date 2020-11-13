import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import {Button, IconButton} from 'react-native-paper';
import { AuthLogout}  from '../../redux/actions/Auth'
import { GetUsersById}  from '../../redux/actions/Users'

import {useDispatch, useSelector} from 'react-redux';
const Profile = (props) => {
    // const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const [loadPIN, setLoadPIN] = React.useState(false);
    const [loadNotif, setLoadNotif] = React.useState(false);
    // const [logout, setLogout]= React.useState(false);
    const dispatch = useDispatch()
  console.log(props)

  const {data} = useSelector((s)=> s.Users)
  const Auth = useSelector((s)=> s.Auth)
  React.useEffect(() => {
    dispatch(GetUsersById({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }))
    console.log(data, 'ha')
  }, []);

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          props.navigation.navigate('PersonalInformation');
          setLoading(false);
        }, 1000);
        };

    const onSubmitPassword = () => {
        setLoad(true);
        setTimeout(() => {
        props.navigation.navigate('ChangePassword');
        setLoad(false);
        }, 1000);
    };

    const onSubmitPIN = () => {
        setLoadPIN(true);
        setTimeout(() => {
        props.navigation.navigate('ChangePIN');
        setLoadPIN(false);
        }, 1000);
    };
            
    const onSubmitNotif = () => {
        setLoadNotif(true);
        setTimeout(() => {
        props.navigation.navigate('Notification');
        setLoadNotif(false);
        }, 1000);
    };

    // const onLogout = () => {
    //     setLogout(true);
    //     setTimeout(() => {
    //     props.navigation.navigate('Login');
    //     setLogout(false);
    //     }, 1000);
    // };
    
    return (
        <ScrollView style={{backgroundColor: '#F8F9FF', flex:3}}>
            <View>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../assets/images/icons/arrow-left.png')} />
          
            </View >
            <View style={{alignItems: 'center', padding: 20}}>
                <Image source = {require('../../assets/images/michael.png')}/>
                
                <View style={{padding: 15, flexDirection: 'row' }}>
                    <Image source = {require('../../assets/images/icons/edit-2.png')} style={{marginTop: 5, marginRight:5}}/>
                    <Text >Edit</Text>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{data.firstName} {data.lastName} </Text>
                <Text>{`+62 ${data.phone}`}</Text>

                <View style={{flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 30}}>
                    <Button
                        onPress={() => onSubmit()}
                        disabled={loading}
                        autoCapitalize={'none'}
                        loading={loading}
                        color='grey'
                    ><Text>Personal Information</Text>
                        
                        </Button>
                </View>

                <View style={{paddingRight: 40, flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 10}}>
                    <Button
                            onPress={() => onSubmitPassword()}
                            disabled={load}
                            autoCapitalize='none'
                            loading={load}
                            color='grey'
                        ><Text style={{textAlign: 'left'}}>Change Password</Text>
                        
                        </Button>
                         </View>

                <View style={{paddingRight: 95, flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 10}}>
                    <Button
                            onPress={() => onSubmitPIN()}
                            disabled={loadPIN}
                            autoCapitalize='none'
                            loading={loadPIN}
                            color='grey'
                        ><Text>Change PIN</Text>
                        
                        </Button>
                        </View>

                <View style={{paddingRight: 85,flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 10}}>
                    <Button
                            onPress={() => onSubmitNotif()}
                            disabled={loadNotif}
                            autoCapitalize='none'
                            loading={loadNotif}
                            color='grey'
                        ><Text>Notification</Text>
                        
                        </Button>
                        </View>

                <View style={{paddingRight: 130,flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 10, marginTop: 10}}>
                    <Button
                            
                            onPress={() => dispatch(AuthLogout())}

                            // disabled={logout}
                            // loading={logout}
                            textTransform= 'lowercase'
                            color='grey'
                        ><Text>Logout</Text>
                        
                        </Button>   
                        </View>
                
            </View>
            
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})
