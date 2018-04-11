import React from 'react'
import { Route } from 'react-router-dom'

const map = (route, index) => <Route key={ index }
                                      exact={ route.exact }
                                      path={ route.path }
                                      component={ route.component } />

const Routes = ({ routePaths }) => (
    <div>
        { routePaths.map(map) }
    </div>
)

export default Routes
