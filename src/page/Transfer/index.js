// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList
// } from 'react-native';
// import { ScrollView } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// // import { GetAllUser, SearchNameUser, GetUser } from '../../redux/actions/User';
// import Axios from 'axios';

// import {GetUsersById} from '../../redux/actions/Users';
// import { GetTransfer } from "../../redux/actions/Transfer";
// // import { GetUsersById } from '../../..//redux/actions/GetById';

// const style = StyleSheet.create({
// arrowLeft: {
//   width: 30, 
//   height: 30, 
//   marginVertical: 40,
//   marginLeft: 20
// },
// findReciever: {
//   fontSize: 18,
//   fontWeight: '600',
//   marginTop: -68,
//   marginHorizontal: 80
// },
// search: {
//   borderWidth: 1,
//   borderRadius: 15,
//   marginTop: 20,
//   marginLeft: 10,
//   marginRight: 10,
//   backgroundColor: '#ccc',
//   borderColor: 0
// },
// contact: {
//   marginTop: 20,
//   marginLeft: 23,
//   fontSize: 18
// },
// found: {
//   marginLeft: 23,
//   marginTop: 15
// },
// cardContact: {
//   width: '100%',
//   borderRadius: 7,
//   backgroundColor: '#fff',
//   marginTop: 15,
// },
// image: {
//   width: 50, 
//   marginLeft: 20, 
//   height: 50, 
//   marginVertical: 22
// },
// detail: {
//   marginTop: -70,
//   alignItems: 'flex-start',
//   marginHorizontal: 80,
// },
// name: {
//   marginBottom: 9,
  
// }
// });
// const Transfer = (props) => {
// const [name, setName] = React.useState(null)
//   const dispatch = useDispatch()
//   const Auth = useSelector((s)=> s.Auth)
//   console.log(Auth.data.token, 'll')

//   const SearchInput = (query) =>
//     {
//         const headers = { headers: {'auth-token': `bearear ${Auth.data.token.token}`}}  
//         console.log(Auth.data.token.token)
//         Axios.get(`http://192.168.100.4:8000/api/users/search?name=${query}&sortBy=name&sortType=ASC`,headers)
//         .then(res =>{
//             let result = res.data
//             setName(result)
//             console.log('data search: ', result)
//         }).catch(err => {
//           console.log(err)
//         });
//     }

    
//   const renderItem = ({item}) => {
//     return (
//       <View style={style.cardContact}>
//         <TouchableOpacity
//         onPress={() => {
//           dispatch(GetUsersById({token: Auth.data.token.token, id:Auth.data.token.id}, item.phone));
//         }}>
//         <View>
//         <Image 
//         source={require('../../assets/images/momo.png')} 
//         style={style.image}/>
//       </View>
//       <View>
//         <View style={style.detail}>
//           <TouchableOpacity>
//             <Text style={style.name}>{item.name}</Text>
//           </TouchableOpacity>
//           <Text >{item.phone}</Text>
//         </View>
//       </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <>
//       <ScrollView style={{backgroundColor: '#e9eef7'}}>
//         <TouchableOpacity
//           onPress={()=> props.navigation.navigate('Home')}>
//           <Image 
//             source={require('../../assets/images/icons/arrow-left.png')} 
//             style={style.arrowLeft}/>
//         </TouchableOpacity>
//         <Text style={style.findReciever}>Find Reciever</Text>
//         <View>
//           <TextInput          
//             style={style.search}
//             placeholder="  Search Reciever Here"
//             autoCapitalize={'none'}
//             onChangeText={(e) => SearchInput(e)}
//             />
//         </View>


//         <View style={{marginTop: 30}}>
//           <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
//             Quick Access
//           </Text>
//           <View style={{flexDirection: 'row', marginTop: 30}}>
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 backgroundColor: '#fff',
//                 width: 96,
//                 height: 146,
//                 borderRadius: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Image 
//                 source={require('../../assets/images/momo.png')} />
//               <Text
//                 style={{
//                   paddingTop: 10,
//                   fontWeight: 'bold',
//                   color: '#4D4B57',
//                   fontSize: 16,
//                 }}
//                 >
//                 Michi
//               </Text>
//               <Text>-9994</Text>
//             </View>
//             <View
//               style={{
//                 flex: 1,
//                 marginLeft: 10,
//                 flexDirection: 'column',
//                 backgroundColor: '#fff',
//                 width: 96,
//                 height: 146,
//                 borderRadius: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
              
//               <Text
//                 style={{
//                   paddingTop: 10,
//                   fontWeight: 'bold',
//                   color: '#4D4B57',
//                   fontSize: 16,
//                 }}
//                 >
//                 Dodi
//               </Text>
//               <Text>-3561</Text>
//             </View>
//             <View
//               style={{
//                 flex: 1,
//                 marginLeft: 10,
//                 flexDirection: 'column',
//                 backgroundColor: '#fff',
//                 width: 96,
//                 height: 146,
//                 borderRadius: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
              
