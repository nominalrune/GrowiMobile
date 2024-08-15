import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import ApiProvider from '../components/ApiProvider';
import useApi from '../hooks/useApi';
import SView from '../components/Styled/SView';

export default function Lauout({ children }: { children: ReactNode; }) {
	return (
		<ApiProvider>
			<LoginOnlyContent>{children}</LoginOnlyContent>
		</ApiProvider>
	);
}

function LoginOnlyContent({ children }: { children: ReactNode; }) {
	const api = useApi();

	return api
		? <View>
			<StatusBar style="auto" translucent={true} />
			{children}
		</View>
		: <SView className='flex place-content-center'>
			<Text>Loading.</Text>
		</SView>;
}