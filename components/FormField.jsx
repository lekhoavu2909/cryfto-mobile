import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { icons } from "../constants";


const FormField = ({ 
    title, 
    value, 
    placeholder, 
    handleChangeText, 
    otherStyles, 
    ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className=" text-base text-slate-700 font-semibold ">{title}</Text>
      <View className="w-full h-16 px-4 bg-slate-200 rounded-2xl focus:border-cyan-600 items-center flex-row">
        <TextInput 
            className="flex-1 text-slate-700 font-medium text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' &&(
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyehide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField