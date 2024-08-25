import { Tabs } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ApiProvider from '../components/ApiProvider';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
	return <ApiProvider>
		<SafeAreaView className='h-full'>
			<StatusBar/>
			<Tabs screenOptions={{
				tabBarActiveTintColor: 'rgb(30 64 175)',
				headerShown:false,
				
			}}>
				<Tabs.Screen
					name="index"
					options={{
						href: null
					}}
				/>
				<Tabs.Screen
					name="page"
					options={{
						title: 'Pages',
						tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="file-document-multiple-outline" color={color} />,
					}}
				/>
				{/* <Tabs.Screen
					name="page/[...rest]"
					options={{
						href: null,
					}}
				/> */}
				<Tabs.Screen
					name="search"
					options={{
						title: 'Search',
						tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
					}}
				/>
				<Tabs.Screen
					name="user"
					options={{
						title: 'User',
						tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-o" color={color} />,
					}}
				/>
				{/* <Tabs.Screen
				name="user/login"
				options={{
					href: null,
				}}
			/> */}
			</Tabs>
		</SafeAreaView>
	</ApiProvider>;
}