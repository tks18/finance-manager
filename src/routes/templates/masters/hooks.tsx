import { useOutletContext } from 'react-router-dom';
import { IBaseDBApiConfig } from '@plugins/backend/types';

type ContextType = { config: IBaseDBApiConfig; userToken: string };

export const useMasterOutletContext = () => useOutletContext<ContextType>();
