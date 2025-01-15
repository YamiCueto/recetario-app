import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private jsonUrl = './assets/recetas.json';
  constructor(private http: HttpClient) { }

  getRecetas(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  getCategoriasPorNivel(data: any, nivel: string): { categoria: string; platos: any[] }[] {
    if (!data[nivel]) {
      return [];
    }
    return Object.keys(data[nivel]).map(categoria => ({
      categoria,
      platos: data[nivel][categoria].platos
    }));
  }
}
