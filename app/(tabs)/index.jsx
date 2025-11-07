import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
const index = () => {
  const {user} = useAuth();
  return (
    <View style={{ backgroundColor: "#111111", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: 'white'}}>
        {user ? `Welcome, ${user.name}!` : 'Welcome to the QuickPay App!'}
      </Text>
    </View>
  )
}

export default index