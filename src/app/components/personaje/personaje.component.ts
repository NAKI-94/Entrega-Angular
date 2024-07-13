import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatDialogContent, MatDialogTitle,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [MaterialModule,MatDialogTitle, MatDialogContent,HttpClientModule],
  providers :[RickAndMortyService],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss'
})
export class PersonajeComponent implements OnInit {
  personaje :any;
constructor(
  private RyM: RickAndMortyService,@Inject(MAT_DIALOG_DATA) public data: any){

}
  ngOnInit(): void {
   this.RyM.obtenerUnPersonaje(this.data.id).subscribe({
    next: respuesta =>{
      this.personaje = respuesta
    }
   })
  }

}