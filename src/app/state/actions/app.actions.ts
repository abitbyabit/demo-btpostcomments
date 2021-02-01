import { createAction, props } from '@ngrx/store';

export const setCurrentRoute = createAction(
    '[App] Set current route',
    props<{ route: string }>()
);
