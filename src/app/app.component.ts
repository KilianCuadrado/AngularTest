import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users=DUMMY_USERS;
  //Con la exclamación le decimos a TypeScript que 
  // no se preocupe, que esta propiedad va a ser 
  // inicializada en algún momento. Y con ? 
  // le decimos que puede ser undefined, es decir,
  // que no tiene por qué tener un valor asignado 
  // en el momento de la creación del componente.
  selectUserId?: string;

  // La función get permite acceder al valor de una propiedad
  // calculada. En este caso, selectedUser es una propiedad
  // calculada que devuelve el usuario seleccionado.
  get selectedUser() {
    return this.users.find(user => user.id === this.selectUserId);
  }

  onSelectUser(id: string) {
    this.selectUserId = id;
  }
}