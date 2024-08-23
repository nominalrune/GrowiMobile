import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Layout() {
	return <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
		<Tabs.Screen
			name="index"
			options={{
				title: 'Pages',
				tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="file-document-multiple-outline" color={color} />,
			}}
		/>
		<Tabs.Screen
			name="search"
			options={{
				title: 'Search',
				tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
			}}
		/>
	</Tabs>;
}