import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/Base/Button';
import usePage from '../../hooks/usePage';
import Layout from '../ _layout';
import Parser from '../../services/Markdown/Parser';
import { useEffect, useState } from 'react';
import { Root as RootType } from 'mdast';
import Root from '../../components/Markdown/Root';

export default function Page() {
  const { rest } = useLocalSearchParams();
  const path = `/${[...rest].join('/')}`;
  const { page } = usePage(path);
  // const [content,setContent] = useState<RootType>();
  // useEffect(()=>{
  //   if(!page) return;
  //   Parser.parse(page.revision.body ?? '')
  // },[page]);
  const content = page ? Parser.parse(page.revision.body ?? '') : undefined;
  return <Layout>
    <View className='bg-slate-50'>
      <View className='m-4 my-2'>
        <Text className='text-3xl text-slate-700'>{rest.at(-1)}</Text>
        <Text className='text-slate-400'>{path}</Text>
      </View>
    </View>
    <ScrollView>
      {content && <Root node={content} />}
      <Button onPress={() => { router.push('/'); }}>
        <Text>Home</Text>
      </Button>
    </ScrollView>
  </Layout>;
}
