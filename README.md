# 🚀 Plantilla Webpack + JavaScript

> 🎯 **PLANTILLA OFICIAL** - No clonar directamente. Usar como template para nuevos proyectos.

**⚠️ Esta es una PLANTILLA base, no un proyecto para contribuir. Usa el botón "Use this template" de GitHub.**

## ✨ Características

- 📦 **Webpack 5** - Bundling moderno
- 🔄 **Babel** - Transpilación ES6+
- 🎨 **CSS Loader** - Importación de estilos
- 🔧 **ESLint + Prettier** - Code quality
- 🚀 **GitHub Actions** - Deploy automático
- ⚡ **Hot Reload** - Desarrollo rápido
- 📱 **Responsive** - Template HTML base

## 🛠️ Requisitos

- **Node.js** >= 16
- **npm** >= 8

## ⚡ Inicio Rápido

```bash
# 1. Clona/descarga esta plantilla
git clone https://github.com/plunkydev/plantilla-webpack-js.git mi-proyecto
cd mi-proyecto

# 2. Instala dependencias
npm install

# 3. Inicia desarrollo
npm run dev
```

¡Abre <http://localhost:8081> y comienza a desarrollar! ⚡

## 📜 Scripts Disponibles

### 🔧 Desarrollo
```bash
npm run dev          # Servidor desarrollo con hot reload
```

### 🏗️ Build
```bash
npm run build        # Genera dist/ optimizado
```

### 🧹 Code Quality  
```bash
npm run lint         # Analiza código con ESLint
npm run lint:fix     # Corrige errores automáticamente
npm run format       # Formatea código con Prettier
```

### 👀 Preview
```bash
npm run preview-build # Sirve dist/ localmente
```

## 📁 Estructura del Proyecto

```
plantilla-webpack-js/
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── 📁 src/
│   ├── index.js             # Punto de entrada principal
│   ├── styles.css           # Estilos CSS
│   └── template.html        # Template HTML base
├── ⚙️ webpack.common.js        # Configuración base de Webpack
├── ⚙️ webpack.dev.js           # Configuración de desarrollo
├── ⚙️ webpack.prod.js          # Configuración de producción
├── 📄 package.json             # Dependencias y scripts
├── .babelrc                 # Configuración de Babel
├── .eslintrc.cjs            # Configuración de ESLint
├── .prettierrc              # Configuración de Prettier
└── 📄 README.md               # Este archivo
```

## ⚙️ Configuración Técnica

### Webpack
- **webpack.common.js** → Configuración compartida (entry, output, plugins)
- **webpack.dev.js** → Desarrollo (`style-loader`, devServer, hot reload)
- **webpack.prod.js** → Producción (`MiniCssExtractPlugin`, optimización)

### Babel
- Transpilación ES6+ a ES5
- Preset: `@babel/preset-env`
- Compatible con navegadores modernos

### ESLint + Prettier
- Standard JavaScript style
- Formateo automático de código
- Detección de errores

## GitHub Pages

Esta plantilla está configurada para desplegar **automáticamente** en GitHub Pages usando **GitHub Actions**:

### ✨ **Deploy Automático**:
- ✅ **Rama `main`**: Solo código fuente (sin `dist/`)
- ✅ **GitHub Actions**: Build y deploy automático
- ✅ **Rama `gh-pages`**: Se crea/actualiza automáticamente

### 🚀 **Configuración inicial**:

1. **Configura GitHub Pages**:
   - Ve a tu repositorio → Settings → Pages
   - Selecciona "GitHub Actions" como fuente

2. **¡Eso es todo!** El primer push activará el workflow.

### 📋 **Workflow simplificado**:

```bash
# Desarrollo
npm run dev

# Cuando hagas cambios, simplemente:
git add .
git commit -m "Mi cambio"
git push
```

**¡GitHub Actions automáticamente**:
- 🔨 Hace build del proyecto
- 📤 Sube solo `dist/` a `gh-pages`
- 🌐 Actualiza tu sitio web

### 🔄 **Sin comandos de deploy manual**:
- ❌ No necesitas `npm run deploy`
- ❌ No necesitas manejar `dist/` manualmente
- ✅ Solo haz push y GitHub hace el resto

## 🚀 CREAR NUEVO PROYECTO - Guía Completa

> 🎯 **Usa esto para crear tu proyecto, NO para contribuir a esta plantilla**

### 1️⃣ **Crear repositorio desde plantilla**

**🔥 Opción Recomendada: GitHub Template**
```bash
# 1. Ve a: https://github.com/plunkydev/plantilla-webpack-js
# 2. Haz click en "Use this template" → "Create a new repository"
# 3. Nombra tu nuevo proyecto (ej: "mi-awesome-project")
# 4. ¡Listo! GitHub crea el repo con todo configurado
```

**Opción B: Clone Manual**
```bash
git clone https://github.com/plunkydev/plantilla-webpack-js.git mi-proyecto
cd mi-proyecto
rm -rf .git  # Eliminar historial de la plantilla
git init     # Inicializar nuevo repositorio
```

