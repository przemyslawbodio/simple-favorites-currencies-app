import React from 'react'
import Grid from 'material-ui/Grid'
import { Link } from 'react-router-dom'

import {
    MenuItem,
    MenuList
} from 'material-ui/Menu'

const map = (route, index) =>
    <MenuItem key={ index }
              component={ Link }
              to={ route.path }>
        { route.menuLabel }
    </MenuItem>

const Menu = ({ routePaths }) => (
    <MenuList>
        <Grid container
              direction='row'>
            { routePaths.map(map) }
        </Grid>
    </MenuList>
)

export default Menu
