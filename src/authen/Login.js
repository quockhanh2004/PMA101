import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../access/images/logo.png")}
                    style={styles.img} />
                <Text style={styles.logoText}>Car Rental</Text>
            </View>
            <View style={styles.wellcomeContainer}>
                <Text style={styles.text1}>Wellcome Back</Text>
                <Image
                    source={require('../../access/images/ic_wellcome.png')} />
            </View>
            <View>
                <View style={styles.txtEmailContainer}>
                    <Text style={styles.text2}>Email Address</Text>
                    <TextInput
                        style={styles.textInput}
                    ></TextInput>
                </View>
                <View style={styles.txtPassContainer}>
                    <Text style={styles.text2}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                    ></TextInput>
                    <Image
                    source={require('../../access/images/ic_eye.png')}
                    style={styles.icEye}/>
                </View>
                
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    icEye:{
        position:'absolute',
        top:35,
        right:35
    },
    txtPassContainer:{
        width:'100%',
        height:72,
        marginTop:16,
        alignItems:'center'
    },
    text2:{
        width:362,
        height:18,
        fontSize:12,
        fontWeight:'400',
        color:'#0B090A',
        // marginBottom:5
    },
    textInput:{
        width:362,
        height:45,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000',
        padding:14,
        fontSize:16,
        color:'#000'
    },  
    txtEmailContainer:{
        width:'100%',
        height:72,
        marginTop:31,
        alignItems:'center'
    },
    wellcomeContainer: {
        width: 225,
        height: 50,
        marginTop: 25.5,
        marginLeft: 23,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontSize: 23,
        fontWeight: '400',
        color: '#000',
        lineHeight: 34.5,
        textAlign: 'center'
    },
    logoText: {
        fontSize: 27,
        fontWeight: '800',
        color: '#2BAE70',
        position: 'absolute',
        top: 135
    },
    img: {
        width: 128,
        height: 128,
    },
    logoContainer: {
        width: 194,
        height: 186,
        justifyContent: 'center',
        alignItems: 'center'
    }
})