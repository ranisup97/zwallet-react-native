import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import Axios from 'axios';
import {GetUsersById} from '../../redux/actions/Users';
import {useDispatch, useSelector} from 'react-redux';

import { GetTransfer } from "../../redux/actions/Transfer";
import { io } from 'socket.io-client'

const Home = (props) => {
  const dispatch = useDispatch();
  // console.log(props)
  const [loading, setLoading] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [history, setHistory] = React.useState();
  const [profile, setProfile] = React.useState();
  const {data} = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const [balance, setBalance] = React.useState('');
  const [itemId, setItemId] = React.useState(46);
  const socket = io('http://192.168.100.8:8000', {query: {itemId}});

  


  React.useEffect(() => {
    dispatch(
      GetUsersById({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
      }),
    );

    socket.emit('initial-user', 7);
    socket.on('get-data', (data) => {
      setBalance(data);
    });
 
    console.log(data, 'success get by id');
  }, []);

  React.useEffect(() => {
    return () => {
      socket.off('get-data');
    };
  }, []);


  const {dataTransfer} = useSelector((s)=> s.Transfer)
  React.useEffect(() => {
    dispatch(GetTransfer({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
    }))
    
    console.log(data, 'success get data transfer')
  }, []);

  const onHistory = () => {
    setHistory(true);
    setTimeout(() => {
      props.navigation.navigate('History');
      setHistory(false);
    }, 1000);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      props.navigation.navigate('Transfer');
      setLoading(false);
    }, 1000);
  };

  const onSubmitTopup = () => {
    setLoad(true);
    setTimeout(() => {
      props.navigation.navigate('Topup');
      setLoad(false);
    }, 1000);
  };

  const onProfile = () => {
    setProfile(true);
    setTimeout(() => {
      props.navigation.navigate('Profile');
      setProfile(false);
    }, 1000);
  };

  console.log(`http://192.168.100.4:8000/images/${data.photo}`)
  return (
    <>
      <ScrollView>
        <View style={{paddingTop: 20, flexDirection: 'row'}}>
          {data ? (
            <Image
              source={{uri: `http://192.168.100.4:8000/images/${data.photo}`}}
              style={styles.image}
            />
          ) : (
            <Image
              source={{uri: `http://192.168.100.4:8000/images/${data.photo}`}}
              style={styles.image}
            />
          )}

          {/* <Image source = {{uri: `http://192.168.43.151:8000/${data.photo}`}} style={styles.image}/> */}
          <View tyle={{marginTop: 10}}>
            <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>
              Hello,
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 19,
                marginLeft: 10,
                color: 'black',
              }}
              onPress={() => onProfile()}
              value={profile}>
              {data.firstName} {data.lastName}
            </Text>
          </View>
          <Image
            style={{marginTop: 30, marginLeft: '40%'}}
            source={require('../../assets/images/icons/bell.png')}
          />
        </View>

        <View style={styles.box}>
          <Text style={{color: '#fff'}}>Balance</Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            {data.balance}
          </Text>
          <Text
            style={{
              color: '#fff',
            }}>{`+62 ${data.phone}`}</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={styles.buttonTransfer}>
            <Button
              onPress={() => onSubmit()}
              disabled={loading}
              autoCapitalize={'none'}
              loading={loading}
              color="#514F5B">
              <Image
                source={require('../../assets/images/icons/arrow-up.png')}
              />
              Transfer
            </Button>
          </View>
          <View style={styles.buttonTopup}>
            <Button
              onPress={() => onSubmitTopup()}
              disabled={load}
              autoCapitalize={'none'}
              loading={load}
              color="#514F5B">
              <Image source={require('../../assets/images/icons/plus.png')} />
              Top Up
            </Button>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{marginTop: 20, marginLeft: 10}}>
              Transaction History
            </Text>
          </View>
          <View>
            <Text
              style={{marginTop: 20, color: '#6379F4', marginLeft: '65%'}}
              value={history}
              onPress={() => onHistory()}>
              See All
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 25,
            paddingBottom: 20,
          }}>
          <Image
            source={require('../../assets/images/jessica.png')}
            style={{marginLeft: 10}}
          />
          <View tyle={{marginTop: 10}}>
            <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
              Samuel
            </Text>
            <Text style={{marginLeft: 10}}>Transfer</Text>
          </View>
          <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
            +Rp50.000
          </Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 25,
            paddingBottom: 20,
          }}>
          <Image
            source={require('../../assets/images/jessica.png')}
            style={{marginLeft: 10}}
          />
          <View tyle={{marginTop: 10}}>
            <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
              Samuel Suhi
            </Text>
            <Text style={{marginLeft: 10}}>Transfer</Text>
          </View>
          <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
            +Rp50.000
          </Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 25,
            paddingBottom: 20,
          }}>
          <Image
            source={require('../../assets/images/jessica.png')}
            style={{marginLeft: 10}}
          />
          <View tyle={{marginTop: 10}}>
            <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
              Samuel Suhi
            </Text>
            <Text style={{marginLeft: 10}}>Transfer</Text>
          </View>
          <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
            +Rp50.000
          </Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 25,
            paddingBottom: 20,
          }}>
          <Image
            source={require('../../assets/images/jessica.png')}
            style={{marginLeft: 10}}
          />
          <View tyle={{marginTop: 10}}>
            <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
              Samuel Suhi
            </Text>
            <Text style={{marginLeft: 10}}>Transfer</Text>
          </View>
          <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
            +Rp50.000
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    marginTop: '10%',
    padding: '8%',
    backgroundColor: '#6379F4',
    borderRadius: 25,
  },
  image: {width: 50, height: 50},
  buttonTransfer: {
    backgroundColor: '#E7E3E1',
    width: '45%',
    // height: '30%',
    textTransform: 'lowercase',
    borderRadius: 15,
    padding: 2,
    marginTop: 3,
    marginLeft: 10,
  },
  buttonTopup: {
    backgroundColor: '#E7E3E1',
    width: '45%',
    borderRadius: 15,
    padding: 2,
    marginTop: 2,
    marginLeft: 10,
  },
});
