import { Link, router } from 'expo-router';
import { View, Text, Pressable, SafeAreaView, FlatList,  } from 'react-native';
import useApi from '../hooks/useApi';
import usePages from '../hooks/usePages';
import Page from '../services/GrowiAPI/Page';
import Button from './Base/Button';
export default function Home() {
	const { pages, refresh } = usePages();
	return <>
		<View className='flex flex-col gap-6 m-2 items-start'>
			<Text className='text-2xl text-red-500'>index</Text>
			{pages ? <>
				<Button onPress={refresh}><Text className='text-white'>refresh</Text></Button>
				<FlatList
					data={pages}
					renderItem={({ item }: { item: Page; }) => <PageItem page={item}/>}
					keyExtractor={(item) => item._id}
				/></> : <Button  onPress={() => router.push('/login')}><Text>login</Text></Button>
			}
		</View>
		{/* <Text>pages: {JSON.stringify(pages)}</Text> */}
	</>;
};

function PageItem({page}:{page:Page}){
	const title = page.path.split('/').at(-1);
	return <Pressable onPress={()=>{router.push(`/page/${page.path}`)}} className='flex flex-col gap-0 p-1 m-2 rounded bg-slate-50 active:bg-slate-100'>
		<Text className='text-2xl text-slate-900'>{title}</Text>
		<Text className='text-sm text-slate-600'>{page.path}</Text>
	</Pressable>
}