import { Link, router, Stack } from 'expo-router';
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';
import usePages from '../../hooks/usePages';
import Button from '../../components/Base/Button';
import PageItem from '../../components/PageItem';
import IconButton from '../../components/Base/IconButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Index() {
	const { pages, refresh, loading } = usePages();
	return <View>
		<Stack.Screen
			options={{
				headerRight:()=>(<View className='flex flex-col items-end'>
			<IconButton onPress={refresh}>
				<FontAwesome name="refresh" size={16} color="black" />
			</IconButton>
		</View>)
			}}
		/>
		
		<FlatList
			data={pages}
			renderItem={({ item }) => <PageItem page={item} />}
			keyExtractor={(item) => item._id}
		/>
	</View>;
};
