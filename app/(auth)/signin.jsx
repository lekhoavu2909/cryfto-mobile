import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = () =>{

  }

  return (
    <SafeAreaView className=" bg-slate-100 h-full">
      <ScrollView>
        <View className=" w-full justify-center min-h-85vh px-4 my-6 ">
          <Text 
            className=" text-3xl font-black text-cyan-500 "
          >
            Cryfto
          </Text>

          <Text 
            className=" text-2xl text-slate-700 font-semibold mt-5 "
          >
            Sign in to Cryfto
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password:e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-slate-700 font-regular">
              Don't have an account?
            </Text>
            <Link
              href="/signup"
              className="text-lg font-semibold text-cyan-500"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn