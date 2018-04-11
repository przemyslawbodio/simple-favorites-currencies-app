import {
    FETCH_CURRENCIES_BEGIN,
    FETCH_CURRENCIES_FAILURE,
    FETCH_CURRENCIES_SUCCESS
} from '../actions/constants'

const initialState = {
    list: [],
    tableHeaders: [],
    byCode: {},
    isLoading: false,
    error: null
}

export default function currencies(state = initialState, action) {
    switch(action.type) {
        case FETCH_CURRENCIES_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case FETCH_CURRENCIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.currenciesList,
                byCode: action.currenciesByCode,
                tableHeaders: action.tableHeaders
            }

        case FETCH_CURRENCIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}