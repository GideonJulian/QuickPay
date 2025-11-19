import { View, Text } from 'react-native'
import React from 'react'
import {useAuth } from '../../context/AuthContext'
const profile = () => {
  const { user } = useAuth()
  return (
    <View>
      <Text>
        {user ? `Welcome, ${user.name}` : 'Profile Page'}
      </Text>
    </View>
  )
}

export default profile