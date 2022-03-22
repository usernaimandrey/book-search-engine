import { useContext } from 'react';
import dataContext from '../Context';

const useData = () => useContext(dataContext);

export default useData;
