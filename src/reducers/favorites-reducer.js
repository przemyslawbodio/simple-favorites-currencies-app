import {
    CONFIRM_TO_ADD_TO_FAVORITE_LIST,
    SHOW_FAVORITES,
    ADD_TO_REMOVE_FAVORITES_LIST,
    REMOVE_FROM_REMOVE_FAVORITES_LIST,
    CONFIRM_TO_REMOVE,
    ADD_ALL_TO_REMOVE_FAVORITES_LIST,
    REMOVE_ALL_FROM_REMOVE_FAVORITES_LIST
} from '../actions/constants'

const initialState = {
    codes: [],
    list: [],
    selectedToRemove: []
}

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case CONFIRM_TO_ADD_TO_FAVORITE_LIST:
            return {
                ...state,
                codes: [
                    ...state.codes,
                    ...action.ids
                ]
            }

        case SHOW_FAVORITES:
            return {
                ...state,
                codes: action.favoritesCodes,
                list: action.favoritesList,
            }

        case ADD_TO_REMOVE_FAVORITES_LIST:
            return {
                ...state,
                selectedToRemove: [
                    ...state.selectedToRemove,
                    action.code
                ]
            }

        case REMOVE_FROM_REMOVE_FAVORITES_LIST:
            return {
                ...state,
                selectedToRemove: [ ...state.selectedToRemove ]
                    .filter( code => code !== action.code )
            }

        case CONFIRM_TO_REMOVE:
            return {
                codes: action.favoritesCodes,
                list: action.favoritesList,
                selectedToRemove: action.selectedToRemove
            }

        case ADD_ALL_TO_REMOVE_FAVORITES_LIST:
            return {
                ...state,
                selectedToRemove: action.selectedToRemove
            }

        case REMOVE_ALL_FROM_REMOVE_FAVORITES_LIST:
            return {
                ...state,
                selectedToRemove: action.selectedToRemove
            }

        default:
            return state
    }
}
