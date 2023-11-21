



const initialStateFavorite = {
    favorites: [],
    displayFavorites: false,
};

const favoritesReducer = (state = initialStateFavorite, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        default:
            return state;
    }
}
export default favoritesReducer;