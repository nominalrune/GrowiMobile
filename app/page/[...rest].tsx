import { router, useLocalSearchParams } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Base/Button';
import usePage from '../../hooks/usePage';
import Layout from '../ _layout';
import Parser from '../../services/Markdown/Parser';
import { useEffect, useMemo, useState } from 'react';
import Root from '../../components/Markdown/Root';
import RootEdit from '../../components/MarkdownEdit/Root';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import IconButton from '../../components/Base/IconButton';
import PrimaryButton from '../../components/Base/PrimaryButton';

export default function Page() {
  const { rest } = useLocalSearchParams();
  const path = `/${[...rest].join('/')}`;
  const { page, update, save, undo, redo, reset } = usePage(path);
  const [isEdit, setIsEdit] = useState(false);
  function indent() { }
  function outdent() { }
  // const [content,setContent] = useState<RootType>();
  // useEffect(()=>{
  //   if(!page) return;
  //   Parser.parse(page.revision.body ?? '')
  // },[page]);
  const content = useMemo(() => {
    // if (page) {
    //  console.log(JSON.stringify(Parser.parse(page.revision.body), null, 2));
    // }
    return page ? Parser.parse(page.revision.body) : undefined;
  }, [page]);
  return <Layout>
    <View className='bg-slate-100 flex flex-row'>
      <View className='m-4 my-2'>
        <Text className='text-2xl text-slate-700'>{rest.at(-1)}</Text>
        <Text className='text-slate-400'>{path}</Text>
        <Text>{String(isEdit)}</Text>
      </View>
      {isEdit && <Button onPress={() => { setIsEdit(false); reset(); }}><Text>Back</Text></Button>}
    </View>
    <ScrollView>
      {page && content && (
        isEdit
          ? <RootEdit content={page.revision.body} update={update} />
          : <Root node={content} />
      )}
    </ScrollView>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='h-12 flex flex-row justify-end items-center bg-slate-100'
    >
      {
        isEdit ? <>
          <IconButton onPress={undo}><FontAwesome name="undo" size={24} color="gray" /></IconButton>
          <View className='rounded h-10 bg-slate-300'><Text> </Text></View>
          <IconButton onPress={redo}><FontAwesome name="repeat" size={24} color="gray" /></IconButton>
          <View className='rounded h-10 bg-slate-300'><Text> </Text></View>
          <IconButton onPress={outdent}><FontAwesome name="outdent" size={24} color="gray" /></IconButton>
          <View className='rounded h-10 bg-slate-300'><Text> </Text></View>
          <IconButton onPress={indent}><FontAwesome name="indent" size={24} color="gray" /></IconButton>

          <PrimaryButton onPress={() => save()}><Text>Save</Text></PrimaryButton>
        </>
          : <>
            <Button onPress={() => { router.push('/'); }}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => setIsEdit(true)}>
              <Text>Edit</Text>
            </Button>
          </>
      }
    </KeyboardAvoidingView>
    <View>
    </View>
  </Layout>;
}
