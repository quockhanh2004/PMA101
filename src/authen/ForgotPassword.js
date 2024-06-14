import { StyleSheet, Text, View, TextInput, Image, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AxiosInstance from '../api/AxiosInstance';

const ForgotPassword = (props) => {
    const { navigation } = props;
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
    const [textError, setTextError] = useState('');
    const [showPassword, setShowPassword] = useState(true)

    const changeTextEmail = data => {
        setEmail(data)
        setTextError('');
    };
    const changeTextPass = data => {
        setPassword(data);
        setTextError('');
    };
    const changeTextOTP = data => {
        setOTP(data)
        setTextError('');
    };
    const changeTextConfirmPass = data => {
        setConfirmPass(data)
        setTextError('');
    };
    const nhanLayOTP = async () => {
        if (email == "") {
            setTextError('Bạn cần nhập Email')
        } else {
            const data = await AxiosInstance().post('/users/forgotPassword', {
                email: email.trim(),
            });
            console.log(data);
            if (data.message != null) {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            } else {
                setTextError('lỗi forgotPass');
            }
        }
    };

    const nhanSubmit = async () => {
        if (email !== "" || otp !== "" || password !== "" || confirmPass !== "") {
            if (password !== confirmPass) {
                setTextError('Password không khớp');
            } else {
                const data = await AxiosInstance().post('/users/resetPassword', {
                    email: email.trim(),
                    otp: otp.trim(),
                    newPassword: password.trim()
                });
                console.log(data);
                if (data.message != null) {
                    ToastAndroid.show(data.message, ToastAndroid.SHORT);
                    navigation.navigate('Login')
                } else {
                    ToastAndroid.show(data.error, ToastAndroid.SHORT);
                }
            }
        } else {
            setTextError('Bạn cần nhập đầy đủ thông tin');
        }
    }

    return (
        <View bg-white height={'100%'}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Forgot Password</Text>
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
                        <Text style={styles.lable}>Email</Text>
                        <TextInput
                            onChangeText={changeTextEmail}
                            style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.txtContainer}>
                        <Text style={styles.lable}>OTP</Text>
                        <TextInput
                            onChangeText={changeTextOTP}
                            style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.txtPassContainer}>
                        <Text style={styles.lable}>Password</Text>
                        <TextInput
                            onChangeText={changeTextPass}
                            style={styles.textInput}
                            secureTextEntry={showPassword}></TextInput>
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.icEye}>
                            <Image
                                source={require('../../assets/images/ic_eye.png')} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.txtPassContainer}>
                        <Text style={styles.lable}>Confirm Password</Text>
                        <TextInput
                            onChangeText={changeTextConfirmPass}
                            style={styles.textInput}
                            secureTextEntry={showPassword}></TextInput>
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.icEye}>
                            <Image
                                source={require('../../assets/images/ic_eye.png')} />
                        </TouchableOpacity>

                    </View>
                    {!!textError && <Text style={styles.textError}>{textError}</Text>}
                    <View style={styles.btnSignup}>
                        <TouchableOpacity onPress={() => nhanLayOTP()} style={styles.btn}>
                            <Text style={styles.textBtn}>Lấy mã OTP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnSignup}>
                        <TouchableOpacity onPress={() => nhanSubmit()} style={styles.btn}>
                            <Text style={styles.textBtn}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ForgotPassword

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
})