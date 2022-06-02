export enum UsersActionsTypes {
    GET_ALL_USERS = "[Users] Get All Users",
    GET_TARGET_USER = "[Users] Get Target User",

}

//nous définissons ici un objet évènement caractérisé par le type d'évt et son contenu indéfini
export interface ActionEvent {
    type : UsersActionsTypes,
    payload? : any
}

export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T,
    errorMessage?:string
}