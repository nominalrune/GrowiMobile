import { useContext, useEffect } from 'react';
import ApiContext from '../contexts/Auth/ApiContext';
import useAuth from '../contexts/Auth/useAuth';

export default function useApi() {
	const context = useContext(ApiContext);
	const {url, token} = useAuth();
	useEffect(()=>{
		if(!context?.api && url && token){
			context?.set(url, token);
			console.log('useApi, set api to the context', url, token);
		}
	},[url, token]);
	return { api: context?.api, set: context?.set };
}