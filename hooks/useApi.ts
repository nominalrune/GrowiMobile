import { useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

export default function useApi(){
	const api = useContext(ApiContext);
	return api;
}