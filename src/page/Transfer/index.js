import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import responsiveFontSize from 'react-native-responsive-dimensions'

const Transfer = (props) => {
    
    const [amount, setAmount] = React.useState(false);

    

        const onAmount = () => {
            setAmount(true);
            setTimeout(() => {
              props.navigation.navigate('InputAmount');
              setAmount(false);
            }, 1000);
            };
    return (
        <ScrollView style={{backgroundColor: '#F8F9FF', flex: 3}}>
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Find Receiver</Text>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: '#E7E3E1', borderRadius: 20, marginTop: 30}}>
            <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../assets/images/icons/search.png')} />
                
                <TextInput style={{marginTop: 8,marginLeft: 10}}
                    placeholder="Search"
                    autoCapitalize={'none'}
                    returnKeyType="send"
                    // returnKeyLabel='Masuk'
                    onChangeText={(text) => text}
                    // onSubmitEditing={() => onSubmit()}
                />

            </View>

            <View style={{padding: 15}}>
                <Text style={{fontWeight: 'bold'}}>All Contacts</Text>
                <Text>17 Contact Found</Text>
            </View>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 25, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>

                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}
                value={amount}
                onPress={() => onAmount()}
                >Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            
            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 20, borderRadius: 15, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            
            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 20, borderRadius: 15, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            
            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 20, borderRadius: 15, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            
            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 20, borderRadius: 15, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 20, borderRadius: 15, paddingBottom: 20}}>
                <Image source = {require('../../assets/images/momo.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>Transfer</Text>
                </View>
                <Text style={{color: '#1EC15F', marginTop: 20,marginLeft: '30%'}}>+Rp50.000</Text>
            </View>
            
        </ScrollView>
    )
}

export default Transfer

const styles = StyleSheet.create({})
