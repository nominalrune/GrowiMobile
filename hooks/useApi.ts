import { useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

export default function useApi() {
	const c = useContext(ApiContext);
	return { api: c?.api, set: c?.set };
}