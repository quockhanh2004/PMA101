/* eslint-disable react/self-closing-comp */
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
// import {} from 'react-native-ui-lib';
import React, {useContext, useState} from 'react';
import {AppContext} from '../AppContext';
import AxiosInstance from '../api/AxiosInstance';

const Login = props => {
  const {navigation} = props;
  const {setIsLogin} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textError, setTextError] = useState('');
  const changeTextEmail = data => {
    setEmail(data);
    setTextError('');
  };
  const changeTextPass = data => {
    setPassword(data);
    setTextError('');
  };
  const nhanLogin = async () => {
    if (email === '' || password === '') {
      setTextError('Bạn cần nhập đầy đủ thông tin');
      return;
    } else {
      const data = await AxiosInstance().post('/users/login', {
        email,
        password,
      });
      if (data.email != null) {
        setIsLogin(true);
        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      } else {
        setTextError(data.error);
        return;
      }

      // setIsLogin(true);
    }
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/ic_back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/ic_logo.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.wellcomeContainer}>
        <Text style={styles.text1}>Wellcome Back</Text>
        <Image source={require('../../assets/images/ic_wellcome.png')} />
      </View>
      <View>
        <View style={styles.txtEmailContainer}>
          <Text style={styles.text2}>Email Address</Text>
          <TextInput
            onChangeText={data => changeTextEmail(data)}
            style={styles.textInput}></TextInput>
        </View>
        <View style={styles.txtPassContainer}>
          <Text style={styles.text2}>Password</Text>
          <TextInput
            onChangeText={data => changeTextPass(data)}
            style={styles.textInput}></TextInput>
          <Image
            source={require('../../assets/images/ic_eye.png')}
            style={styles.icEye}
          />
        </View>
        {textError && <Text style={styles.textError}>{textError}</Text>}
        <Text style={styles.textForgot}>Forgotten Password</Text>
        <View style={styles.btnLogin}>
          <TouchableOpacity onPress={nhanLogin} style={styles.btn}>
            <Text style={styles.textBtnLogin}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAccount}>
          <Text style={styles.text3}>Don't have account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.textCreateAccount}>
            <Text style={styles.text4}>Create account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.or}>
          <View style={styles.gachNgang}></View>
          <Text style={styles.textOr}>OR</Text>
          <View style={styles.gachNgang}></View>
        </View>
        <View style={styles.btnGGContainer}>
          <TouchableOpacity style={styles.btnGG}>
            <Image source={require('../../assets/images/ic_GG.png')} />
            <Text style={styles.textBtnGG}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    textAlign: 'center',
  },
  header: {
    marginTop: 16,
    marginLeft: 20,
  },
  textBtnGG: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  btnGGContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btnGG: {
    width: 362,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#CECECE',
  },
  textOr: {
    fontSize: 15,
    fontWeight: '500',
    color: '#AEADAD',
    marginHorizontal: 10,
  },
  gachNgang: {
    width: 108,
    height: 1,
    backgroundColor: '#858484',
  },
  or: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  textCreateAccount: {
    marginLeft: 5,
  },
  text4: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2BAE70',
    lineHeight: 22.5,
  },
  text3: {
    fontSize: 15,
    fontWeight: '400',
    color: '#5C5B5C',
    lineHeight: 22.5,
  },
  createAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textBtnLogin: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  btnLogin: {
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
  textForgot: {
    height: 23,
    textAlign: 'right',
    marginRight: 20,
    fontSize: 15,
    fontWeight: '400',
    color: '#5C5B5C',
    marginTop: 16,
  },
  icEye: {
    position: 'absolute',
    top: 35,
    right: 35,
  },
  txtPassContainer: {
    width: '100%',
    height: 72,
    marginTop: 16,
    alignItems: 'center',
  },
  text2: {
    width: 362,
    height: 18,
    fontSize: 12,
    fontWeight: '400',
    color: '#0B090A',
    // marginBottom:5
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
  txtEmailContainer: {
    width: '100%',
    height: 72,
    marginTop: 31,
    alignItems: 'center',
  },
  wellcomeContainer: {
    width: 225,
    height: 50,
    marginTop: 20,
    marginLeft: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 23,
    fontWeight: '400',
    color: '#000',
    lineHeight: 34.5,
    textAlign: 'center',
  },
  logoText: {
    fontSize: 27,
    fontWeight: '800',
    color: '#2BAE70',
    position: 'absolute',
    top: 135,
  },
  img: {
    width: 128,
    height: 128,
  },
  logoContainer: {
    width: 194,
    height: 186,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
