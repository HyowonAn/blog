import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = Map({
    modal: Map({
        remove : false,
        login: false
    })
});

export default handleActions({
    [SHOW_MODAL]: (state,action) => {
        const { payload: modalName} = action;
        return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state,action) => {
        const {payload: modalName} = action;
        return state.setIn(['modal',modalName], false);
    }
},initialState)