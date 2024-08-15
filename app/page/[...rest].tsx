
import { router, useLocalSearchParams } from 'expo-router';

import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/Base/Button';
import usePage from '../../hooks/usePage';
import Layout from '../ _layout';

export default function Page() {
  const { rest } = useLocalSearchParams();
  const path = `/${[...rest].join('/')}`;
  const { page } = usePage(path);

  return <Layout>
    <View className='m-4'>
      <Text className='text-2xl text-slate-700'>{rest.at(-1)}</Text>
      <Text className='text-slate-400'>{path}</Text>
    </View>
    <ScrollView>
      <View className='m-4 p-4 rounded border border-slate-400'>
        <Text>{page?.revision.body}</Text>
      </View>
      <Button onPress={() => { router.push('/'); }}><Text>Home</Text></Button>
    </ScrollView>
  </Layout >;
}
