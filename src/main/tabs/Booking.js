import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'

const Booking = (props) => {
  const { navigation } = props
  const products = [
    { id: 1, name: 'Xe 1', hangXe: 'Toyota', price: 200, img: require('../../../assets/images/product.png') },
    { id: 2, name: 'Xe 2', hangXe: 'Toyota', price: 300, img: require('../../../assets/images/product.png') },
    { id: 3, name: 'Xe 3', hangXe: 'Toyota', price: 400, img: require('../../../assets/images/product.png') },
    { id: 4, name: 'Xe 4', hangXe: 'Toyota', price: 250, img: require('../../../assets/images/product.png') },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{item.name}</Text>
          <Text style={styles.txtHangXe}>{item.hangXe}</Text>
          <Text style={styles.txtStrating}>Strating price</Text>
          <Text style={styles.txtPrice}>${item.price}<Text style={styles.txtDay}>/Day</Text></Text>
        </View>

        {!!item.img && <Image
          style={styles.img}
          source={item.img} />}
      </TouchableOpacity>
    </View>
  )


  return (
    <View>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Booking</Text>
        <TouchableOpacity
          onPress={()=> navigation.goBack()}
          style={styles.icBack}>
            <Image
              source={require('../../../assets/images/ic_back.png')} />
          </TouchableOpacity>
      </View>
      <View style={styles.txtBookingConatiner}>
        <View style={styles.txtBooking}>
          <Text style={styles.txtRecent}>Recent Booking</Text>
          <Text style={styles.txtPrevious}>Previous Booking</Text>
        </View>
      </View>

      <View style={styles.listItem}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} />
      </View>
      </ScrollView>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  listItem:{
    justifyContent:'center',
    alignItems:'center'
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
    marginBottom: 10,
    justifyContent: 'center',
    shadowColor: '#2BAE70',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  txtPrevious: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#0B090A'
  },
  txtRecent: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#858484'
  },
  txtBookingConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64
  },
  txtBooking: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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