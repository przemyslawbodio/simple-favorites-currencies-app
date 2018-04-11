import API from '../api/APIGenerator'
import {
    FETCH_CURRENCIES_BEGIN,
    FETCH_CURRENCIES_SUCCESS,
    FETCH_CURRENCIES_FAILURE,
    SELECT_CURRENCY,
    DESELECT_CURRENCY,
    SELECT_ALL_CURRENCY,
    DESELECT_ALL_CURRENCY
} from './constants'

export const fetchCurrenciesBegin = () => ({
    type: FETCH_CURRENCIES_BEGIN
})

export const fetchCurrenciesSuccess = currencies => ({
    type: FETCH_CURRENCIES_SUCCESS,
    tableHeaders: Object.keys( currencies[0] ),
    currenciesByCode: currencies.reduce((currencies, currency) => ({ ...currencies, [currency.code]: currency }), {}),
    currenciesList: currencies
})

export const fetchCurrenciesError = error => ({
    type: FETCH_CURRENCIES_FAILURE,
    error
})

export const fetchCurrencies = () => dispatch => {
    dispatch(fetchCurrenciesBegin())

    const dispatchSuccessFetch = data => {
        dispatch(fetchCurrenciesSuccess(data))
        return data
    }

    const dispatchFailFetch = error => dispatch(fetchCurrenciesError(error))

    return new API()
        .exchangerates()
        .tables()
        .A()
        .generateAPI()
        .get()
        .then(dispatchSuccessFetch)
        .catch(dispatchFailFetch)
}

const onCurrencyWasSelected = code => ({
    type: SELECT_CURRENCY,
    code
})

const onCurrencyWasDeselected = code => ({
    type: DESELECT_CURRENCY,
    code
})

export const selectCurrency = code => (dispatch, getState) => {
    if (getState().selectedCurrencies.indexOf(code) > -1) {
        return dispatch(onCurrencyWasDeselected(code))
    }

    return dispatch(onCurrencyWasSelected(code))
}

const whenCurrencyWasAllSelected = currencies => ({
    type: SELECT_ALL_CURRENCY,
    currencies
})

const whenCurrencyWasAllDeselected = () => ({
    type: DESELECT_ALL_CURRENCY,
})

export const selectAllCurrencies = areSelectedAll => (dispatch, getState) => {

    if (areSelectedAll) {
        const currencies = getState()
            .currencies
            .list
            .map(currency => currency.code)

        return dispatch(whenCurrencyWasAllSelected(currencies))
    }

    return dispatch(whenCurrencyWasAllDeselected())
}