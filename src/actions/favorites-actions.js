import {
    CONFIRM_TO_ADD_TO_FAVORITE_LIST,
    SHOW_FAVORITES,
    ADD_TO_REMOVE_FAVORITES_LIST,
    REMOVE_FROM_REMOVE_FAVORITES_LIST,
    CONFIRM_TO_REMOVE,
    ADD_ALL_TO_REMOVE_FAVORITES_LIST,
    REMOVE_ALL_FROM_REMOVE_FAVORITES_LIST
} from './constants'

export const confirmToAddToFavorites = ids => (dispatch, getState) => {
    const uniqueIds = ids.filter(id => getState().favorites.codes.indexOf(id) === -1)

    dispatch({
        type: CONFIRM_TO_ADD_TO_FAVORITE_LIST,
        ids: uniqueIds
    })
}

const getFavorites = (favoritesCodes, favoritesList) => ({
    type: SHOW_FAVORITES,
    favoritesCodes,
    favoritesList,
})

export const showFavorites = codes => (dispatch, getState) => {
    const favoritesList = codes.map(code => getState().currencies.byCode[ code ])

    return dispatch(
        getFavorites( codes, favoritesList )
    )
}

const onSelectToRemove = code => ({
    type: ADD_TO_REMOVE_FAVORITES_LIST,
    code
})

const onDeselectToRemove = code => ({
    type: REMOVE_FROM_REMOVE_FAVORITES_LIST,
    code
})

export const removeFavorite = code => (dispatch, getState) => {
    if (getState().favorites.selectedToRemove.indexOf(code) > -1) {
        return dispatch(onDeselectToRemove(code))
    }

    return dispatch(onSelectToRemove(code))
}

export const confirmToRemove = codesToRemove => (dispatch, getState) => {
    const { list, codes } = getState().favorites

    const filterCallback = () => item => codesToRemove.indexOf( item.code || item ) === -1

    const favoritesCodes = codes.filter(filterCallback())
    const favoritesList = list.filter(filterCallback())

    return dispatch({
        type: CONFIRM_TO_REMOVE,
        favoritesList,
        favoritesCodes,
        selectedToRemove: []
    })
}

const onAllFavoritesSelected = selectedToRemove => ({
    type: ADD_ALL_TO_REMOVE_FAVORITES_LIST,
    selectedToRemove
})

const onAllFavoritesDeselected = () => ({
    type: REMOVE_ALL_FROM_REMOVE_FAVORITES_LIST,
    selectedToRemove: []
})

export const areAllSelectedFavorites = areSelectedAll => (dispatch, getState) => {

    if (areSelectedAll) {
        const currencies = getState()
            .favorites
            .codes

        return dispatch(onAllFavoritesSelected(currencies))
    }

    return dispatch(onAllFavoritesDeselected())
}