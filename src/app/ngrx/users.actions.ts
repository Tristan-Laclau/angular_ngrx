import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum UsersActionsTypes{
    //Action : Get all USERS
    //s'agissant de l'action consistant à afficher tous les avions, nous avons 3 états possible
    GET_ALL_USERS = "[Users] Get All USERS",                //demande tous les utilisateurs
    GET_ALL_USERS_SUCCESS = "[Users] Get All USERS Success",//demande ok
    GET_ALL_USERS_ERROR = "[Users] Get All USERS Error",    //demande nok
    // GET_TARGET_USER= "[Users] Get All USERS",
    // GET_TARGET_USER_SUCCESS = "[Users] Get All USERS",
    // GET_TARGET_USER_ERROR = "[Users] Get All USERS"


}

//Get all USERS
export class GetAllUsersAction implements Action{
    type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS;
    constructor(public payload:any) {
    }
}
export class GetAllUsersActionSuccess implements Action{
    type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_SUCCESS;
    constructor(public payload:User[]) {
    }
}
export class GetAllUsersActionError implements Action{
    type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }
}

//Get target
// export class GetTargetUserAction implements Action{
//   type: UsersActionsTypes = UsersActionsTypes.GET_TARGET_USER;
//   constructor(public payload:any, public payload2:any) {
//   }
// }
// export class GetTargetUserActionSuccess implements Action{
//   type: UsersActionsTypes = UsersActionsTypes.GET_TARGET_USER_SUCCESS;
//   constructor(public payload:User[]) {
//   }
// }
// export class GetTargetUserActionError implements Action{
//   type: UsersActionsTypes = UsersActionsTypes.GET_TARGET_USER_ERROR;
//   constructor(public payload:string) {   //message d'erreur
//   }
// }

export type UsersActions = GetAllUsersAction | GetAllUsersActionSuccess | GetAllUsersActionError
// | GetTargetUserAction | GetTargetUserActionSuccess | GetTargetUserActionError
;
