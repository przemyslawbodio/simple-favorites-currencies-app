import Currencies from '../containers/Currencies'
import FavoritesCurrencies from '../containers/FavoritesCurrencies'

const routePaths = [
    {
        path: '/',
        exact: true,
        menuLabel: 'Currencies listing',
        component: Currencies
    },
    {
        path: '/favorites',
        menuLabel: 'My favorites',
        component: FavoritesCurrencies
    }
]

export default routePaths