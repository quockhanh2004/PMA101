import { Image, StyleSheet, ToastAndroid } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import AxiosInstance from '../../api/AxiosInstance';

const Payment = props => {
  const { navigation } = props;
  const { detailProduct, setDetailProduct } = useContext(AppContext)
  const _id = props?.route?.params?._id;
  const { user } = useContext(AppContext)
  console.log(detailProduct);

  const nhanThanhToan = async () => {
    const data = await AxiosInstance().post('/booking/add', {
      userId: user._id,
      carName: detailProduct.carName,
      rentalPrice: detailProduct.rentalPrice,
      img: detailProduct.img,
      title: detailProduct.title,
      saleOffL: 0
    })
    console.log(data);
    if (data != null) {
      ToastAndroid.show("Thanh toán thành công", ToastAndroid.SHORT)
      navigation.navigate('PaymentSuccess')
    } else {
      console.log("loi thanh toan");
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/images/ic_close.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.imgLogo}
          source={require('../../../assets/images/ic_logo.png')}
        />
      </View>
      <View style={styles.cars}>
        <View style={styles.creditCardContainer}>
          <Text style={styles.txtCard}>Credit card</Text>
          <View style={styles.imgAtm}>
            <Image source={require('../../../assets/images/atm.png')} />
          </View>
        </View>
      </View>
      <View style={styles.btnPayWallet}>
        <TouchableOpacity style={styles.btn}>
          <Image
            style={styles.imgPay}
            source={require('../../../assets/images/ic_payWallet.png')}
          />
          <Text style={styles.textBtn}>Wallet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnPayGG}>
        <TouchableOpacity style={styles.btn}>
          <Image
            style={styles.imgPay}
            source={require('../../../assets/images/ic_payGG.png')}
          />
          <Text style={styles.textBtn}>Google Pay</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thanhToanContainer}>
        <View style={styles.thanhToan}>
          <View style={styles.price}>
            <Text style={styles.titlePrice}>Price</Text>
            <Text style={styles.txtPrice}>
              <Text style={{ color: '#2BAE70' }}>$</Text> 140.0
            </Text>
          </View>
          <TouchableOpacity
            onPress={nhanThanhToan}
            style={styles.btnThanhToan}>
            <Text>Pay from Credit Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  txtPrice: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    color: '#0B090A',
  },
  titlePrice: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#AEAEAE',
  },
  price: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnThanhToan: {
    backgroundColor: '#2BAE70',
    width: 240,
    height: 52,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thanhToan: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thanhToanContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  btnPayGG: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  imgPay: {
    marginLeft: 17,
    marginRight: 14,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    lineHeight: 20,
  },
  btnPayWallet: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  btn: {
    width: 350,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#2BAE70',
  },
  txtCard: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#2BAE70',
    marginTop: 14,
    marginLeft: 17,
  },
  imgAtm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cars: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 51,
  },
  creditCardContainer: {
    width: 350,
    height: 241,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  imgLogo: {
    width: 183,
    height: 145,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#0B090A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 35,
    marginTop: 11,
  },
  container: {
    width: '100%',
    height: '100%',
  },
});
