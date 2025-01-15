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
          this.nivelTitulo = nivelId.replace('nivel', 'Nivel ');
          this.categorias = this.recetasService.getCategoriasPorNivel(data, nivelId);
        }
        this.dataLoaded = true;
      });
    }
  }
}
