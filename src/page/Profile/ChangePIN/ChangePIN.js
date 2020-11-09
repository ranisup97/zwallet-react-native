import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image, TextInput } from 'react-native'
import { Button, IconButton } from 'react-native-paper'

const ChangePIN = () => {
    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <Image style={{marginTop: 20, marginLeft: 20 }} source={require('../../../assets/images/icons/arrow-left.png')} />
                <Text style={{marginTop: 20,marginLeft: 20, fontSize: 20}}>Change PIN</Text>
                </View>
                <Text style={{padding: 15, color: 'grey', textAlign:'justify', paddingTop: 40}}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</Text>
                
                <View style={{flexDirection:'row', justifyContent:'center', paddingTop: 50, padding:15}}>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>

                </View>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>
                    

                </View>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>

                </View>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>

                </View>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>

                </View>
                <View style={styles.TextInput}>
                    <TextInput
                    textAlign={'center'}
                    fontSize= {30}
                    placeholder='...'/>

                </View>
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>

                <View style={{backgroundColor: '#E7E3E1', borderRadius: 15, marginTop: '70%',width: '70%'}}>
                    <Button
                            // onPress={() => onSubmitPIN()}
                            // disabled={loadPIN}
                            autoCapitalize='none'
                            // loading={loadPIN}
                            color='grey'
                        ><Text>Continue</Text>
                        
                        </Button>
                        </View>
                </View>
        </ScrollView>
    )
}

export default ChangePIN

const styles = StyleSheet.create({
    TextInput:{
        
        borderColor:'grey',
        borderWidth:1,
        width: 50,
        height: 60,
        borderRadius: 16
    }
})
