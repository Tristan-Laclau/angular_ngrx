import { User } from "../model/user.model";

export enum UsersStateEnum{  // les différents états du state
    LOADING = "Connecting",    //chargement en cours
    LOADED = "Connected",      //connecté
    ERROR = "Error",        //erreur
    INITIAL = "Initial"     //état initial
}
export interface UsersState {    //structure de notre STATE
    users : User[],          //liste d'utilisateurs qui s'affichent
    errorMessage:string,             //un message d'erreur
    dataState : UsersStateEnum   //état du state
}
//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState : UsersState = {
    users : [],
    errorMessage:"",
    dataState : UsersStateEnum.INITIAL
}