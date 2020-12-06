import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const Topup = () => {

  
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginTop: 20, marginLeft: 20}}
          source={require('../../assets/images/icons/arrow-left.png')}
        />
        <Text style={{marginTop: 20, marginLeft: 20, fontSize: 20}}>
          Top Up
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          marginTop: 50,
          borderRadius: 16,
        }}>
        <Image
          style={{marginTop: 8, marginLeft: 20}}
          source={require('../../assets/images/icons/logo-topup.png')}
        />
        <View>
          <Text style={{marginTop: 10, marginLeft: 20, color: '#7A7886'}}>
            Virtual Account Number
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            2389 081393877946
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            marginTop: 10,
            padding: 20,
            color: '#7A7886',
            textAlign: 'center',
          }}>
          We provide you virtual account number for top up via nearest ATM.
        </Text>
      </View>

      <View>
        <Text style={{marginTop: 10, padding: 20}}>Ho To Top Up</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          1
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Go to the nearest ATM or you can use E-Banking.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          2
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Type your security number on the ATM or E-Banking.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          3
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Select “Transfer” in the menu
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          4
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Type the virtual account number that we provide you at the top.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          5
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Type the amount of the money you want to top up.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          6
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Read the summary details
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          7
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          Press Transfer / Top Up
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 20,
            fontSize: 20,
            color: '#6379F4',
          }}>
          8
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: '#7A7886',
          }}>
          You can see your money in Zwallet within 3 hours.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Topup;

const styles = StyleSheet.create({});
