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
  recetasData: any = {};

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe(data => {
      this.recetasData = data;
      this.niveles = [
        {
          id: 'nivelDos',
          titulo: 'Nivel 2 - Aprendiz',
          descripcion: 'Recetas básicas para comenzar tu aventura culinaria en Hyrule.'
        },
        {
          id: 'nivelTres',
          titulo: 'Nivel 3 - Cocinero',
          descripcion: 'Recetas intermedias que potencian tus habilidades de supervivencia.'
        },
        {
          id: 'nivelCuatro',
          titulo: 'Nivel 4 - Chef Maestro',
          descripcion: 'Recetas avanzadas para los desafíos más grandes del reino.'
        },
        {
          id: 'nivelCinco',
          titulo: 'Nivel 5 - Leyenda Culinaria',
          descripcion: 'Las recetas más poderosas, reservadas solo para los verdaderos maestros.'
        }
      ];
      this.dataLoaded = true;
    });
  }

  getNivelIcon(nivelId: string): string {
    const icons: { [key: string]: string } = {
      'nivelDos': '🌱',
      'nivelTres': '⚔️',
      'nivelCuatro': '🛡️',
      'nivelCinco': '👑'
    };
    return icons[nivelId] || '🍽️';
  }

  getDifficulty(nivelId: string): number {
    const difficulties: { [key: string]: number } = {
      'nivelDos': 25,
      'nivelTres': 50,
      'nivelCuatro': 75,
      'nivelCinco': 100
    };
    return difficulties[nivelId] || 0;
  }

  getRecetasCount(nivelId: string): number {
    if (!this.recetasData[nivelId]) return 0;

    let count = 0;
    const nivel = this.recetasData[nivelId];

    Object.keys(nivel).forEach(categoria => {
      if (nivel[categoria] && nivel[categoria].platos) {
        count += nivel[categoria].platos.length;
      }
    });

    return count;
  }
}
