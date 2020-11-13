import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'

const History = () => {
    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>History</Text>
            </View>
            <Text style={{padding:15, paddingTop: 40, color:'grey'}}>This Week</Text>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            <Text style={{padding:15, paddingTop: 40, color:'grey'}}>This Month</Text>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
        </ScrollView>
    )
}

export default History

const styles = StyleSheet.create({})
