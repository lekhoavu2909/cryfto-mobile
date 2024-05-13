import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View>
      <Image
        source = {icon}
        resizeMode="contain"
        tintColor={color}
        className=" w-6 h-6 "
        style={{
          width:24,
          height:24
        }}
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen 
          name="trade"
          options={{
            title: 'Trading Area',
            tabBarIcon: ({color, focused}) =>(
              <TabIcon
                icon = {icons.trade}
                color={color}
                name="Trade"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({color, focused}) =>(
              <TabIcon
                icon = {icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="deposit"
          options={{
            title: 'Deposit',
            tabBarIcon: ({color, focused}) =>(
              <TabIcon
                icon = {icons.deposit}
                color={color}
                name="Deposit"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout