import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

import Grid from 'material-ui/Grid'

import { showFavorites, removeFavorite, confirmToRemove, areAllSelectedFavorites } from '../actions/favorites-actions'
import FavoritesTable from '../components/Favorites/Table'
import SimpleToolbar from '../components/common/SimpleToolbar'

class FavoritesCurrencies extends Component {
    constructor() {
        super( ...arguments )

        this.selectToRemove = this.selectToRemove.bind(this)
        this.selectAllToRemove = this.selectAllToRemove.bind(this)
        this.confirmToRemove = this.confirmToRemove.bind(this)
    }

    componentDidMount() {
        this.props.dispatch( showFavorites(this.props.favorites.codes) )
    }

    selectToRemove(currency) {
        this.props.dispatch( removeFavorite(currency) )
    }

    selectAllToRemove(event, isSelectedAll) {
        this.props.dispatch( areAllSelectedFavorites(isSelectedAll) )
    }

    confirmToRemove() {
        this.props.dispatch( confirmToRemove(this.props.favorites.selectedToRemove) )
    }

    render() {
        const { list, tableHeaders, selectedToRemove } = this.props.favorites

        return (
            <Grid container
                  direction='column'
                  justify='center'
                  alignItems='center'>

                { selectedToRemove.length > 0  && <SimpleToolbar selected={ selectedToRemove }
                                                                 label='Remove'
                                                                 confirmToAddToFavorites={ this.confirmToRemove } /> }
                {list.length > 0 ? <FavoritesTable headers={ tableHeaders }
                                                   currencies={ list }
                                                   selected={ selectedToRemove }
                                                   onSelectAll={ this.selectAllToRemove }
                                                   onSelect={ this.selectToRemove } /> :
                    <Button variant="raised"
                            color="secondary"
                            component={ Link }
                            to='/'>
                        Back to the list
                    </Button>
                }
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    favorites: {
        ...state.favorites,
        tableHeaders: state.currencies.tableHeaders
    }
})

export default connect( mapStateToProps )( FavoritesCurrencies )