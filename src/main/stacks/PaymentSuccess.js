import {Image, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';

const PaymentSuccess = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.icClose}
            source={require('../../../assets/images/ic_close.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/ic_success.png')}
        />
      </View>
      <Text style={styles.title}>Payment Successful</Text>
      <Text style={styles.txtPaymentId}>Payment Id: 1522-22235</Text>
      <View style={styles.btnCantactContainer}>
        <TouchableOpacity style={styles.btnContact}>
          <Text style={styles.textBtn}>Cantact Driver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnLocationContainer}>
        <TouchableOpacity style={styles.btnLocation}>
          <Text style={styles.textBtnLocation}>View Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  textBtnLocation: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    color: '#2BAE70',
  },
  btnLocation: {
    width: 350,
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#2BAE70',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLocationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textBtn: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF',
  },
  btnCantactContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnContact: {
    width: 362,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#2BAE70',
  },
  txtPaymentId: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#5C5B5C',
    textAlign: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#0B090A',
    textAlign: 'center',
    marginTop: 32,
  },
  img: {
    width: 300,
    height: 300,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },
  header: {
    marginTop: 28,
    alignItems: 'flex-end',
    marginRight: 32,
  },
});
