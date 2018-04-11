import React from 'react'
import { TableCell } from 'material-ui/Table'

const CurrenciesHeaders = ({ headers }) => (
    headers.map( (header, index) => <TableCell key={ index }>{ header }</TableCell> )
)

export default CurrenciesHeaders