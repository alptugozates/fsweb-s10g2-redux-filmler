import { combineReducers } from 'redux';
import reducer from './movieReducer';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';
export default combineReducers({
    movies: movieReducer,
    favorites: favoritesReducer,

})