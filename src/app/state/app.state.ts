import { createAction, createReducer, on } from "@ngrx/store"
import { AppActions } from "./actions";

// Gloabl app state
export interface State {
    currentRoute: string;
}
export const initialState: State = {
    currentRoute: "",
};

export const appReducer = createReducer<State>(
    initialState,
    on(AppActions.setCurrentRoute, (state, action): State => {
        return { ...state, currentRoute: action.route }
    }),
);