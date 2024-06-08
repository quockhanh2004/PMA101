import 'react-native-gesture-handler';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Home from './tabs/Home';
import Chat from './tabs/Chat';
import Booking from './tabs/Booking';
import Navigate from './tabs/Navigate';
import Detail from './stacks/Detail';
import Products from './stacks/Products';
import Payment from './stacks/Payment';
import PaymentSuccess from './stacks/PaymentSuccess';
import Notification from './stacks/Notification';
import About from './stacks/About';
import { AppContext } from '../AppContext';
import Favourite from './stacks/Favourite';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2BAE70',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic_home.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic_booking.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support Chat"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic_chat.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Navigate"
        component={Navigate}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/ic_nav.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomDrawer = props => {
  const { setIsLogin } = useContext(AppContext);
  const nhanLogin = () => {
    setIsLogin(false);
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            height: 186,
            padding: 16,
            backgroundColor: '#238B59',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
            CarRental, Hello
          </Text>
          <Image
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#FFF',
              borderRadius: 60,
              marginTop: 20,
            }}
            source={require('../../assets/images/icPerson.png')}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
            Bảo Hoàng
          </Text>
        </View>
        <DrawerItemList {...props} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ marginTop: 350 }}>
            <TouchableOpacity
              onPress={nhanLogin}
              style={{
                width: 196,
                height: 52,
                borderWidth: 1,
                borderRadius: 32,
                borderColor: '#2BAE70',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  lineHeight: 22.5,
                  color: '#2BAE70',
                }}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const MainDrawer = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#2BAE70',
      }}>
      <Drawer.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/ic_home.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          drawerLabel: 'Notification',
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/ic_thongbao.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          drawerLabel: 'About Us',
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/icPerson.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
