import NgRedux from 'ng2-redux';
import { combineReducers } from 'redux';
import { globalActions } from './actions.store';


export const globalReducerInitState = {
    Data: undefined
}

export const appInitialState = {
    globalReducerInitState
}

export function globalReducer(state: any = globalReducerInitState, action) {
    switch (action.type) {
        case globalActions.getMainData:
            let notesCol = state.Notes.concat(action.payload);
            localStorage.setItem("notes", JSON.stringify(notesCol));
            return {
                Data: notesCol
            }
        default:
            return state;
    }
}


export const RootReducer = combineReducers({
    user: globalReducer, 
});