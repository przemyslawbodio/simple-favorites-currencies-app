import React from 'react'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const SimpleToolbar = ({ selected, confirmToAddToFavorites, label }) => (
    <AppBar position="static">
        <Toolbar>
            <Grid container
                  direction='row'
                  justify='space-between'
                  alignItems='center'>
                <Typography variant="title"
                            color="inherit">
                    You selected: { selected.length }
                </Typography>
                <Button color="inherit"
                        onClick={ () => confirmToAddToFavorites(selected) }>
                    { label }
                </Button>
            </Grid>
        </Toolbar>
    </AppBar>
)

export default SimpleToolbar
