import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppContext } from './AppContext'
import MainStackNavigation from './main/MainStack'
import AuthenNavigation from './authen/AuthenNavigation'

const AppNavigation = () => {
    const { isLogin} = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLogin?<MainStackNavigation/>:
      <AuthenNavigation/>}
    </NavigationContainer>
  )
}

export default AppNavigation