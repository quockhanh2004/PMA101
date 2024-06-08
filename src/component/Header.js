import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  label,
  smallText,
  showIconLeft,
  showIconRight,
  onLeftPress,
  onRightPress,
}) => {
  const navigation = useNavigation();
  return (
    <View
      row
      backgroundColor="#317EB2"
      paddingH-16
      paddingB-8
      paddingT-40
      centerV
      style={{justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={{width: 42, height: 42}}
        onPress={onLeftPress ? onLeftPress : () => navigation.goBack()}>
        {showIconLeft && (
          <Image
            source={require('../assets/icons/back_outline.png')}
            style={{width: 42, height: 42}}
          />
        )}
      </TouchableOpacity>
      <View center>
        <Text white text60L>
          {label}
        </Text>
        {smallText && <Text grey60>{smallText}</Text>}
      </View>
      <View width={42}>
        <TouchableOpacity
          center
          onPress={onRightPress ? onRightPress : () => null}>
          {showIconRight && (
            <Image
              source={require('../assets/icons/3dot.png')}
              style={{width: 5, height: 20}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
