import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}
