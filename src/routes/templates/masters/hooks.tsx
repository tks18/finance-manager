import { useOutletContext } from 'react-router-dom';
import { IBaseDBApiConfig } from '@plugins/backend/types';

type ContextType = { config: IBaseDBApiConfig };

export const useMasterOutletContext = () => useOutletContext<ContextType>();
