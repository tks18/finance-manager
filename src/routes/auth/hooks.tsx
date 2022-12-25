import { useOutletContext } from 'react-router-dom';

type ContextType = { userToken: string };

export const useAuthOutletContext = () => useOutletContext<ContextType>();
