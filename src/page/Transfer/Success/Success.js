import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TextInput } from 'react-native'
import {Button} from 'react-native-paper'

const Success = (props) => {
    const [home, setHome] = React.useState(false);

    

        const onHome = () => {
            setHome(true);
            setTimeout(() => {
              props.navigation.navigate('Home');
              setHome(false);
            }, 1000);
            };
    return (
        <ScrollView>
            <View style={{alignItems:'center'}} >
                <Image style={{marginTop: 20, marginLeft: 20 ,padding: 30}} source={require('../../../assets/images/icons/success.png')} />
                
            </View>
            <Text style={{marginTop: 20,textAlign:'center', fontSize: 15}}>Transfer Success</Text>

            
            

            
            
            <Text style={{padding:15, paddingTop: 40, color:'black'}}>Details</Text>
            <View style={{paddingTop: 10, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 16, paddingBottom: 20}}>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 10, marginTop: 10, marginLeft: 10, color:'grey'}}>Amount</Text>
                <Text style={{marginLeft: 10, fontSize: 16, }}>Rp100.000</Text>
                </View>
            </View>

            <View style={{paddingTop: 10, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 16, paddingBottom: 20}}>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 10, marginTop: 10, marginLeft: 10, color:'grey'}}>Balance Left</Text>
                <Text style={{marginLeft: 10, fontSize: 16, }}>Rp20.000</Text>
                </View>
            </View>

            <View style={{paddingTop: 10, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 16, paddingBottom: 20}}>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 10, marginTop: 10, marginLeft: 10, color:'grey'}}>Date And Time</Text>
                <Text style={{marginLeft: 10, fontSize: 16, }}>Nov 09, 2020 - 12.20</Text>
                </View>
            </View>

            <View style={{paddingTop: 10, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 16, paddingBottom: 20}}>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 10, marginTop: 10, marginLeft: 10, color:'grey'}}>Notes</Text>
                <Text style={{marginLeft: 10, fontSize: 16, }}>For Buying Some Socks</Text>
                </View>
            </View>
            <Text style={{padding:15, paddingTop: 40, color:'black'}}>Transfer to</Text>

            <View style={{paddingTop: 20, flexDirection: 'row', backgroundColor: '#fff',
                marginTop: 15, borderRadius: 16, paddingBottom: 20}}>
                <Image source = {require('../../../assets/images/jessica.png')} style={{marginLeft: 10}}/>
                <View tyle={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>Samuel Suhi</Text>
                <Text style={{marginLeft: 10}}>0895411829199</Text>
                </View>
            </View>
            

            

        

        <View style={{alignItems:'center'}}>

        <View style={{backgroundColor: '#6379F4', borderRadius: 10, marginTop: '20%',width: '70%'}}>
                    <Button
                            // onPress={() => onSubmitPIN()}
                            // disabled={loadPIN}
                            autoCapitalize='none'
                            // loading={loadPIN}
                            color='white'
                            value={home}
                            onPress={() => onHome()}
                            
                        ><Text>back to home</Text>
                        
                        </Button>
         </View>
         </View>
            
        </ScrollView>
    )
}

export default Success

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
