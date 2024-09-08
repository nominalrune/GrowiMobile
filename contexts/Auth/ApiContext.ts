import { createContext } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

interface IApiContext {
	api: GrowiAPI | null,
	set: (url: string, token: string) => void;
}
const ApiContext = createContext<IApiContext|undefined>(undefined);
export default ApiContext;