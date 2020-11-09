import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image, TextInput } from 'react-native'
import { Button, IconButton } from 'react-native-paper'

const Notification = () => {
    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Notification</Text>
                </View>
                <Text style={{padding: 15, color: 'grey', textAlign:'justify', paddingTop: 40}}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</Text>
                
                <Text style={{padding: 15, color: 'grey', textAlign:'justify', paddingTop: 40}}>Today</Text>
                
                <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                    marginTop: 15, borderRadius: 20, paddingBottom: 20}}>
                    <Image source = {require('../../../assets/images/icons/arrow-down-green.png')} style={{marginLeft: 10}}/>
                    <View tyle={{marginTop: 10}}>
                    <Text style={{fontSize: 10, marginLeft: 10}}>Transfered from Joshua Lee</Text>
                    <Text style={{marginLeft: 10, fontSize: 16, fontWeight:'bold'}}>Rp220.000</Text>
                    </View>
                </View>

                <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                    marginTop: 15, borderRadius: 20, paddingBottom: 20}}>
                    <Image source = {require('../../../assets/images/icons/arrow-up-red.png')} style={{marginLeft: 10}}/>
                    <View tyle={{marginTop: 10}}>
                    <Text style={{fontSize: 10, marginLeft: 10}}>Transfered from Joshua Lee</Text>
                    <Text style={{marginLeft: 10, fontSize: 16, fontWeight:'bold'}}>Rp220.000</Text>
                    </View>
                </View>

                <Text style={{padding: 15, color: 'grey', textAlign:'justify', paddingTop: 40}}>This Week</Text>

                <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                    marginTop: 15, borderRadius: 20, paddingBottom: 20}}>
                    <Image source = {require('../../../assets/images/icons/arrow-up-red.png')} style={{marginLeft: 10}}/>
                    <View tyle={{marginTop: 10}}>
                    <Text style={{fontSize: 10, marginLeft: 10}}>Transfered from Joshua Lee</Text>
                    <Text style={{marginLeft: 10, fontSize: 16, fontWeight:'bold'}}>Rp220.000</Text>
                    </View>
                </View>

                <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                    marginTop: 15, borderRadius: 20, paddingBottom: 20}}>
                    <Image source = {require('../../../assets/images/icons/arrow-down-green.png')} style={{marginLeft: 10}}/>
                    <View tyle={{marginTop: 10}}>
                    <Text style={{fontSize: 10, marginLeft: 10}}>Transfered from Joshua Lee</Text>
                    <Text style={{marginLeft: 10, fontSize: 16, fontWeight:'bold'}}>Rp220.000</Text>
                    </View>
                </View>

                <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                    marginTop: 15, borderRadius: 20, paddingBottom: 20}}>
                    <Image source = {require('../../../assets/images/icons/arrow-up-red.png')} style={{marginLeft: 10}}/>
                    <View tyle={{marginTop: 10}}>
                    <Text style={{fontSize: 10, marginLeft: 10}}>Transfered from Joshua Lee</Text>
                    <Text style={{marginLeft: 10, fontSize: 16, fontWeight:'bold'}}>Rp220.000</Text>
                    </View>
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>

                
                </View>
        </ScrollView>
    )
}

export default Notification

const styles = StyleSheet.create({
    TextInput:{
        
        borderColor:'grey',
        borderWidth:1,
        width: 50,
        height: 60,
        borderRadius: 16
    }
})
