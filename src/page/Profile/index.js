import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {AuthLogout} from '../../redux/actions/Auth';
import {GetUsersById} from '../../redux/actions/Users';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {ChangePhoto} from '../../redux/actions/Update';
const Profile = (props) => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [loadPIN, setLoadPIN] = React.useState(false);
  const [loadNotif, setLoadNotif] = React.useState(false);
  const [logout, setLogout] = React.useState(false);
  
  const [selectedUser, setSelectedUser] = React.useState({});
  const [photo, setPhoto] = React.useState('');
  const [username, setName] = React.useState('');
  
  const dispatch = useDispatch();
  console.log(props);

  const {data} = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  React.useEffect(() => {
    dispatch(
      GetUsersById({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
      }),
    );
    console.log(data, 'ha');
  }, []);

  const selectedItem = (data) => {
    setSelectedUser(data);
    console.log('selected', data);
    setPhoto(data.photo);
    setName(data.firstName);
    setButton('Update');
    setModalVisible(true);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      props.navigation.navigate('PersonalInformation');
      setLoading(false);
    }, 1000);
  };

  const onSubmitPassword = () => {
    setLoad(true);
    setTimeout(() => {
      props.navigation.navigate('ChangePassword');
      setLoad(false);
    }, 1000);
  };

  const onSubmitPIN = () => {
    setLoadPIN(true);
    setTimeout(() => {
      props.navigation.navigate('ChangePIN');
      setLoadPIN(false);
    }, 1000);
  };

  const onSubmitNotif = () => {
    setLoadNotif(true);
    setTimeout(() => {
      props.navigation.navigate('Notification');
      setLoadNotif(false);
    }, 1000);
  };

  const onLogout = () => {
    dispatch(AuthLogout());
    setTimeout(() => {
      props.navigation.replace('Login');
      setLogout(false);
    }, 1000);
  };

  const uploadImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel || response.error) {
        // ketika image tidak di upload
        alert('you cancelled image picker');
      } else {
        const formData = new FormData();
        formData.append('photo', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });

        const header = {
          headers: {
            'auth-token': `bearer ${Auth.data.token.token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        };
        Axios.patch(
          `http://192.168.100.8:8000/api/v1/image/${Auth.data.token.id}`,
          formData,
          header,
        )
        .then((response) => {
          console.log('upload succes', response);
          alert('Upload success!');
        })
          .catch((error) => {
            console.log('upload error', error);
            alert('Upload failed!');
          });
      }
    });
  };

  return (
    <ScrollView style={{backgroundColor: '#F8F9FF', flex: 3}}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Image
            style={{marginTop: 20, marginLeft: 20}}
            source={require('../../assets/images/icons/arrow-left.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', padding: 20}}>
        {data ? (
          <Image
            source={{uri: `http://192.168.100.8:8000/images/${data.photo}`}}
            style={styles.image}
          />
        ) : (
          <Image
            source={{uri: `http://192.168.100.8:8000/images/${data.photo}`}}
            style={styles.image}
          />
        )}
        {/* <Image source = {require('../../assets/images/michael.png')}/> */}

        <View style={{padding: 15, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/icons/edit-2.png')}
            style={{marginTop: 5, marginRight: 5}}
          />
          <Text onPress={() => uploadImage()}
          >Edit</Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {data.firstName} {data.lastName}{' '}
        </Text>
        <Text>{`+62 ${data.phone}`}</Text>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            backgroundColor: '#E5E8ED',
            borderRadius: 10,
            marginTop: 40,
          }}>
          <TouchableOpacity
          style={{padding: 15}}
            onPress={() => onSubmit()}
            disabled={loading}
            autoCapitalize={'none'}
            loading={loading}
            
            >
            <Text style={{color: 'black', fontSize: 16}}>Personal Information</Text>
          </TouchableOpacity>
          <Image
            style={{position: 'absolute', right: '0%', right: 10, top: 5}}
            source={require('../../assets/images/icons/arrow-right.png')}
          />
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            backgroundColor: '#E5E8ED',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
          style={{padding: 15}}
            onPress={() => onSubmitPassword()}
            disabled={load}
            autoCapitalize="none"
            loading={load}
            color="grey">
            <Text style={{textAlign: 'left', color: 'black', fontSize: 16}}>Change Password</Text>
          </TouchableOpacity>
          <Image
            style={{position: 'absolute', right: '0%', right: 10, top: 5}}
            source={require('../../assets/images/icons/arrow-right.png')}
          />
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            backgroundColor: '#E5E8ED',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
          style={{padding: 15}}
            onPress={() => onSubmitPIN()}
            disabled={loadPIN}
            autoCapitalize="none"
            loading={loadPIN}>
            <Text style={{textAlign: 'left', color: 'black', fontSize: 16}}>Change PIN</Text>
          </TouchableOpacity>
          <Image
            style={{position: 'absolute', right: '0%', right: 10, top: 5}}
            source={require('../../assets/images/icons/arrow-right.png')}
          />
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            backgroundColor: '#E5E8ED',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
          style={{padding: 15}}
            onPress={() => onSubmitNotif()}
            disabled={loadNotif}
            autoCapitalize="none"
            loading={loadNotif}
            color="grey">
            <Text style={{textAlign: 'left', color: 'black', fontSize: 16}}>Notification</Text>
          </TouchableOpacity>
          <Image
            style={{position: 'absolute', right: '0%', right: 10, top: 5}}
            source={require('../../assets/images/icons/off.png')}
          />
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            backgroundColor: '#E5E8ED',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
          style={{padding: 15}}
            onPress={() => onLogout()}
            color="grey">
            <Text style={{textAlign: 'left', color: 'black', fontSize: 16}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {width: 70, height: 70},
});
