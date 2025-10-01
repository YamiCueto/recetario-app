# Scripts de Utilidad

## Verificar deployment
Para verificar que el deployment fue exitoso, puedes usar:

```bash
# Deployment manual (alternativo al GitHub Actions)
npm run deploy

# Solo build para producción
npm run build:prod

# Verificar estado de git
git status

# Ver último commit
git log --oneline -1
```

## URLs importantes

- **Producción**: https://yamicueto.github.io/recetario-app/
- **Desarrollo**: http://localhost:4200/
- **Repositorio**: https://github.com/YamiCueto/recetario-app

## Solución de problemas

### Error 404 en GitHub Pages
1. Verificar que el repositorio tenga GitHub Pages habilitado
2. Verificar que el source esté configurado como "GitHub Actions"
3. Verificar que el base-href sea correcto: `/recetario-app/`

### Errores de build
1. Limpiar node_modules: `rm -rf node_modules && npm install`
2. Limpiar cache de Angular: `ng cache clean`
3. Verificar versiones de Node.js y npm
