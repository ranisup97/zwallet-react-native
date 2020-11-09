import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Splash, Profile, Transfer, Topup} from '../page'
import Login from '../page/Auth/Login'
import SignUp from '../page/Auth/SignUp'
import PersonalInformation from '../page/Profile/PersonalInformation/PersonalInformation'
import ChangePassword from '../page/Profile/ChangePassword/ChangePassword'
import ChangePIN from '../page/Profile/ChangePIN/ChangePIN'
import Notification from '../page/Profile/Notification/Notification'
import History from '../page/Transfer/History/History'

// import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Auth = useSelector((s)=> s.Auth)

const MainApp = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        
        <Tab.Screen name="Transfer" component={Transfer} />
        <Tab.Screen name="Topup" component={Topup} />
        <Tab.Screen name="Profile" component={Profile} />
        
        {/* <Tab.Screen name="Topup" component={Topup} /> */}
        
        
        
      </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{headerShown: false}} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}} />
        <Stack.Screen name="ChangePIN" component={ChangePIN} options={{headerShown: false}} />
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="History" component={History} options={{headerShown: false}} />
       
        
        {/* <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Transfer" component={Transfer} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
