import { Stack, router, useLocalSearchParams } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Base/Button';
import usePage from '../../hooks/usePage';
import Parser from '../../services/Markdown/Parser';
import { useEffect, useMemo, useRef, useState } from 'react';
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
  const selection = useRef({ start: 0, end: 0, });
  const content = useMemo(() => {
    return Parser.parse(page?.revision.body ?? '');
  }, [page]);
  function getLine(cursor: number) {
    if (!page) { return ''; }
    // if (!page || cursor === 0) { return 0; }
    const body = page.revision.body;
    let alt = body.substring(0, cursor) + '=#_$CURSOR@?-~' + body.substring(cursor);
    const splitted = alt.split('\n');
    const lineNo = splitted.findIndex(line => /^.*?=#_\$CURSOR@\?-~.*?$/.test(line));
    return lineNo;
    // if (body.length <= cursor) { return body.length; }
    let before = body.substring(0, cursor);
    if (before.lastIndexOf('\n') !== -1) before = before.substring(before.lastIndexOf('\n') + 1);
    let after = body.substring(cursor);
    if (after.indexOf('\n') !== -1) after = after.substring(0, after.indexOf('\n'));
    return before + after;
  }
  function indent() {
    if (!page) { return ''; }
    const lineNo = getLine(selection.current.start);
    let body = page.revision.body;
    let lines = body.split('\n').map((line,i)=>i===lineNo?`  ${line}`:line);
    return update(lines.join('\n'));
  }
  function outdent() { 
    if (!page) { return ''; }
    const lineNo = getLine(selection.current.start);
    let body = page.revision.body;
    let lines = body.split('\n').map((line,i)=>i===lineNo?line.replace(/^  /,''):line);
    return update(lines.join('\n'));
  }
  return <>
    <Stack.Screen
      options={{
        headerTitle: () => <View className='flex flex-row'>
          <View className='my-2'>
            <Text className='text-2xl text-slate-700'>{rest.at(-1)}</Text>
            <Text className='text-slate-400/90'>{path}</Text>
          </View>
          <View className='bg-slate-100 flex flex-row'>
            {isEdit && <Button onPress={() => { setIsEdit(false); reset(); }}><Text>Back</Text></Button>}
          </View>
        </View>,
      }}
    />
    <ScrollView>
      {page && (
        isEdit
          ? <RootEdit
            setSelection={(s) => { selection.current = s; console.log('line:', getLine(s.start)); }}
            content={page.revision.body} update={update} />
          : <Text>{page.revision.body}</Text>
          // : (content.type==='root'? <Root node={content} />:<Text>{page.revision.body}</Text>)
      )}
    </ScrollView>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='h-12 flex flex-row justify-end items-center bg-slate-100'
    >
      {
        isEdit ? <>
          <IconButton onPress={undo}><FontAwesome name="undo" size={24} color="gray" /></IconButton>
          <IconButton onPress={redo}><FontAwesome name="repeat" size={24} color="gray" /></IconButton>
          <IconButton onPress={outdent}><FontAwesome name="outdent" size={24} color="gray" /></IconButton>
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
  </>;
}
