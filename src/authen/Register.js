/* eslint-disable react/self-closing-comp */
import { StyleSheet, TextInput, Image, ToastAndroid, ScrollView } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import React, { useState } from 'react';
import AxiosInstance from '../api/AxiosInstance';

const Register = props => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [textError, setTextError] = useState('');
  const [tickAgree, settickAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(true)

  const changeTickAgree = () => {
    settickAgree(!tickAgree);
  };

  const changeTextEmail = data => {
    setEmail(data);
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
    if (email !== '' || password !== '' || phone !== '' || name !== '') {
      if (password.length < 8) {
        setTextError('Password phải từ lớn hơn 8 ký tự');
      }
      const data = await AxiosInstance().post('/users/register', {
        email: email.trim(),
        phone: phone.trim(),
        password: password.trim(),
        name: name.trim(),
      });
      if (data.email != null) {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        setTextError(data.error);
      }

    }
    else {
      setTextError('Bạn cần nhập đầy đủ thông tin');
      return;
    }

  };

  return (
    <View bg-white height={'100%'}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Create an acount</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icBack}>
            <Image source={require('../../assets/images/ic_back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.personContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/icPerson.png')}
              style={styles.imgPerson}
            />
            <Image
              source={require('../../assets/images/camera.png')}
              style={styles.imgCamera}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Complete this process to get started</Text>
        <View>
          <View style={styles.txtContainer}>
            <Text style={styles.lable}>Full name</Text>
            <TextInput
              onChangeText={data => changeTextName(data)}
              style={styles.textInput}></TextInput>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.lable}>Email address</Text>
            <TextInput
              onChangeText={data => changeTextEmail(data)}
              style={styles.textInput}></TextInput>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.lable}>Phone</Text>
            <TextInput
              onChangeText={data => changeTextPhone(data)}
              style={styles.textInput}></TextInput>
          </View>
          <View style={styles.txtPassContainer}>
            <Text style={styles.lable}>Password</Text>
            <TextInput
              onChangeText={data => changeTextPass(data)}
              style={styles.textInput}
              secureTextEntry={showPassword}></TextInput>
              <TouchableOpacity
              onPress={()=>setShowPassword(!showPassword)}
               style={styles.icEye}>
                <Image
              source={require('../../assets/images/ic_eye.png')}/>
              </TouchableOpacity>
            
          </View>
          {!!textError && <Text style={styles.textError}>{textError}</Text>}
          <View style={styles.btnSignup}>
            <TouchableOpacity onPress={nhanRegister} style={styles.btn}>
              <Text style={styles.textBtn}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tickAgree}>
            <TouchableOpacity onPress={changeTickAgree}>
              {!tickAgree ? (
                <Image
                  style={styles.checkBox}
                  source={require('../../assets/images/ic_tick.jpg')} />
              ) : (
                <Image
                  style={styles.checkBox}
                  source={require('../../assets/images/ic_check.png')} />
              )}
            </TouchableOpacity>
            <Text style={styles.text2}>
              I certify that I am 18 years of age or older, and i agree the{' '}
              <Text style={styles.text3}>User Agreement</Text> and Privacy Police
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  checkBox: {
    width: 24,
    height: 24
  },
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
    width: 350,
    fontSize: 12,
    fontWeight: '400',
    color: '#0B090A',
  },
  textInput: {
    width: 350,
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
