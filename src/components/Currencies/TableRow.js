import React from 'react'
import { TableCell, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'
import { isSelected } from '../../common/utils'

const CurrenciesTableRow = ({ currencies, onSelect, selected }) => (
    currencies.map((currency, index) =>
        <TableRow key={ index }
                  hover
                  role='checkbox'
                  selected={ isSelected( currency, selected ) }
                  onClick={ () => onSelect(currency.code) }>
            <TableCell padding="checkbox">
                <Checkbox checked={ isSelected( currency, selected ) } />
            </TableCell>
            <TableCell>{ currency.currency }</TableCell>
            <TableCell>{ currency.code }</TableCell>
            <TableCell>{ currency.mid }</TableCell>
        </TableRow>
    )
)

export default CurrenciesTableRow