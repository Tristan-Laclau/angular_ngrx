import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { UserService } from "../services/user.service";
//import { UsersActions, UsersActionsTypes, GetAllUsersActionError, GetAllUsersActionSuccess} from "./users.actions";
 import { UsersActions, UsersActionsTypes, GetAllUsersActionError, GetAllUsersActionSuccess, GetTargetUserActionSuccess, GetTargetUserActionError} from "./users.actions";


@Injectable()  //décorateur spéficie qu'il s'agit d'un service
export class UsersEffects {
    constructor(private userService: UserService, private effectActions: Actions) {
    }

    getAllUsersEffect: Observable<UsersActions> = createEffect(     //nous souhaitons créer un effect ici sous condition, donc on écoute les actions
        () => this.effectActions.pipe(                           //dès qu'une action arrive, on vérifie son type
            ofType(UsersActionsTypes.GET_ALL_USERS),  //si l'action est de type GET_ALL_Users alors étape suivante : mergeMap
            mergeMap((action: UsersActions) => {    //mergeMap permet ici de renvoyer un Observable par action
                return this.userService.getUsers().pipe(  //attente réception des données en base (liste des avions)
                    map((users) => new GetAllUsersActionSuccess(users)), //si reçu, alors on retourne un Observable<Action>
                    //dont le payload est la liste des utilisateurs
                    //l'action une fois émise va être traité par le Reducer
                    //case UsersActionsTypes.GET_ALL_Users_SUCCESS:
                    catchError((err) => of(new GetAllUsersActionError(err.message)))     //s'il y a erreur, génération d'une autre action
                )
            })
        )
    );

    getTargetUserEffect: Observable<UsersActions> = createEffect(
      () => this.effectActions.pipe(
          ofType(UsersActionsTypes.GET_TARGET_USER),
          mergeMap((action: UsersActions) => {
              return this.userService.getTargetUser(action.payload).pipe(
                  map((users) => new GetTargetUserActionSuccess(users)),
                  catchError((err) => of(new GetTargetUserActionError(err.message)))
              )
          })
      )
  );
}
