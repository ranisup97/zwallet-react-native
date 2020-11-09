import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

const PersonalInformation = () => {
    return (
        <ScrollView >
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Personal Information</Text>
            </View>
            <View style={{padding: 15, marginTop:15}}>
                <Text style={{textAlign: 'justify', color: '#7A7886'}}>
                    We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
                </Text>
            </View>
            <View style={{padding:15, backgroundColor: '#fff', borderRadius: 16}}>
                <Text style={{color: '#7A7886'}}>
                    First Name
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    Robert
                </Text>
            </View>

            <View style={{padding:15, backgroundColor: '#fff', borderRadius: 16, marginTop: 20}}>
                <Text style={{color: '#7A7886'}}>
                    Last Name
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    Chandler
                </Text>
            </View>

            <View style={{padding:15, backgroundColor: '#fff', borderRadius: 16, marginTop: 20}}>
                <Text style={{color: '#7A7886'}}>
                    Verified E-mail
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                pewdiepie1@gmail.com
                </Text>
            </View>

            <View style={{padding:15, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 16, marginTop: 20}}>
                <View>
                <Text style={{color: '#7A7886'}}>
                    Verified E-mail
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                pewdiepie1@gmail.com
                </Text>
                </View>
                <View style={{marginLeft: '40%'}}>
                <Text style={{color: '#6379F4'}}>Manage</Text>
                </View>
            </View>

        


        </ScrollView>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({})
