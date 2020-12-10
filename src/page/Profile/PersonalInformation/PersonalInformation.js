import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { GetUsersById}  from '../../../redux/actions/Users'

import {useDispatch, useSelector} from 'react-redux';

const PersonalInformation = (props) => {
  const dispatch = useDispatch()
  console.log(props)

  const {data} = useSelector((s)=> s.Users)
  const Auth = useSelector((s)=> s.Auth)
  React.useEffect(() => {
    dispatch(GetUsersById({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }))
    console.log(data, 'success')
  }, []);
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginTop: 20, marginLeft: 20}}
          source={require('../../../assets/images/icons/arrow-left.png')}
        />
        <Text style={{marginTop: 20, marginLeft: 20, fontSize: 20}}>
          Personal Information
        </Text>
      </View>
      <View style={{padding: 15, marginTop: 15}}>
        <Text style={{textAlign: 'justify', color: '#7A7886'}}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
      </View>
      <View style={{padding: 15, backgroundColor: '#fff', borderRadius: 16}}>
        <Text style={{color: '#7A7886'}}>First Name</Text>
        <Text style={{fontWeight: 'bold'}}>{data.firstName}</Text>
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: '#fff',
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text style={{color: '#7A7886'}}>Last Name</Text>
        <Text style={{fontWeight: 'bold'}}>{data.lastName}</Text>
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: '#fff',
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text style={{color: '#7A7886'}}>Verified E-mail</Text>
        <Text style={{fontWeight: 'bold'}}>{data.email}</Text>
      </View>

      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 16,
          marginTop: 20,
        }}>
        <View>
          <Text style={{color: '#7A7886'}}>Phone Number</Text>
          <Text style={{fontWeight: 'bold'}}>{`+62 ${data.phone}`}</Text>
        </View>
        <View style={{position: 'absolute',right: 0, top: 20, right: 20}}>
          <Text style={{color: '#6379F4'}}>Manage</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({});