### 2️⃣ **Personalizar tu proyecto** 🎨

```bash
cd mi-proyecto
npm install
```

**⚠️ OBLIGATORIO - Editar `package.json`:**
```json
{
    "name": "mi-nuevo-proyecto",                    // ❗ CAMBIAR
    "description": "Mi proyecto increíble",            // ❗ CAMBIAR  
    "author": "Tu Nombre",                         // ❗ CAMBIAR
    "repository": {
        "url": "git+https://github.com/TU-USUARIO/mi-nuevo-proyecto.git"  // ❗ CAMBIAR
    },
    "homepage": "https://github.com/TU-USUARIO/mi-nuevo-proyecto#readme", // ❗ CAMBIAR
    "bugs": {
        "url": "https://github.com/TU-USUARIO/mi-nuevo-proyecto/issues"      // ❗ CAMBIAR
    }
}
```

**🎨 OPCIONAL - Personalizar HTML:**
```html
<!-- src/template.html -->
<title>Mi Proyecto Genial</title>  <!-- Cambiar título -->
```

### 3️⃣ **Desarrollar tu aplicación** ⚙️

```bash
# Iniciar servidor de desarrollo
npm run dev  # → http://localhost:8081
```

**Edita estos archivos:**
- 📝 `src/index.js` → Tu lógica JavaScript
- 🎨 `src/styles.css` → Tus estilos
- 📄 `src/template.html` → Tu estructura HTML

### 4️⃣ **Configurar GitHub Pages** 🌐

**Después del primer push:**
1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. **Source**: Selecciona "**GitHub Actions**" (⚠️ NO Jekyll, NO Static HTML)
4. ¡Listo! 🎉

```
Source: 
○ Deploy from a branch          ← NO
● GitHub Actions               ← ✅ SÍ, esto!

[ Save ]
```

### 5️⃣ **Deploy automático** 🚀

```bash
# Hacer cambios y deploy
git add .
git commit -m "Mi primera versión 🎉"
git push

# 🪄 GitHub Actions automáticamente:
# ✓ Hace build
# ✓ Despliega a gh-pages
# ✓ Tu sitio está en: https://TU-USUARIO.github.io/mi-proyecto/
```

## ⚠️ **QUÉ NECESITAS CONFIGURAR**

### ✅ **OBLIGATORIO cambiar:**
- ☑️ `package.json` → name, description, author, URLs del repositorio
- ☑️ `src/template.html` → title de tu proyecto
- ☑️ GitHub Pages settings (solo una vez)

### ✅ **OPCIONAL cambiar:**
- ☐️ `src/index.js` → tu código personalizado
- ☐️ `src/styles.css` → tus estilos personalizados
- ☐️ `.github/workflows/deploy.yml` → si quieres personalizar el workflow

### ❌ **NO necesitas tocar:**
- ✓ Webpack config (ya optimizado)
- ✓ Babel config (ya funciona)
- ✓ ESLint/Prettier (ya configurado)
- ✓ GitHub Actions workflow (ya funciona)
- ✓ .gitignore (ya tiene lo necesario)

## 🎆 **Ejemplo Completo de Uso**

```bash
# 1. Crear desde template en GitHub (botón "Use this template")

# 2. Clonar tu nuevo repositorio
git clone https://github.com/TU-USUARIO/mi-proyecto.git
cd mi-proyecto

# 3. Instalar y personalizar
npm install
# Editar package.json (cambiar name, author, etc.)

# 4. Desarrollar
npm run dev  # → http://localhost:8081
# Editar src/index.js, src/styles.css, etc.

# 5. Deploy
git add .
git commit -m "Primera versión 🎉"
git push

# 6. Configurar GitHub Pages (una sola vez)
# Settings → Pages → Source: "GitHub Actions"

# 🎉 ¡Tu sitio estará en: https://TU-USUARIO.github.io/mi-proyecto/
```

## 📝 **Template Base**

Esta plantilla incluye:

**`src/index.js`** - Punto de entrada limpio:
```javascript
import './styles.css';

console.log('¡Plantilla Webpack funcionando!');

// Tu código aquí...
```

**`src/styles.css`** - Estilos base:
```css
body {
  font-family: sans-serif;
  background: #f5f5f5;
  padding: 2rem;
}
```

**`src/template.html`** - HTML responsive:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plantilla Webpack js</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## 🔥 **¿Por qué usar esta plantilla?**

✅ **Setup completo en minutos**  
✅ **Deploy automático configurado**  
✅ **Best practices incluidas**  
✅ **Compatible con librerías modernas**  
✅ **Optimizada para producción**  
✅ **Mantenida y actualizada**  

---

**🚀 ¡Comienza tu próximo proyecto con esta plantilla!**

*Creado con ❤️ por [David Rosales](https://github.com/plunkydev)*
