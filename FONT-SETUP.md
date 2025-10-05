# Cómo agregar la fuente personalizada de Zelda

## Descarga de la fuente

1. Ve a [DaFont - The Wild Breath of Zelda](https://www.dafont.com/es/the-wild-breath-of-zelda.font)
2. Descarga la fuente "Hylia Serif Beta"
3. Extrae los archivos de fuente

## Instalación en el proyecto

1. Convierte los archivos TTF a formatos web usando un convertidor online como:
   - [CloudConvert](https://cloudconvert.com/)
   - [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

2. Genera los siguientes formatos:
   - `.woff2` (más moderno y comprimido)
   - `.woff` (compatibilidad)
   - `.ttf` (fallback)

3. Renombra los archivos:
   - `HyliaSerifBeta-Regular.woff2`
   - `HyliaSerifBeta-Regular.woff`
   - `HyliaSerifBeta-Regular.ttf`
   - `HyliaSerifBeta-Bold.woff2`
   - `HyliaSerifBeta-Bold.woff`
   - `HyliaSerifBeta-Bold.ttf`

4. Coloca los archivos en: `src/assets/fonts/`

## Resultado

Una vez agregados los archivos de fuente, los títulos principales de la aplicación usarán automáticamente la fuente auténtica de Zelda, dándole un aspecto más inmersivo y temático.

## Fuentes actuales de respaldo

Mientras tanto, la aplicación usa:
- **MedievalSharp**: Fuente principal similar a Zelda
- **Uncial Antiqua**: Fuente alternativa medieval
- **Cinzel**: Fuente serif elegante como fallback

## Ejemplo de estructura final

```
src/
├── assets/
│   └── fonts/
│       ├── HyliaSerifBeta-Regular.woff2
│       ├── HyliaSerifBeta-Regular.woff
│       ├── HyliaSerifBeta-Regular.ttf
│       ├── HyliaSerifBeta-Bold.woff2
│       ├── HyliaSerifBeta-Bold.woff
│       └── HyliaSerifBeta-Bold.ttf
```
