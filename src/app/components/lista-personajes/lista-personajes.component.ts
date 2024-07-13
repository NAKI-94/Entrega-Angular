import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonajesService } from '../../services/personajes.service';
import {
  MatDialog,
  
} from '@angular/material/dialog';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  providers: [RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {
  listaDePersonajes: any = {};

  constructor(
    private dialog: MatDialog,
    private RyM: RickAndMortyService,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.RyM.obtenerPeronajes().subscribe({
      next: (data: any) => {
        this.listaDePersonajes = data;
        this.personajesService.setPersonajes(data);
        console.log(this.listaDePersonajes);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  siguientePagina(): void {
    if (this.listaDePersonajes.info.next) {
      this.RyM.nextPage(this.listaDePersonajes.info.next).subscribe({
        next: (data: any) => {
          this.listaDePersonajes = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  paginaAnterior(): void {
    if (this.listaDePersonajes.info.prev) {
      this.RyM.nextPage(this.listaDePersonajes.info.prev).subscribe({
        next: (data: any) => {
          this.listaDePersonajes = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  openDialog(id: string): void {
    this.dialog.open(PersonajeComponent, {
      data: {
        id
      },
    });
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}