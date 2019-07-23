import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';


const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            //return new state for immutability
            return {
                //pulling out properties of old state to new object with ...
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name:  action.placeName
                })
            };
        case DELETE_PLACE:
            return {
                ...state, 
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
    }
};

export default reducer;