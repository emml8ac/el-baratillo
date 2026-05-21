# 🏪 Feria "El Baratillo" — Blog Interactivo con Canvas

Blog interactivo con animación Canvas y catálogo de productos. Proyecto educativo para aprender HTML5, CSS3, JavaScript y la API de Canvas.

## 🚀 Demo

Abrí `index.html` en tu navegador para ver:
- Logo animado con efecto de rebote en Canvas
- Catálogo de productos interactivo con botones
- Panel lateral que se actualiza dinámicamente al hacer clic

## 📁 Estructura

```
el-baratillo/
├── index.html    → Estructura HTML con canvas y catálogo
├── estilos.css   → Diseño Grid, hover effects, transiciones
└── script.js     → Animación Canvas + lógica de interacción
```

## 🛠️ Ejercicios Resueltos

### ⚡ Ejercicio 1: Velocidad de la animación

**Pregunta:** ¿Qué pasa si cambiamos `velocidad` de `1` a `3`?

**Respuesta:** El texto va **más rápido**. La variable `velocidad` controla cuántos píxeles se mueve el texto por cada fotograma. Al pasar de `1` a `3`, el logo rebota al triple de velocidad.

**Pregunta extra:** ¿Y si usamos un valor decimal como `0.5`?

**Respuesta:** Iría **más lento**, desplazándose medio píxel por fotograma. El efecto sería un movimiento suave, casi como si el texto flotara. Esto demuestra que `velocidad` no tiene que ser un número entero — cualquier valor positivo o negativo funciona.

---

### 🎨 Ejercicio 2: Tema nocturno

**Cambios aplicados:**

| Elemento | Color original | Nuevo color |
|----------|---------------|-------------|
| Fondo del letrero | `#ef4444` (rojo) | `#2e1065` (violeta oscuro) |
| Borde decorativo | `#f59e0b` (ámbar) | `#22c55e` (verde neón) |

El resultado es un logo con estética nocturna, ideal para un modo oscuro. El alto contraste entre violeta y verde mantiene la legibilidad del texto blanco.

---

### 📦 Ejercicio 3: Producto nuevo

Se agregó **"Sartén Antiadherente"** a la categoría 🏠 Doméstico:

```html
<button class="btn-producto" 
  onclick="mostrarDetalle('Sartén Antiadherente', '$15', 
  'Sartén de 24 cm con recubrimiento de teflón, mango ergonómico.')">
  Sartén Antiadherente
</button>
```

La función `mostrarDetalle(nombre, precio, descripcion)` recibe tres parámetros y los inyecta dinámicamente en el panel lateral. Para agregar cualquier producto nuevo solo hay que copiar la estructura del botón y cambiar los valores.

## 🧠 Conceptos clave

| Concepto | Explicación |
|----------|-------------|
| `clearRect()` | Borra el lienzo en cada fotograma. Si se omite, el texto deja un rastro sólido |
| `requestAnimationFrame()` | Llama a la función de animación de forma fluida, sincronizada con el monitor |
| `transition` en CSS | Suaviza cambios de estado (color, tamaño) cuando el mouse pasa sobre un botón |
| Control de rebote | `if (posX > 270 \|\| posX < 130) velocidad *= -1` — invierte la dirección al llegar al borde |

## 🔧 Cómo usar

```bash
git clone https://github.com/emml8ac/el-baratillo.git
cd el-baratillo
# Abrí index.html en tu navegador
```

No requiere servidor ni dependencias — es HTML, CSS y JS puro.
