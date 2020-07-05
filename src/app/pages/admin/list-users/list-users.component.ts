import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  hasMore = true;
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.activatedRoute.snapshot.data.users;
  }

  load(): void {
    this.userService
      .listPaginated(++this.currentPage)
      .subscribe(users => {
        this.users = this.users.concat(users);
        if (!users.length) {
          this.hasMore = false;
        }
      });
  }

}
