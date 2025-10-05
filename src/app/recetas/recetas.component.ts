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
  categorias: { categoria: string; platos: any[]; descripcion?: string }[] = [];
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
      'vivaz': '❤️',
      'sigilo': '👤',
      'defensa': '🛡️',
      'ataque': '⚔️',
      'salud': '❤️',
      'energia': '⭐',
      'frio': '❄️',
      'calor': '🔥',
      'gélido': '❄️',
      'picante': '🌶️',
      'recio': '⚔️',
      'raudo': '💨',
      'protector': '🛡️',
      'tonificante': '💪',
      'vigoroso': '⚡',
      'sigiloso': '👻',
      'electrizante': '⚡',
      'ignífugo': '🔥',
      'maestro': '👑'
    };
    return icons[categoria.toLowerCase()] || '🍽️';
  }

  getIngredienteIcon(ingrediente: string): string {
    const ingredienteLower = ingrediente.toLowerCase();

    if (ingredienteLower.includes('hierba') || ingredienteLower.includes('hoja')) return 'grass';
    if (ingredienteLower.includes('zanahoria')) return 'agriculture';
    if (ingredienteLower.includes('bulbo')) return 'eco';
    if (ingredienteLower.includes('pescado') || ingredienteLower.includes('pez') ||
        ingredienteLower.includes('salmón') || ingredienteLower.includes('dorada') ||
        ingredienteLower.includes('caracol')) return 'set_meal';
    if (ingredienteLower.includes('carne')) return 'restaurant';
    if (ingredienteLower.includes('fruto') || ingredienteLower.includes('fruta') ||
        ingredienteLower.includes('manzana') || ingredienteLower.includes('durián') ||
        ingredienteLower.includes('baya')) return 'local_florist';
    if (ingredienteLower.includes('seta') || ingredienteLower.includes('hongo') ||
        ingredienteLower.includes('trufa')) return 'park';
    if (ingredienteLower.includes('sal') || ingredienteLower.includes('halita')) return 'grain';
    if (ingredienteLower.includes('arroz')) return 'rice_bowl';
    if (ingredienteLower.includes('leche') || ingredienteLower.includes('manteca') ||
        ingredienteLower.includes('mantequilla')) return 'water_drop';
    if (ingredienteLower.includes('huevo')) return 'egg';
    if (ingredienteLower.includes('especias') || ingredienteLower.includes('goron')) return 'spa';
    if (ingredienteLower.includes('miel')) return 'honey_pot';
    if (ingredienteLower.includes('trigo')) return 'agriculture';
    if (ingredienteLower.includes('calabaza')) return 'pumpkin';
    if (ingredienteLower.includes('rábano')) return 'set_meal';
    if (ingredienteLower.includes('semilla') || ingredienteLower.includes('loto')) return 'eco';

    return 'restaurant_menu';
  }

  getEfectoIcon(categoria: string): string {
    const icons: { [key: string]: string } = {
      'fuerza': 'fitness_center',
      'velocidad': 'speed',
      'resistencia': 'shield',
      'vivaz': 'favorite',
      'sigilo': 'visibility_off',
      'defensa': 'security',
      'ataque': 'gps_fixed',
      'salud': 'favorite',
      'energia': 'bolt',
      'frio': 'ac_unit',
      'calor': 'whatshot',
      'gélido': 'ac_unit',
      'picante': 'whatshot',
      'recio': 'gps_fixed',
      'raudo': 'speed',
      'protector': 'shield',
      'tonificante': 'fitness_center',
      'vigoroso': 'bolt',
      'sigiloso': 'visibility_off',
      'electrizante': 'flash_on',
      'ignífugo': 'whatshot',
      'maestro': 'star'
    };
    return icons[categoria.toLowerCase()] || 'restaurant';
  }
}
