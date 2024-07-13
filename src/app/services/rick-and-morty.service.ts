import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private UrlBase= 'https://rickandmortyapi.com/api'
  // con esto se puede consumir servicios de http en el front
  constructor(private http: HttpClient) { }

  obtenerPeronajes(){
    return this.http.get(`${this.UrlBase}/character`)
  }

  nextPage(nextUrl:string){
    return this.http.get(`${nextUrl}`)

  }
  obtenerUnPersonaje(id: string){
    return this.http.get(`${this.UrlBase}/character/${id}`)
  }


}

