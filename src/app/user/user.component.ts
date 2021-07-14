import { Component, Input } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  public user: User|undefined;

  public goToDetails(user: User): void {
    //TODO: Navigate to user details screen: "https://api.github.com/users/{user}"
  }
}
