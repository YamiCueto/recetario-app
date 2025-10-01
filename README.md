# 🍳 Recetario App - Cocina de Hyrule

Una aplicación web interactiva desarrollada en Angular que presenta un completo recetario de cocina basado en el universo de The Legend of Zelda. Explora recetas organizadas por niveles de habilidad y categorías de efectos.

## 🌟 Características

- **Navegación por niveles**: Organización de recetas por dificultad (Nivel 2, 3, 4 y 5)
- **Categorías de efectos**: Recetas clasificadas por beneficios (fuerza, velocidad, resistencia, sigilo, etc.)
- **Interfaz responsive**: Diseño adaptable construido con Angular Material y Bootstrap
- **Datos estructurados**: Información detallada de ingredientes y efectos para cada receta

## 🚀 Demo en vivo

Visita la aplicación desplegada en GitHub Pages: [https://yamicueto.github.io/recetario-app/](https://yamicueto.github.io/recetario-app/)

## 🛠️ Tecnologías utilizadas

- **Angular 18** - Framework principal
- **Angular Material** - Componentes UI
- **Bootstrap 5** - Estilos y responsive design
- **TypeScript** - Lenguaje de programación
- **GitHub Pages** - Hosting y despliegue

## 🏗️ Instalación y desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Configuración del proyecto

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/YamiCueto/recetario-app.git
   cd recetario-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   ```

   Navega a `http://localhost:4200/` para ver la aplicación en acción.

## 📦 Construcción y despliegue

### Construcción para producción

```bash
npm run build
```

Los archivos generados se almacenarán en el directorio `dist/`.

### Despliegue en GitHub Pages

```bash
npm run deploy
```

## 🧪 Testing

### Ejecutar pruebas unitarias

```bash
npm test
```

### Ejecutar con coverage

```bash
npm run test:coverage
```

## 📁 Estructura del proyecto

```text
src/
├── app/
│   ├── niveles/          # Componente de selección de niveles
│   ├── recetas/          # Componente de visualización de recetas
│   ├── recetas.service.ts # Servicio para manejo de datos
│   └── app-routing.module.ts # Configuración de rutas
├── assets/
│   └── recetas.json      # Base de datos de recetas
└── styles.css            # Estilos globales
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Yami Cueto** - [GitHub](https://github.com/YamiCueto)

---

⭐ ¡No olvides dar una estrella si este proyecto te fue útil!
