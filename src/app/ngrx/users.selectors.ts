import { createSelector, createFeatureSelector } from "@ngrx/store";
import { User } from "../model/user.model";
import { UsersState } from "./users.state";


export const selectAlertusers = createSelector(
  createFeatureSelector('usersState'),  
  (state: UsersState) => {   
    let users : User[] = new Array<User>();
    
    state.users.forEach(a => {
      // if (a.development == true && a.design == true)
        users.push(a);
    })
    return users;
  }
);


