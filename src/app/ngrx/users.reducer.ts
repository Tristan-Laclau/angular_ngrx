import { UsersState, UsersStateEnum, initState } from "./users.state";
import { Action } from "@ngrx/store"
import { UsersActions, UsersActionsTypes } from "./users.actions";

export function UsersReducer(state : UsersState = initState, action:Action) : UsersState {
    switch(action.type){    //pour chaque action, on retourne un clone du state (immutable)
        case UsersActionsTypes.GET_ALL_USERS:
            return {...state, dataState:UsersStateEnum.LOADING }   //renvoi clone du state + le nouveau dataState
        case UsersActionsTypes.GET_ALL_USERS_SUCCESS:
        // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {...state, dataState:UsersStateEnum.LOADED, users:(<UsersActions> action).payload}
            // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case UsersActionsTypes.GET_ALL_USERS_ERROR :
            return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions> action).payload}

            case UsersActionsTypes.GET_TARGET_USER :
              return {...state, dataState:UsersStateEnum.LOADING}
          case UsersActionsTypes.GET_TARGET_USER_SUCCESS :
              return {...state, dataState:UsersStateEnum.LOADED, users:(<UsersActions> action).payload}
          case UsersActionsTypes.GET_TARGET_USER_ERROR :
              return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions> action).payload}
        case UsersActionsTypes.DEL_USER:
            return { ...state, dataState: UsersStateEnum.DELETE,users:(<UsersActions> action).payload }

        default :
            return {...state}
    }
}   //en bref : le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state
