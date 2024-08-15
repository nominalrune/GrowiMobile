import { useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

export default function useApi() {
	const result = useContext(ApiContext);
	return { api: result?.api, set: result?.set };
}