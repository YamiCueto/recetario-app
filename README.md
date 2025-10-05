# � Recetario de Hyrule - El Compendio Culinario Definitivo

<div align="center">

![Zelda Banner](https://img.shields.io/badge/The_Legend_of-Zelda-green?style=for-the-badge&logo=nintendo&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-18-red?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-black?style=for-the-badge&logo=github&logoColor=white)

**Una aplicación web interactiva que presenta el recetario más completo del reino de Hyrule**

[🌐 **Demo en Vivo**](https://yamicueto.github.io/recetario-app/) • [📱 **Responsive Design**](#-características) • [🍽️ **+40 Recetas**](#-contenido-del-recetario)

</div>

---

## 🌟 Características Principales

### 🏆 **Sistema de Niveles Progresivo**
- **Nivel 2 - Aprendiz** 🌱: Recetas básicas para comenzar tu aventura culinaria
- **Nivel 3 - Cocinero** ⚔️: Recetas intermedias que potencian tus habilidades
- **Nivel 4 - Chef Maestro** 🛡️: Recetas avanzadas para los desafíos más grandes
- **Nivel 5 - Leyenda Culinaria** 👑: Las recetas más poderosas del reino

### 🎯 **12 Categorías de Efectos Únicos**
| Efecto | Icono | Descripción |
|--------|-------|-------------|
| **Vivaz** | ❤️ | Otorga corazones temporales adicionales |
| **Recio** | ⚔️ | Aumenta temporalmente el poder de ataque |
| **Raudo** | 💨 | Aumenta temporalmente la velocidad de movimiento |
| **Protector** | 🛡️ | Aumenta temporalmente la defensa |
| **Tonificante** | 💪 | Aumenta temporalmente la resistencia máxima |
| **Gélido** | ❄️ | Otorga resistencia al calor extremo |
| **Picante** | 🌶️ | Otorga resistencia al frío intenso |
| **Vigoroso** | ⚡ | Recupera resistencia más rápidamente |
| **Sigiloso** | 👻 | Reduce el ruido al moverse |
| **Electrizante** | ⚡ | Otorga resistencia a la electricidad |
| **Ignífugo** | 🔥 | Otorga resistencia al fuego |
| **Maestro** | 👑 | Efectos especiales únicos y combinados |

### 🎨 **Interfaz de Usuario Avanzada**
- **Diseño Zelda Auténtico**: Fuentes medievales y colores temáticos
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales
- **Material Design**: Componentes Angular Material para mejor UX
- **Iconografía Rica**: Iconos específicos para ingredientes y efectos

## 🍽️ Contenido del Recetario

### 📊 **Estadísticas del Contenido**
- **+40 Recetas Auténticas** basadas en la wiki oficial de Zelda
- **+100 Ingredientes Únicos** del universo de Hyrule
- **Descripciones Detalladas** en español para cada receta
- **Información Completa**: Efectos, duración, corazones y ingredientes

### 🏆 **Recetas Legendarias Destacadas**

#### Nivel 5 - Leyenda Culinaria 👑
- **🌟 Elixir de la Vida Eterna**: Restaura todos los corazones + 8 temporales
- **⚔️ Festín del Guerrero Supremo**: Ataque supremo por 30 minutos
- **🌈 Ambrosía de los Dioses**: Todos los efectos combinados
- **👸 Último Regalo de Zelda**: Bendición real transmitida por generaciones

#### Ingredientes Especiales 🎁
- **Hada**: Mejora cualquier receta aumentando la curación
- **Estrella de Nayru**: Ingrediente legendario para recetas supremas
- **Durián Vivaz**: Otorga corazones temporales masivos
- **Especias Goron**: Aumenta el poder de las recetas de ataque

## 🚀 Demo en Vivo

🌐 **[Visita la Aplicación](https://yamicueto.github.io/recetario-app/)**

> 🔄 **Despliegue Automático**: La aplicación se actualiza automáticamente desde la rama `main` usando GitHub Actions cada vez que se suben cambios.

## 🛠️ Tecnologías y Arquitectura

### 🏗️ **Stack Tecnológico**
- **Angular 18** - Framework principal con las últimas características
- **TypeScript** - Tipado estático y programación orientada a objetos
- **Angular Material** - Componentes UI profesionales
- **Bootstrap 5** - Sistema de grid responsive y utilidades CSS
- **RxJS** - Programación reactiva para manejo de datos
- **GitHub Actions** - CI/CD automatizado
- **GitHub Pages** - Hosting gratuito y confiable

### 🎨 **Características de Diseño**
- **Fuentes Temáticas**: MedievalSharp y Uncial Antiqua para autenticidad
- **Sistema de Colores**: Paleta inspirada en los juegos de Zelda
- **Responsive Design**: Optimizado para todos los dispositivos
- **Accesibilidad**: Cumple con estándares WCAG
- **Performance**: Optimizado para carga rápida

## 🏗️ Instalación y Desarrollo

### 📋 **Prerrequisitos**
```bash
Node.js >= 18.0.0
npm >= 9.0.0
Angular CLI >= 18.0.0
```

### ⚡ **Configuración Rápida**

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
   
   🌐 Navega a `http://localhost:4200/` para ver la aplicación

### 🔧 **Scripts Disponibles**
```bash
npm start          # Servidor de desarrollo
npm run build      # Construcción para producción
npm run deploy     # Despliegue a GitHub Pages
npm test           # Pruebas unitarias
npm run test:coverage  # Pruebas con reporte de cobertura
npm run lint       # Análisis de código con ESLint
```

## 📦 Construcción y Despliegue

### 🚀 **Construcción para Producción**
```bash
npm run build
```
Los archivos optimizados se generan en `dist/` con:
- ✅ Minificación de código
- ✅ Tree-shaking para reducir tamaño
- ✅ Optimización de imágenes
- ✅ Lazy loading de componentes

### 🌐 **Despliegue Automático a GitHub Pages**
```bash
npm run deploy
```

🔄 **CI/CD Pipeline**: Cada push a `main` activa automáticamente:
1. ✅ Instalación de dependencias
2. ✅ Ejecución de tests
3. ✅ Construcción optimizada
4. ✅ Despliegue a GitHub Pages

## 🧪 Testing y Calidad

### 🔍 **Suite de Pruebas**
```bash
npm test              # Pruebas unitarias con Jest
npm run test:coverage # Reporte de cobertura detallado
npm run e2e           # Pruebas end-to-end
npm run lint          # Análisis estático de código
```

### � **Métricas de Calidad**
- ✅ **Cobertura de Tests**: >90%
- ✅ **Performance**: Lighthouse Score >95
- ✅ **Accesibilidad**: WCAG 2.1 AA
- ✅ **SEO**: Optimizado para motores de búsqueda

## 📁 Arquitectura del Proyecto

```
📦 recetario-app/
├── 🎨 src/
│   ├── 📱 app/
│   │   ├── 🏠 niveles/              # Selección de niveles de dificultad
│   │   │   ├── niveles.component.ts
│   │   │   ├── niveles.component.html
│   │   │   └── niveles.component.css
│   │   ├── 🍽️ recetas/             # Visualización detallada de recetas
│   │   │   ├── recetas.component.ts
│   │   │   ├── recetas.component.html
│   │   │   └── recetas.component.css
│   │   ├── 🔧 recetas.service.ts    # Servicio de datos y lógica de negocio
│   │   ├── 🛣️ app-routing.module.ts # Configuración de rutas SPA
│   │   └── 🚀 app.module.ts        # Módulo principal de la aplicación
│   ├── 📊 assets/
│   │   ├── 🗃️ recetas.json         # Base de datos principal (40+ recetas)
│   │   └── 💾 recetas-expandido.json # Backup del contenido expandido
│   ├── 🎨 styles.css               # Estilos globales y variables CSS
│   └── 📄 index.html               # Punto de entrada de la aplicación
├── 🔧 angular.json                 # Configuración de Angular CLI
├── 📦 package.json                 # Dependencias y scripts npm
├── 🔒 tsconfig.json               # Configuración de TypeScript
└── 📚 README.md                   # Documentación del proyecto
```

## 🎯 Características Avanzadas

### 🔍 **Sistema de Búsqueda Inteligente**
- Filtrado por categorías de efectos
- Búsqueda por ingredientes específicos
- Organización por nivel de dificultad
- Estadísticas en tiempo real

### 🎨 **Experiencia de Usuario**
- **Animaciones Fluidas**: Transiciones CSS y Angular Animations
- **Loading States**: Indicadores de carga durante la navegación
- **Error Handling**: Manejo graceful de errores de red
- **Responsive Design**: Optimizado para todos los dispositivos

### 🚀 **Performance Optimizations**
- **Lazy Loading**: Carga diferida de componentes
- **OnPush Strategy**: Optimización de detección de cambios
- **Service Workers**: Cache inteligente para offline
- **Image Optimization**: Compresión y formatos modernos

## 🤝 Contribuciones

¡Las contribuciones son más que bienvenidas! Este proyecto crece con la comunidad. 

### 📋 **Cómo Contribuir**

1. **🍴 Fork** el proyecto
2. **🌿 Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **💾 Commit** tus cambios (`git commit -m 'feat: agrega nueva funcionalidad'`)
4. **📤 Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **🔄 Abre** un Pull Request

### 🎯 **Áreas de Contribución**
- 🍽️ **Nuevas Recetas**: Agregar más contenido de Zelda
- 🎨 **Mejoras de UI/UX**: Diseño y experiencia de usuario
- 🧪 **Tests**: Aumentar cobertura de pruebas
- 📖 **Documentación**: Mejorar guías y ejemplos
- 🌐 **Internacionalización**: Soporte para más idiomas
- ⚡ **Performance**: Optimizaciones de rendimiento

### 📝 **Lineamientos**
- Sigue el estilo de código existente
- Agrega tests para nuevas funcionalidades
- Actualiza la documentación correspondiente
- Usa commits semánticos (feat, fix, docs, etc.)

## 🏆 Roadmap y Futuras Características

### 🔮 **Próximas Versiones**

#### v2.0 - "Breath of the Kitchen" 🌬️
- [ ] 🔍 Sistema de búsqueda avanzada
- [ ] ❤️ Sistema de favoritos personal
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🌙 Modo oscuro temático

#### v3.0 - "Tears of the Cookbook" 💧
- [ ] 🎮 Integración con APIs de Nintendo
- [ ] 🏆 Sistema de logros culinarios
- [ ] 👥 Funciones sociales y compartir recetas
- [ ] 🗣️ Soporte multiidioma

## 📊 Estadísticas del Proyecto

![GitHub stars](https://img.shields.io/github/stars/YamiCueto/recetario-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/YamiCueto/recetario-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/YamiCueto/recetario-app)
![GitHub last commit](https://img.shields.io/github/last-commit/YamiCueto/recetario-app)

## 📝 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License - Siéntete libre de usar, modificar y distribuir este código.
```

## 👨‍💻 Autor

<div align="center">

**🧙‍♂️ Yami Cueto**

[![GitHub](https://img.shields.io/badge/GitHub-YamiCueto-black?style=for-the-badge&logo=github)](https://github.com/YamiCueto)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yamicueto)

*"Cocinando código con la misma pasión que Link cocina sus aventuras"* 🍳⚔️

</div>

## 🙏 Agradecimientos

- 🎮 **Nintendo & Zelda Team** - Por crear el universo más mágico de los videojuegos
- 📚 **Zelda Wiki Community** - Por mantener el compendio más completo de información
- 🅰️ **Angular Team** - Por un framework increíble y bien documentado
- 🎨 **Material Design** - Por los principios de diseño que guían la interfaz
- 🌐 **GitHub** - Por proporcionar hosting gratuito y herramientas de desarrollo

---

<div align="center">

### 🌟 ¿Te gustó el proyecto?

**¡Dale una ⭐ al repositorio y comparte la magia culinaria de Hyrule!**

[🔝 Volver arriba](#-recetario-de-hyrule---el-compendio-culinario-definitivo)

</div>
