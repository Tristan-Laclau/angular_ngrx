import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DelTargetUserAction } from 'src/app/ngrx/users.actions';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usersState$: Observable<UsersState> | null = null
  user: User | undefined;
  
  constructor(public userService: UserService, private router: Router, private store: Store<any>) {
    this.usersState$ = this.store.select('users').pipe(
      map(state => { return this.user = state })
    )
   }

  ngOnInit(): void {
    
  }
  
  onLogout() {
    if (this.user!=null) {
     this.store.dispatch(new DelTargetUserAction(this.user.id));  
    }
    this.router.navigateByUrl('/')
  }

}
