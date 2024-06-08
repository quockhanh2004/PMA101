import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import {Text, Card, TouchableOpacity} from 'react-native-ui-lib';

const Favourite = ({route}) => {
  const colorMain = '#FFDC5D';

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = text => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessages = [...messages];
      newMessages.push(message);
      setMessages(newMessages);
      setMessage('');
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{height: 20}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          {/* <Ionicons name="chevron-back" size={24} color="#2BAE70" /> */}
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#2BAE70'}}>
          Car Rental
        </Text>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'flex-end',
            paddingRight: 20,
          }}>
          {/* <FontAwesome name="phone" size={24} color="#2BAE70" /> */}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopEndRadius: 31,
          borderTopLeftRadius: 31,
        }}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
            {messages.map((msg, index) => (
              <View key={index} style={{padding: 10, alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  {msg}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 20,
            marginBottom: 50,
          }}>
          <View
            style={{
              width: '90%',
              height: 40,
              borderWidth: 1,
              flexDirection: 'row',
              borderRadius: 15,
              backgroundColor: '#fff',
            }}>
            <TextInput
              style={{flex: 1, paddingLeft: 10}}
              placeholder="Type your message..."
              value={message}
              onChangeText={handleMessageChange}
            />
          </View>
          <TouchableOpacity
            center
            paddingL-10
            color="#2BAE70"
            onPress={handleSendMessage}>
            <Card borderRadius={6} padding-5 height={32} backgroundColor="lime">
              <Text white>Send</Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
