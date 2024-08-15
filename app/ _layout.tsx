import { StatusBar } from 'expo-status-bar';
import { ReactNode, useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ApiProvider from '../components/ApiProvider';
import useApi from '../hooks/useApi';
import { router } from 'expo-router';
import { Slot } from 'expo-router';
import useAuthStore from '../hooks/useAuthStore';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function Layout({ children }: { children: ReactNode; }) {

	return <ApiProvider>
		<SafeAreaView>
			{children}
		</SafeAreaView>
		{/* <Slot /> */}
	</ApiProvider>;
}

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