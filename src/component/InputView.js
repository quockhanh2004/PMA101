import {StyleSheet} from 'react-native';
import {Image, TouchableOpacity, View, TextField} from 'react-native-ui-lib';
import * as React from 'react';

const InputView = ({
  style,
  readOnly,
  placeholder,
  value,
  onChangeText,
  security,
  ...props
}) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View bg-grey70 style={styles.container}>
      <TextField
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        padding-12
        // style={[styles.input, style]}
        // maxLength={20}
        readOnly={readOnly}
        secureTextEntry={security && !showPass}
        trailingAccessory={
          security && (
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Image
                tintColor={'black'}
                resizeMode={'contain'}
                width={20}
                height={20}
                assetName={'eye'}
              />
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
  },
  container: {
    // marginTop: 16,
    borderRadius: 12,
  },
});

export default InputView;
