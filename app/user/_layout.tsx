import { Stack, Slot, } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import useApi from '../../hooks/useApi';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
	return <Stack>
		<Stack.Screen
			name='index'
			options={{
				title: "User",
				headerShown: true,
			}}
		/>
		<Stack.Screen
			name='login'
		// options={{
		// 	title: "page"
		// }}
		/>
	</Stack>;
}