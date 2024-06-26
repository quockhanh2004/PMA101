/* eslint-disable react/self-closing-comp */
import {
  StyleSheet,
  TextInput,
  Image,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import React, {useState, useContext} from 'react';
import AxiosInstance from '../../api/AxiosInstance';
import {AppContext} from '../../AppContext';

const Register = props => {
  const {user} = useContext(AppContext);
  const {navigation} = props;
  const [name, setName] = useState(user.name);
  const [newPass, setNewPass] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(user.phone);
  const [textError, setTextError] = useState('');

  const {setIsLogin} = useContext(AppContext);
  const changeTextNewPass = data => {
    setNewPass(data);
    setTextError('');
  };
  const changeTextPass = data => {
    setPassword(data);
    setTextError('');
  };
  const changeTextName = data => {
    setName(data);
    setTextError('');
  };
  const changeTextPhone = data => {
    setPhone(data);
    setTextError('');
  };
  const nhanRegister = async () => {
    if (password == '' || phone == '' || name == '') {
      setTextError('Bạn cần nhập đầy đủ thông tin');
    } else {
      const data = await AxiosInstance().post('/users/changePassword', {
        email: user.email.trim(),
        password: password.trim(),
        newPassword: newPass.trim(),
      });
      if (data != null) {
        ToastAndroid.show('Thay đổi thành công', ToastAndroid.SHORT);
        setIsLogin(false);
      } else {
        setTextError(data.error);
      }
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View bg-white height={'100%'}>
          <View style={styles.header}>
            <Text style={styles.title}>Update info</Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.icBack}>
              <Image source={require('../../../assets/images/ic_back.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.personContainer}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/images/icPerson.png')}
                style={styles.imgPerson}
              />
              <Image
                source={require('../../../assets/images/camera.png')}
                style={styles.imgCamera}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Complete this process to get started</Text>
          <View>
            <View style={styles.txtContainer}>
              <Text style={styles.lable}>Full name</Text>
              <TextInput
                value={name}
                onChangeText={data => changeTextName(data)}
                style={styles.textInput}></TextInput>
            </View>
            <View style={styles.txtContainer}>
              <Text style={styles.lable}>Phone</Text>
              <TextInput
                value={phone}
                onChangeText={data => changeTextPhone(data)}
                style={styles.textInput}></TextInput>
            </View>
            <View style={styles.txtPassContainer}>
              <Text style={styles.lable}>Password</Text>
              <TextInput
                onChangeText={data => changeTextPass(data)}
                style={styles.textInput}></TextInput>
              <Image
                source={require('../../../assets/images/ic_eye.png')}
                style={styles.icEye}
              />
            </View>
            <View style={styles.txtPassContainer}>
              <Text style={styles.lable}>New Password</Text>
              <TextInput
                onChangeText={data => changeTextNewPass(data)}
                style={styles.textInput}></TextInput>
              <Image
                source={require('../../../assets/images/ic_eye.png')}
                style={styles.icEye}
              />
            </View>
            {!!textError && <Text style={styles.textError}>{textError}</Text>}
            <View style={styles.btnSignup}>
              <TouchableOpacity onPress={nhanRegister} style={styles.btn}>
                <Text style={styles.textBtn}>Update</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.tickAgree}>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/ic_tick.jpg')} />
          </TouchableOpacity>
          <Text style={styles.text2}>
            I certify that I am 18 years of age or older, and i agree the{' '}
            <Text style={styles.text3}>User Agreement</Text> and Privacy Police
          </Text>
        </View> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    textAlign: 'center',
  },
  text3: {
    fontSize: 13,
    fontWeight: '400',
    color: '#2BAE70',
  },
  text2: {
    width: 300,
    fontSize: 13,
    fontWeight: '400',
    color: '#858484',
    marginLeft: 10,
  },
  tickAgree: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textBtn: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  btnSignup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btn: {
    width: 362,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#2BAE70',
  },
  icEye: {
    position: 'absolute',
    top: 32,
    right: 35,
  },
  txtPassContainer: {
    width: '100%',
    height: 72,
    marginTop: 16,
    alignItems: 'center',
  },
  lable: {
    width: 362,
    fontSize: 12,
    fontWeight: '400',
    color: '#0B090A',
  },
  textInput: {
    width: 362,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 14,
    fontSize: 16,
    color: '#000',
  },
  txtContainer: {
    width: '100%',
    height: 72,
    marginTop: 15,
    alignItems: 'center',
  },
  text1: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#5C5B5C',
    marginTop: 27,
    marginLeft: 32,
  },
  personContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  imgCamera: {
    position: 'absolute',
    top: 75,
    left: 80,
  },
  imgPerson: {
    width: 100,
    height: 100,
  },
  icBack: {
    position: 'absolute',
    left: 32,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    color: '#0B090A',
    lineHeight: 28.5,
  },
  header: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
