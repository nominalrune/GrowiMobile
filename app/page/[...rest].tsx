import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/Base/Button';
import usePage from '../../hooks/usePage';
import Layout from '../ _layout';
import Parser from '../../services/Markdown/Parser';
import { useEffect, useState } from 'react';
import { Root as RootType } from 'mdast';
import Root from '../../components/Markdown/Root';
import RootEdit from '../../components/MarkdownEdit/Root';

export default function Page() {
  const { rest } = useLocalSearchParams();
  const path = `/${[...rest].join('/')}`;
  const { page, update, save } = usePage(path);
  const [isEdit, setIsEdit] = useState(false);
  // const [content,setContent] = useState<RootType>();
  // useEffect(()=>{
  //   if(!page) return;
  //   Parser.parse(page.revision.body ?? '')
  // },[page]);
  const content = page ? Parser.parse(page.revision.body) : undefined;
  return <Layout>
    <View className='bg-slate-100'>
      <View className='m-4 my-2'>
        <Text className='text-2xl text-slate-700'>{rest.at(-1)}</Text>
        <Text className='text-slate-400'>{path}</Text>
      </View>
    </View>
    <ScrollView>
      {page && content && (isEdit ? <RootEdit content={page.revision.body} update={update} /> : <Root node={content} />)}
    </ScrollView>
    <View className='flex flex-row justify-end'>
      <Button onPress={() => { router.push('/'); }}>
        <Text>Home</Text>
      </Button>
      {isEdit ? <Button onPress={() => save()}><Text>Save</Text></Button> : <Button onPress={() => { setIsEdit(true); }}>
        <Text>Edit</Text>
      </Button>}
    </View>
  </Layout>;
}
