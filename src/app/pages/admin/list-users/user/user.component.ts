import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  getRolesName() {
    return this.user.roles.map(role => role.name).join(', ');
  }

}
