import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'

import { fetchCurrencies, selectCurrency, selectAllCurrencies } from '../actions/currencies-actions'
import { confirmToAddToFavorites } from '../actions/favorites-actions'
import CurrenciesTable from '../components/Currencies/Table'
import SimpleToolbar from '../components/common/SimpleToolbar'

class Currencies extends Component {
    constructor() {
        super( ...arguments )

        this.selectCurrency = this.selectCurrency.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.confirmToAddToFavorites = this.confirmToAddToFavorites.bind(this)
    }

    componentDidMount() {
        this.props.dispatch( fetchCurrencies() )
    }

    selectAll(event, currency) {
        this.props.dispatch( selectAllCurrencies(currency) )
    }

    selectCurrency(currency) {
        this.props.dispatch( selectCurrency(currency) )
    }

    confirmToAddToFavorites(selected) {
        this.props.dispatch( confirmToAddToFavorites(selected) )
    }

    render() {
        const { list, isLoading, error, tableHeaders } = this.props.currencies
        const selectedCurrencies = this.props.selectedCurrencies

        return (
            <Grid container
                  direction='column'
                  justify='center'
                  alignItems='center'>
                { selectedCurrencies.length > 0  && <SimpleToolbar selected={ selectedCurrencies }
                                                                   label='Add to favorites'
                                                                   confirmToAddToFavorites={ this.confirmToAddToFavorites } /> }
                { isLoading ?
                    <CircularProgress />  : <CurrenciesTable headers={ tableHeaders }
                                                             currencies={ list }
                                                             selected={ selectedCurrencies }
                                                             onSelectAll={ this.selectAll }
                                                             onSelect={ this.selectCurrency } /> }
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
    selectedCurrencies: state.selectedCurrencies
})

export default connect( mapStateToProps )( Currencies )