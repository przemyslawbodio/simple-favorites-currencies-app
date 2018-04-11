export const isSelected = (currency, selected) => selected.indexOf( currency.code ) !== -1
export const areAllSelected = (selected, currencies) => selected.length > 0 && selected.length === currencies.length
export const isIndeterminate = (selected, currencies) => selected.length > 0 && selected.length < currencies.length