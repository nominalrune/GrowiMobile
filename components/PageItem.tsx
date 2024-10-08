import { Link, router } from 'expo-router';
import { Text, Pressable, } from 'react-native';
import Page from '../services/GrowiAPI/Page';
export default function PageItem({ page }: { page: Page; }) {
	const title = page.path.split('/').at(-1);
	return <Pressable onPress={() => { router.push(`/page/${page.path}`); }} className='flex flex-col gap-0 p-1 m-2 rounded bg-slate-50 active:bg-slate-100'>
		<Text className='text-2xl text-slate-900'>{title}</Text>
		<Text className='text-sm text-slate-600'>{page.path}</Text>
	</Pressable>;
}