import { Component,input,output } from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  // Las señales usan () ya que actúan como funciones 
  // para obtener su valor actual. Esto permite que 
  // Angular detecte cambios y actualice la vista 
  // automáticamente cuando el valor de la señal cambie. 
  // Esta variable user es una señal que representa el 
  // usuario que se va a mostrar en este componente.
  user=input.required<User>();

  // La señal select es un mecanismo de comunicación
  // entre componentes. Permite que el componente 
  // UserComponent emita un evento cuando se selecciona un usuario, 
  // y que el componente padre 
  // (AppComponent) pueda escuchar ese evento y reaccionar 
  // en consecuencia. En este caso, cuando se selecciona 
  // un usuario, se emite el id del usuario seleccionado.
  select = output<string>();
  selected = input.required<boolean>();

  get imagePath() {
    return '../../assets/users/'+ this.user().avatar;
  }

  // La función onSelectUser() se llama cuando se hace clic
  // en el botón del usuario. Esta función emite un evento 
  // con el id del usuario seleccionado, que puede ser 
  // escuchado por el componente padre (AppComponent).
  onSelectUser() {
    this.select.emit(this.user().id);
  }

}
