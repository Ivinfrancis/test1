import { createStore } from 'redux';
import rootReducer from './Reducers';
import { Components } from './components';

const Store = createStore(rootReducer);

export default Store;
0