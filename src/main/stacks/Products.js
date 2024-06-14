import { FlatList, Image, StyleSheet, ScrollView, TextInput } from 'react-native';

import { Text, TouchableOpacity, View } from 'react-native-ui-lib';

import React,{useContext, useEffect, useState} from 'react';
import AxiosInstance from '../../api/AxiosInstance';

const Products = (props) => {
  const { navigation } = props;
  const _id = props?.route?.params?._id;
  const [product, setProduct] = useState([])
  const [textSearch, setTextSearch] = useState("")
  const changeTextSearch = data => {
    setTextSearch(data)
  };
  useEffect(()=>{
    const getProducts = async () => {
      try {
        if (!_id) {
          return;
        }
        const dataProduct = await AxiosInstance()
          .get(`/product/mucProduct/${_id}`);
          setProduct(dataProduct)
      } catch (error) {
        console.log("loi product ",error);
      }
    }
    getProducts();
  },[_id])
  // console.log(product);

  useEffect(()=>{
    const searchProduct = async () =>{
      const data = await AxiosInstance().post('/product/search',{
          carName: textSearch.trim()
      });
      if (data != null) {
        setProduct(data)
      }else{
        console.log("loi search ========");
      }
    }
    searchProduct()
  },[textSearch])

  const products = [
    {
      id: 1,
      name: 'Xe 1',
      hangXe: 'Toyota',
      price: 200,
      img: require('../../../assets/images/product.png'),
    },
    {
      id: 2,
      name: 'Xe 2',
      hangXe: 'Toyota',
      price: 300,
      img: require('../../../assets/images/product.png'),
    },
    {
      id: 3,
      name: 'Xe 3',
      hangXe: 'Toyota',
      price: 400,
      img: require('../../../assets/images/product.png'),
    },
    {
      id: 4,
      name: 'Xe 4',
      hangXe: 'Toyota',
      price: 250,
      img: require('../../../assets/images/product.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{_id: item._id})}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{item.carName}</Text>
          <Text 
          numberOfLines={1}
          style={styles.txtHangXe}>{item.title}</Text>
          <Text style={styles.txtStrating}>Strating price</Text>
          <Text style={styles.txtPrice}>
            ${item.rentalPrice}
            <Text style={styles.txtDay}>/Day</Text>
          </Text>
        </View>

        {item.img && <Image style={styles.img} source={{uri: item.img}} />}
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Avaliable SUV</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icBack}>
            <Image
              style={{}}
              source={require('../../../assets/images/ic_back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
          style={styles.textInput} 
          placeholder="Search vehicle"
          onChangeText={data => changeTextSearch(data)}/>
          <TouchableOpacity style={styles.icbtnSearch}>
            <Image
              style={styles.icSearch}
              source={require('../../../assets/images/ic_search.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seeCarContainer}>
          <View style={styles.seeCar}>
            <Text style={styles.txt}>Cars in your location</Text>
            <TouchableOpacity style={styles.btnTextSeeall}>
              <Text style={styles.txtSeeall}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  txtContainer: {
    marginStart: 16,
  },
  txtDay: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2BAE70',
  },
  txtPrice: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#343233',
  },
  txtStrating: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#2BAE70',
    marginTop: 6,
  },
  txtHangXe: {
    width: 130,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#5C5B5C',
  },
  txtName: {
    width: 130,
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#0B090A',
  },
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  img: {
    width: 150,
    height: 77,
    position: 'absolute',
    right: 30,
  },
  item: {
    width: 350,
    height: 139,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 32,
    justifyContent: 'center',
    shadowColor: '#2BAE70',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtSeeall: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2BAE70',
  },
  txt: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22.5,
    color: '#0B090A',
  },
  seeCar: {
    width: 350,
    height: 39,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeCarContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icbtnSearch: {
    width: 49,
    height: 40,
    backgroundColor: '#2BAE70',
    borderRadius: 10,
    position: 'absolute',
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icSearch: {
    width: 24,
    height: 24,
  },
  textInputContainer: {
    with: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  textInput: {
    width: 350,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 14,
    fontSize: 16,
    color: '#000',
  },
  icBack: {
    position: 'absolute',
    left: 32,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28.5,
    color: '#343233',
  },
  header: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
