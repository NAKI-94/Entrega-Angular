import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajesSource = new BehaviorSubject<any>({});
  personajes$ = this.personajesSource.asObservable();

  setPersonajes(personajes: any) {
    this.personajesSource.next(personajes);
  }
}
