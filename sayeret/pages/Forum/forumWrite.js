import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
// import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

const WriteToForum = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Aviv',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {

    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user,} = messages[0]
    addDoc(collection(db, 'chats'), { _id, createdAt,  text});
  
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default WriteToForum