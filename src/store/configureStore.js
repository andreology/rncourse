//configuring store
import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    //single place to update store.
    return createStore(rootReducer);
};

export default configureStore;