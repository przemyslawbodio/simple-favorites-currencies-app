import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import Menu from '../components/common/Menu'
import Routes from '../components/Routes'

import routePaths from '../routes'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Grid container
                      direction='column'
                      justify='center'
                      alignItems='center'>
                    <Paper>
                        <Menu routePaths={ routePaths } />
                        <Routes routePaths={ routePaths } />
                    </Paper>
                </Grid>
            </Router>
        )
    }
}