//               <Text
//                 style={{
//                   paddingTop: 10,
//                   fontWeight: 'bold',
//                   color: '#4D4B57',
//                   fontSize: 16,
//                 }}
//                 >
//                 Rian
//               </Text>
//               <Text>-3822</Text>
//             </View>
//           </View>
//         </View>
//         <Text style={style.contact}>Contact</Text>
//         <Text style={style.found}>Contact Founds</Text>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={name}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index}
//           ListHeaderComponent={() => (
//             <React.Fragment>
//               <View
//         style={{
//           paddingTop: 20,
//           flexDirection: 'row',
//           backgroundColor: '#fff',
//           marginTop: 20,
//           borderRadius: 15,
//           paddingBottom: 20,
//         }}>
//         <Image
//           source={require('../../assets/images/momo.png')}
//           style={{marginLeft: 10}}
//         />
//         <View tyle={{marginTop: 10}}>
//           <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
//             Samuel Suhi
//           </Text>
//           <Text style={{marginLeft: 10}}>Transfer</Text>
//         </View>
//         <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
//           +Rp50.000
//         </Text>
//       </View>

//             </React.Fragment>
//           )}
//         />
//       </ScrollView>
//     </>
  
//   );
// };

// export default Transfer;


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import { GetTransfer } from "../../redux/actions/Transfer";

 import { GetUsersById } from '../../redux/actions/Users';
import Axios from 'axios';
// import responsiveFontSize from 'react-native-responsive-dimensions';

const Transfer = (props) => {
    const dispatch = useDispatch()

  const [amount, setAmount] = React.useState(false);
  const [name, setName] = React.useState(null);
  const Auth = useSelector((s) => s.Auth);

  
  const {data} = useSelector((s)=> s.Transfer)

  React.useEffect(() => {
    dispatch(GetTransfer({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
    }))
    
    console.log(data, 'success')
  }, []);
  

  const onAmount = () => {
    setAmount(true);
    setTimeout(() => {
      props.navigation.navigate('InputAmount');
      setAmount(false);
    }, 1000);
  };

  const SearchTransfer = (query) => {
    const headers = {
      headers: {'auth-token': `bearer ${Auth.data.token.token}`},
    };
    console.log(Auth.data.token.token);
    Axios.get(
      `http://192.168.100.4:8000/api/v1/users/search?firstName=${query}&sortBy=firstName&sortType=ASC`,
      headers,
    )
      .then((res) => {
        let result = res.data;
        setName(result);
        console.log('data: ', result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItem = ({item}) => {
     return (
       <View style={styles.cardContact}>
         <TouchableOpacity
         onPress={() => {
           dispatch(GetUsersById({token: Auth.data.token.token, id:Auth.data.token.id}, item.phone));
         } }>
         <View>
         <Image 
         source={{uri: `http://192.168.100.4:8000/images/${item.photo}`}}
        //  style={styles.image}
         style={styles.image}/>
       </View>
       <View>
         <View style={styles.detail}>
           <TouchableOpacity>
             <Text style={styles.name}>{item.firstName}</Text>
           </TouchableOpacity>
           <Text >{item.phone}</Text>
         </View>
       </View>
         </TouchableOpacity>
       </View>
     );
   };
  


  return (
    <ScrollView style={{backgroundColor: '#F8F9FF', flex: 3}}>
      <View style={{flexDirection: 'row'}}>

      <TouchableOpacity
          onPress={()=> props.navigation.navigate('Home')}>

        <Image
          style={{marginTop: 20, marginLeft: 20}}
          source={require('../../assets/images/icons/arrow-left.png')}
        />
        </TouchableOpacity>
        <Text style={{marginTop: 20, marginLeft: 20, fontSize: 20}}>
          Find Receiver
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E7E3E1',
          borderRadius: 20,
          marginTop: 30,
        }}>
        <Image
          style={{marginTop: 20, marginLeft: 20}}
          source={require('../../assets/images/icons/search.png')}
        />

        <TextInput
          style={{marginTop: 8, marginLeft: 10}}
          placeholder="Search"
          autoCapitalize={'none'}
          returnKeyType="send"

          onChangeText={(name) => SearchTransfer(name)}
        />
      </View>

      <View style={{padding: 15}}>
        <Text style={{fontWeight: 'bold'}}>All Contacts</Text>
        <Text>17 Contact Found</Text>
      </View>

      
      {/* <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 15,
          borderRadius: 25,
          paddingBottom: 20,
        }}>
        <Image
          source={require('../../assets/images/momo.png')}
          style={{marginLeft: 10}}
        />

        <View tyle={{marginTop: 10}}>
          <Text
            style={{fontSize: 16, marginTop: 10, marginLeft: 10}}
            value={amount}
            onPress={() => onAmount()}>
            Samuel
          </Text>
          <Text style={{marginLeft: 10}}>Transfer</Text>
        </View>
        <Text style={{color: '#1EC15F', marginTop: 20, marginLeft: '30%'}}>
          +Rp50.000
        </Text>
      </View> */}

      {/* <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 20,
          borderRadius: 15,
          paddingBottom: 20,
        }}>
        <Image
          source={require('../../assets/images/momo.png')}
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
      </View> */}

      <FlatList
          showsVerticalScrollIndicator={false}
          data={name}
          renderItem={renderItem}
        />

 
      
    </ScrollView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  detail: {
    marginTop: -70,
    alignItems: 'flex-start',
    marginHorizontal: 80,
  },

  cardContact: {
      width: '100%',
      borderRadius: 7,
      backgroundColor: '#fff',
      marginTop: 15,
    },
    image: {
        width: 50, 
        marginLeft: 20, 
        height: 50, 
        marginVertical: 22
      },
      detail: {
          marginTop: -70,
          alignItems: 'flex-start',
          marginHorizontal: 80,
        },
        name: {
          marginBottom: 9,
          
        }
});
