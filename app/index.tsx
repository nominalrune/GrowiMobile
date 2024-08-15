import { Link, router } from 'expo-router';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import useApi from '../hooks/useApi';
import usePages from '../hooks/usePages';
import useAuthStore from '../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import ApiProvider from '../components/ApiProvider';
import Layout from './ _layout';
import Home from '../components';

export default function Index() {
	return  <Layout>
			<Home/>
		</Layout>
}