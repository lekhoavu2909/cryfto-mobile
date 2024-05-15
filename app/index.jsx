import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { CustomButton } from "../components";

export default function App() {
  return (
    <SafeAreaView className="bg-slate-100">
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text 
            className=" font-black text-5xl text-cyan-500 "
          >
            Cryfto
          </Text>

          <Text className="text-xl font-bold text-center text-slate-700">
              Perfect Your Trading Skills
          </Text>

          <Text className="text-sm font-pregular text-slate-700 mt-7 text-center">
            With a real-time risk-free cryptocurrency trading simulator with prediction
          </Text>

          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>

        <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  );
}