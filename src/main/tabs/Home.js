/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AxiosInstance from '../../api/AxiosInstance';
const Home = ({navigation}) => {
  const [numColumns, setNumColumns] = useState(2);

  // const category = [
  //   {id: 1, name: 'Sedan', img: require('../../../assets/images/xe.png')},
  //   {id: 2, name: 'Pick-up', img: require('../../../assets/images/xe.png')},
  //   {id: 3, name: 'Van', img: require('../../../assets/images/xe.png')},
  //   {id: 4, name: 'SUVs', img: require('../../../assets/images/xe.png')},
  // ];
  const [category, setcategory] = useState([]);

  useEffect(async () => {
    const cate = await AxiosInstance().get('category/get');
    setcategory(cate);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemcontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Products')}>
        {!!item.img && <Image style={styles.img} source={{uri: item.img}} />}
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>CarRental</Text>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.icMenu}
                source={require('../../../assets/images/ic_menu.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.icThongBao}
                source={require('../../../assets/images/ic_thongbao.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Search vehicle" />
          <TouchableOpacity style={styles.icbtnSearch}>
            <Image
              style={styles.icSearch}
              source={require('../../../assets/images/ic_search.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.carsContainer}>
          <View style={styles.cars}>
            <Image
              source={require('../../../assets/images/bg_home_card.png')}
            />
          </View>
        </View>
        <View style={styles.seeCarContainer}>
          <View style={styles.seeCar}>
            <TouchableOpacity style={styles.btnVehiclesAvaliable}>
              <Text style={styles.lable}>Vehicles Avaliable</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTextSeeall}>
              <Text style={styles.txtSeeall}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <FlatList
            data={category}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            numColumns={2}
            key={2}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    width: 173,
    height: 150,
  },
  itemcontainer: {
    width: 173,
    height: 150,
    alignItems: 'center',
    margin: 5,
  },
  txtSeeall: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 19.5,
    color: '#343233',
  },
  lable: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    color: '#FFFFFF',
  },
  btnVehiclesAvaliable: {
    width: 155,
    height: 39,
    borderRadius: 4,
    backgroundColor: '#238B59',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 17,
  },
  carsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  cars: {
    width: 350,
    height: 175,
    backgroundColor: '#00000057',
    borderRadius: 8,
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
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  icThongBao: {
    width: 24,
    height: 24,
  },
  icMenu: {
    width: 24,
    height: 24,
  },
  header: {
    width: 350,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2BAE70',
    marginTop: 15,
    marginStart: 33,
  },
});
