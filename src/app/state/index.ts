import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.state";

// selectors
const getAppState = createFeatureSelector<State>('app');

export const getCurrentRoute = createSelector(
    getAppState,
    state => state.currentRoute
);
