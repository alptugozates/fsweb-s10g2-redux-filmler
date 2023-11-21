import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialStateFavorite = {
    favorites: [],
    displayFavorites: true,
};


const favoritesReducer = (state = initialStateFavorite, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload),
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            }
        default:
            return state;
    }
}
export default favoritesReducer;