import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  nivelTitulo = '';
  categorias: { categoria: string; platos: any[] }[] = [];
  dataLoaded = false;

  constructor(private route: ActivatedRoute, private recetasService: RecetasService) {}

  ngOnInit(): void {
    const nivelId = this.route.snapshot.paramMap.get('nivelId');
    if (nivelId) {
      this.recetasService.getRecetas().subscribe(data => {
        if (data[nivelId]) {
          this.nivelTitulo = this.getNivelName(nivelId);
          this.categorias = this.recetasService.getCategoriasPorNivel(data, nivelId);
        }
        this.dataLoaded = true;
      });
    }
  }

  private getNivelName(nivelId: string): string {
    const nombres: { [key: string]: string } = {
      'nivelDos': 'Nivel 2 - Aprendiz',
      'nivelTres': 'Nivel 3 - Cocinero',
      'nivelCuatro': 'Nivel 4 - Chef Maestro',
      'nivelCinco': 'Nivel 5 - Leyenda Culinaria'
    };
    return nombres[nivelId] || nivelId.replace('nivel', 'Nivel ');
  }

  getCategoriaIcon(categoria: string): string {
    const icons: { [key: string]: string } = {
      'fuerza': '💪',
      'velocidad': '⚡',
      'resistencia': '🛡️',
      'sigilo': '👤',
      'defensa': '🛡️',
      'ataque': '⚔️',
      'salud': '❤️',
      'energia': '⭐',
      'frio': '❄️',
      'calor': '🔥'
    };
    return icons[categoria.toLowerCase()] || '🍽️';
  }

  getIngredienteIcon(ingrediente: string): string {
    const ingredienteLower = ingrediente.toLowerCase();

    if (ingredienteLower.includes('hierba') || ingredienteLower.includes('hoja')) return 'grass';
    if (ingredienteLower.includes('zanahoria')) return 'agriculture';
    if (ingredienteLower.includes('bulbo')) return 'eco';
    if (ingredienteLower.includes('pescado') || ingredienteLower.includes('pez')) return 'set_meal';
    if (ingredienteLower.includes('carne')) return 'restaurant';
    if (ingredienteLower.includes('fruto') || ingredienteLower.includes('fruta')) return 'local_florist';
    if (ingredienteLower.includes('seta') || ingredienteLower.includes('hongo')) return 'park';
    if (ingredienteLower.includes('sal') || ingredienteLower.includes('halita')) return 'grain';

    return 'restaurant_menu';
  }

  getEfectoIcon(categoria: string): string {
    const icons: { [key: string]: string } = {
      'fuerza': 'fitness_center',
      'velocidad': 'speed',
      'resistencia': 'shield',
      'sigilo': 'visibility_off',
      'defensa': 'security',
      'ataque': 'gps_fixed',
      'salud': 'favorite',
      'energia': 'bolt',
      'frio': 'ac_unit',
      'calor': 'whatshot'
    };
    return icons[categoria.toLowerCase()] || 'restaurant';
  }
}
