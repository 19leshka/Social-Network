export enum AppActionTypes {
    SET_INITIALIZED = 'SET_INITIALIZED'
}

export interface AppState {
    initialized: boolean
}

interface SetInitializedAction {
    type: AppActionTypes.SET_INITIALIZED,
    payload: boolean
}

export type AppAction = SetInitializedAction