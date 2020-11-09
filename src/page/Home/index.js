import React from 'react'
import { StyleSheet,Text, View, ScrollView, Image } from 'react-native'
import {Button, IconButton} from 'react-native-paper';

const Home = (props) => {
  const [loading, setLoading] = React.useState(false);
  
  const [load, setLoad] = React.useState(false);
  const [history, setHistory] = React.useState();

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
  return (
    <ScrollView style={{flex: 3, backgroundColor: '#F8F9FF'}}>
      <View style={{paddingTop: 20, flexDirection: 'row'}}>
        <Image source = {require('../../assets/images/michael.png')}/>
        <View tyle={{marginTop: 10}}>
        <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>Hello,</Text>
        <Text style={{fontWeight: 'bold', fontSize: 19, marginLeft: 10}}>Robert  Chandler</Text>
        </View>
        <Image style={{marginTop: 30, marginLeft: '30%'}} source={require('../../assets/images/icons/bell.png')} />
        
      </View>
    <View style={styles.box} >
     
      <Text style={{color: '#fff'}}>Balance</Text>
      <Text style={{
        color: '#fff', fontWeight:'bold',fontSize: 30,
      }}>120.000</Text>
      <Text style={{
        color: '#fff'
      }}>0895411829199</Text>

    

    </View>

    <View style={{flexDirection: 'row', marginTop: 20}}>
    <View style={styles.buttonTransfer}>
    <Button
    onPress={() => onSubmit()}
    disabled={loading}
    autoCapitalize={'none'}
    loading={loading}
    color= "#514F5B">
        <Image source={require('../../assets/images/icons/arrow-up.png')} />
        Transfer</Button>
            
      </View>
      <View style={styles.buttonTopup}>
      <Button
      onPress={() => onSubmitTopup()}
      disabled={load}
      autoCapitalize={'none'}
      loading={load}
    color= "#514F5B">
        <Image source={require('../../assets/images/icons/plus.png')} />
        Top Up</Button>
      </View>

      </View>
      <View style={{flexDirection: 'row'}}>
      <View>
        <Text style={{marginTop: 20,marginLeft: 10 }}>
          Transaction History
        </Text>
        </View>
        <View>
        <Text style={{marginTop: 20, color: '#6379F4', marginLeft: '65%'}}
        value={history}
        onPress={() => onHistory()}
        >
          See All
        </Text>
        </View>
      </View>

      <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
        marginTop: 20, borderRadius: 25, paddingBottom: 20}}>
        <Image source = {require('../../assets/images/michael.png')} style={{marginLeft: 10}}/>
        <View tyle={{marginTop: 10}}>
        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
        <Text style={{marginLeft: 10}}>Transfer</Text>
        </View>
        <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
      </View>

      <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
        marginTop: 20, borderRadius: 25, paddingBottom: 20}}>
        <Image source = {require('../../assets/images/michael.png')} style={{marginLeft: 10}}/>
        <View tyle={{marginTop: 10}}>
        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
        <Text style={{marginLeft: 10}}>Transfer</Text>
        </View>
        <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
      </View>

      <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
        marginTop: 20, borderRadius: 25, paddingBottom: 20}}>
        <Image source = {require('../../assets/images/michael.png')} style={{marginLeft: 10}}/>
        <View tyle={{marginTop: 10}}>
        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
        <Text style={{marginLeft: 10}}>Transfer</Text>
        </View>
        <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
      </View>

      <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
        marginTop: 20, borderRadius: 25, paddingBottom: 20}}>
        <Image source = {require('../../assets/images/michael.png')} style={{marginLeft: 10}}/>
        <View tyle={{marginTop: 10}}>
        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
        <Text style={{marginLeft: 10}}>Transfer</Text>
        </View>
        <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
      </View>
      
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  box:{
    marginTop: '10%',
    padding : '8%',
    backgroundColor: '#6379F4',
    borderRadius: 25,
  },
  buttonTransfer:{
    backgroundColor: '#E7E3E1',
    width: '45%',
    // height: '30%',
    textTransform:'lowercase',
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

  }
})
