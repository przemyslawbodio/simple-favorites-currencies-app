import { combineReducers } from 'redux'

import favorites from './favorites-reducer'
import selectedCurrencies from './selected-currencies-reducer'
import currencies from './currencies-reducer'

export default combineReducers({
    currencies,
    selectedCurrencies,
    favorites
})
