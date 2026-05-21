// --- VARIABLES DE ANIMACIÓN (Nivel Básico) ---
let posX = 200;       // Posición horizontal inicial (centro del lienzo)
let velocidad = 1;    // Dirección y cantidad de píxeles a mover por cuadro (1 = derecha, -1 = izquierda)

// --- BUCLE DE ANIMACIÓN DE CANVAS ---
function animarLogo() {
    const canvas = document.getElementById('logoCanvas');
    const ctx = canvas.getContext('2d');

    // 1. Limpiar completamente el lienzo en cada fotograma
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Dibujar el fondo del letrero (Fijo)
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(10, 10, 380, 60);

    // 3. Dibujar el marco brillante interno (Fijo)
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(15, 15, 370, 40);

    // 4. Actualizar la variable de posición horizontal
    posX = posX + velocidad;

    // 5. CONTROL DE REBOTE (Pirueta Izquierda -> Derecha -> Izquierda)
    // Si la posición supera un límite derecho o izquierdo, multiplicamos por -1 para invertir el rumbo
    if (posX > 270 || posX < 130) {
        velocidad = velocidad * -1;
    }

    // 6. Dibujar el texto en la nueva coordenada 'posX' calculada
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('FERIA "EL BARATILLO"', posX, 45);

    // 7. Solicitar al navegador que renderice el siguiente cuadro de animación de forma fluida
    requestAnimationFrame(animarLogo);
}

// Iniciar el bucle gráfico al cargar la ventana por completo
window.onload = animarLogo;


// --- INTERACTIVIDAD DINÁMICA DE LA INTERFAZ ---
function mostrarDetalle(nombre, precio, descripcion) {
    const contenedorInfo = document.getElementById('vista-previa');

    // Inyección de plantillas HTML para actualizar el panel de información
    contenedorInfo.innerHTML = `
        <h4>${nombre}</h4>
        <p><strong>Precio Especial:</strong> ${precio}</p>
        <p>${descripcion}</p>
        <button class="btn-producto" style="background-color:#10b981; width:100%; margin-top:10px;">
            🛒 Apartar Producto
        </button>
    `;
}
