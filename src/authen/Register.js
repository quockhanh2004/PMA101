import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Create an acount</Text>
                <TouchableOpacity
                    style={styles.icBack}>
                    <Image
                        source={require('../../access/images/ic_back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.personContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../access/images/icPerson.png')}
                        style={styles.imgPerson} />
                    <Image
                        source={require('../../access/images/camera.png')}
                        style={styles.imgCamera} />
                </TouchableOpacity>
            </View>
            <Text style={styles.text1}>Complete this process to get started</Text>
            <View>
                <View style={styles.txtContainer}>
                    <Text style={styles.lable}>Full name</Text>
                    <TextInput
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.lable}>Email address</Text>
                    <TextInput
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.lable}>Phone</Text>
                    <TextInput
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.txtPassContainer}>
                    <Text style={styles.lable}>Password</Text>
                    <TextInput
                        style={styles.textInput}

                    ></TextInput>
                    <Image
                        source={require('../../access/images/ic_eye.png')}
                        style={styles.icEye} />
                </View>
                <View style={styles.btnSignup}>
                    <TouchableOpacity
                        style={styles.btn}>
                        <Text style={styles.textBtn}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tickAgree}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../access/images/ic_tick.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.text2}>I certify that I am 18 years of age or older, and
                        i agree the <Text style={styles.text3}>User Agreement</Text> and Privacy Police</Text>

                </View>
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    text3:{
        fontSize:13,
        fontWeight:'400',
        color:'#2BAE70'
    },
    text2:{
        width: 300,
        fontSize:13,
        fontWeight:'400',
        color:'#858484',
        marginLeft:10
    },
    tickAgree:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    textBtn: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
    },
    btnSignup: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
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
        right: 35
    },
    txtPassContainer: {
        width: '100%',
        height: 72,
        marginTop: 16,
        alignItems: 'center'
    },
    lable: {
        width: 362,
        fontSize: 12,
        fontWeight: '400',
        color: '#0B090A'
    },
    textInput: {
        width: 362,
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        padding: 14,
        fontSize: 16,
        color: '#000'
    },
    txtContainer: {
        width: '100%',
        height: 72,
        marginTop: 15,
        alignItems: 'center'
    },
    text1: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22.5,
        color: '#5C5B5C',
        marginTop: 27,
        marginLeft: 32
    },
    personContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 38
    },
    imgCamera: {
        position: 'absolute',
        top: 75,
        left: 80
    },
    imgPerson: {
        width: 100,
        height: 100
    },
    icBack: {
        position: 'absolute',
        left: 32
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
        justifyContent: "center"
    },
})