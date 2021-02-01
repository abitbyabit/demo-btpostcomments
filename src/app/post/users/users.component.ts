import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/shared/interface/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: IUser[] = [];
  @Input() currentUser: IUser;
  @Output() userSelected = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }
  onClickUser(user: IUser) {
    this.userSelected.emit(user);
  }
}
