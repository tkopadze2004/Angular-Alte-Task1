import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyStructuralIfDirective } from './directives/my-structural-if.directive';
import { MyClassDirective } from './directives/my-class.directive';
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyStructuralIfDirective, MyClassDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-Task1';

  // isActive?: boolean;

  users: User[] = [
    {
      id: 1,
      firstName: 'Noah',
      lastName: 'Garcia',
      isActive: true,
      role: Role.Admin,
    },
    {
      id: 2,
      firstName: 'George',
      lastName: 'Miller ',
      isActive: false,
      role: Role.User,
    },
    {
      id: 3,
      firstName: 'Mariam',
      lastName: 'Dvalishvili',
      isActive: true,
      role: Role.Admin,
    },
    {
      id: 4,
      firstName: 'Anna',
      lastName: 'Smth ',
      isActive: false,
      role: Role.User,
    },
  ];
  deleteitem(index: number) {
    this.users.splice(index, 1);
  }
}
