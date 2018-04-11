import favorites from './favorites-reducer'
import {CONFIRM_TO_ADD_TO_FAVORITE_LIST} from "../actions/constants";

describe('reducers', () => {
    describe('favorites', () => {
        const initialState = {
            codes: [],
            list: [],
            selectedToRemove: []
        }

        it('should provide the initial state', () => {
            expect(favorites(undefined, {})).toEqual(initialState)
        })

        it('should handle CONFIRM_TO_ADD_TO_FAVORITE_LIST action', () => {
            expect(
                favorites({}, { type: 'CONFIRM_TO_ADD_TO_FAVORITE_LIST', ids: [ 'THB' ] })
            ).toEqual({
                codes: ['THB']
            })
        })
    })
})