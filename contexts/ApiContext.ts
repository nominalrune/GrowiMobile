import { createContext } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

const ApiContext = createContext<GrowiAPI | null>(null);
export default ApiContext;