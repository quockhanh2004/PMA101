import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Detail = (props) => {
  const {navigation} = props
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>RAV 4</Text>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.icBack}>
          <Image
            source={require('../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtName}>Xe 1</Text>
            <Text style={styles.txtHangXe}>Toyota</Text>
            <Text style={styles.txtStrating}>Strating price</Text>
            <Text style={styles.txtPrice}>$200<Text style={styles.txtDay}>/Day</Text></Text>
          </View>
          <Image
            style={styles.img}
            source={require('../../../assets/images/product.png')} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.txtInfo}>Vehicle information</Text>
          <View style={styles.thongTin}>
            <View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_seats.png')} />
                <Text>Seats: 4</Text>
              </View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_door.png')} />
                <Text>Pwr. Window: Yes</Text>
              </View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_steering.png')} />
                <Text>Steering: Power</Text>
              </View>
            </View>
            <View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_door.png')} />
                <Text>Pwr. Lock: Yes</Text>
              </View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_ac.png')} />
                <Text>A/C: Yes</Text>
              </View>
              <View style={styles.chiTiet}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/images/ic_trans.png')} />
                <Text>Trans: Automatic</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.interContainer}>
        <View style={styles.inter}>
          <Text>Inter-State</Text>
          <Text>Within the city</Text>
        </View>
      </View>
      <View style={styles.bookingContainer}>
        <View style={styles.booking}>
          <Text style={styles.txtBooking}>Booking information</Text>
          <View
            style={styles.gach}></View>
          <View style={styles.dayContainer}>
            <Image
              source={require('../../../assets/images/ic_day.png')} />
            <Text style={styles.txtSelect}>Select</Text>
            <Text style={styles.txtDayBooking}>Days</Text>
            <Image
              style={styles.icDay}
              source={require('../../../assets/images/ic_hrs.png')} />
            <Text style={styles.txtDayBooking}>Hrs</Text>
            <Image
              style={styles.icDay}
              source={require('../../../assets/images/ic_hrs.png')} />
          </View>
          <View
            style={styles.gach}></View>
          <View style={styles.methodConatiner}>
            <View >
              <TouchableOpacity style={styles.selfDriven}>
                <Image
                  source={require('../../../assets/images/ic_self.png')} />
                <Text style={styles.txt1}>Self Driven</Text>
                <Image
                  source={require('../../../assets/images/ic_tick.jpg')} />
              </TouchableOpacity>

            </View>
            <View
              style={styles.withDriver}>
              <View>
                <TouchableOpacity style={styles.selfDriven}>
                  <Image
                    source={require('../../../assets/images/ic_withdriver.png')} />
                  <Text style={styles.txt1}>Self Driven</Text>
                  <Image
                    source={require('../../../assets/images/ic_tick.jpg')} />
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnBooking}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Payment')}
          style={styles.btn}>
          <Text style={styles.textBtn}>BOOK</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

  textBtn: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF'
  },
  btnBooking: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },
  btn: {
    width: 362,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#2BAE70',
  },
  txt1: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#858484',
    marginLeft: 10,
    marginRight: 16
  },
  withDriver: {
    flexDirection: 'row'
  },
  selfDriven: {
    flexDirection: 'row',
  },
  methodConatiner: {
    width: 332,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtDayBooking: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#0B090A',
  },
  txtSelect: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#858484',
  },
  dayContainer: {
    width: 332,
    flexDirection: 'row',
    marginTop: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtBooking: {
    width: 332,
    marginTop: 18
  },
  gach: {
    width: 332,
    height: 1,
    backgroundColor: '#CECECE',
    marginTop: 14
  },
  bookingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },
  booking: {
    width: 350,
    height: 166,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2BAE70',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center'
  },
  interContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  inter: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chiTiet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  icon: {
    marginRight: 5,
    width: 16,
    height: 16,
    tintColor:'green'
  },
  txtInfo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#0B090A',
    marginLeft: 16
  },
  thongTin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  info: {
    width: 350,
    height: 158,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: '#2BAE70',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32
  },
  txtContainer: {
    marginStart: 16
  },
  txtDay: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2BAE70'
  },
  txtPrice: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#343233'
  },
  txtStrating: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#2BAE70',
    marginTop: 6
  },
  txtHangXe: {
    width: 130,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#5C5B5C'
  },
  txtName: {
    width: 130,
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#0B090A'
  },
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  img: {
    width: 150,
    height: 77,
    position: 'absolute',
    right: 30
  },
  item: {
    width: 350,
    height: 139,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: '#2BAE70',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icBack: {
    position: 'absolute',
    left: 32
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#343233'
  },
  header: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
})