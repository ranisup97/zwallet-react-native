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
      `http://192.168.100.8:8000/api/v1/users/search?firstName=${query}&sortBy=firstName&sortType=ASC`,
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
         source={{uri: `http://192.168.100.8:8000/images/${item.photo}`}}
        //  style={styles.image}
         style={styles.image}/>
       </View>
       <View>
         <View style={styles.detail}>
           <TouchableOpacity
           onPress={()=> props.navigation.navigate('InputAmount')}
           >
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
