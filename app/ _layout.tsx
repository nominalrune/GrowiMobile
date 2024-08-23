import { StatusBar } from 'expo-status-bar';
import { ReactNode, useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ApiProvider from '../components/ApiProvider';
import useApi from '../hooks/useApi';
import { router } from 'expo-router';
import { Slot } from 'expo-router';
import useAuthStore from '../hooks/useAuthStore';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
	<ApiProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
	</ApiProvider>
  );
}

// export default function Layout({ children }: { children: ReactNode; }) {

// 	return <ApiProvider>
// 		<SafeAreaView className='h-full'>
// 			{children}
// 			{/* <Slot /> */}
// 		</SafeAreaView>
// 	</ApiProvider>;
// }

// function LoginOnlyContent({ children }: { children: ReactNode; }) {
// 	return api
// 		? <View>
// 			<StatusBar style="auto" translucent={true} />
// 			{children}

// 			<View><Text>logged in</Text></View>
// 			<Text>aaaaa</Text>
// 		</View>
// 		: <View className='flex place-content-center'>
// 			<Text>Loading.</Text>
// 		</View>;
// }