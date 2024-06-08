import React from 'react';
import {Text, TouchableOpacity} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const Button = ({label, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      paddingV-14
      marginT-16
      center
      style={disabled ? styles.buttonDisable : styles.button}
      onPress={onPress}>
      <Text
        // fontSize={16} fontWeight="600"
        color={'white'}
        text70H>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: '#317EB2',
    width: '100%',
  },
  buttonDisable: {
    borderRadius: 12,
    backgroundColor: '#15151533',
    width: '100%',
    opacity: 0.5,
  },
});

export default Button;
