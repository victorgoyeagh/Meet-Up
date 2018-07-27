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
            let data = state.Data.concat(action.payload);
            return {
                Data: data
            }
        default:
            return state;
    }
}


export const RootReducer = combineReducers({
    global: globalReducer
});