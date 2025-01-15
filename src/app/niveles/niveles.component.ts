import { Component } from '@angular/core';
import { RecetasService } from '../recetas.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrl: './niveles.component.css'
})
export class NivelesComponent {
  niveles: { id: string; titulo: string; descripcion: string }[] = [];
  dataLoaded = false;

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe(data => {
      this.niveles = [
        { id: 'nivelDos', titulo: 'Nivel 2', descripcion: 'Recetas para habilidades iniciales de los caballos.' },
        { id: 'nivelTres', titulo: 'Nivel 3', descripcion: 'Recetas avanzadas para potenciar habilidades.' },
        { id: 'nivelCuatro', titulo: 'Nivel 4', descripcion: 'Recetas maestras para los mayores desafíos.' }
      ];
      console.log(data);
      this.dataLoaded = true;
    });
  }
}
