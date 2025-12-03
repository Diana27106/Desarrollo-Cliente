// main2.js - Lógica mejorada del Catálogo de Personajes

// Se asume que 'get' existe y funciona correctamente:
// import { get } from './httpCliente.js'; 

// --- Configuración ---
const API_BASE = "https://futuramaapi.com/api/characters";

// --- Referencias del DOM ---
const $galeria = document.getElementById("galeria-personajes");
const $detallePanel = document.getElementById("detalle-panel");

// --- Renderizado de Elementos ---

/**
 * Crea la tarjeta individual para la galería.
 * @param {object} personaje - Datos del personaje (nombre, imagen, etc.).
 * @returns {HTMLElement} El elemento div de la tarjeta.
 */
const crearTarjetaPersonaje = (personaje) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-personaje';
    tarjeta.dataset.id = personaje.id; // Usamos data-id en lugar de id en la tarjeta

    // Contenido de la tarjeta
    tarjeta.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}" class="tarjeta-imagen">
        <h3 class="tarjeta-nombre">${personaje.name}</h3>
        <p class="tarjeta-dato">Género: ${personaje.gender}</p>
        <p class="tarjeta-dato status-badge status-${personaje.status.toLowerCase()}">
            Estado: ${personaje.status}
        </p>
        <button class="btn-comprar" data-id="${personaje.id}">Comprar</button>
    `;

    // Asignar evento de click a la tarjeta para ver detalles
    tarjeta.addEventListener("click", () => mostrarDetalle(personaje.id));

    // Asignar evento al botón de compra (evitando que el click se propague a la tarjeta)
    tarjeta.querySelector(".btn-comprar").addEventListener("click", (event) => {
        event.stopPropagation(); // ¡Importante para evitar que se dispare el evento de la tarjeta!
        alert(`¡Comprando ${personaje.name}! (ID: ${personaje.id})`);
    });

    return tarjeta;
};


/**
 * Renderiza el panel de detalle con la información completa.
 * @param {object} personaje - Los datos detallados del personaje.
 */
const renderDetallePanel = (personaje) => {
    // Limpiar contenido anterior
    $detallePanel.innerHTML = '';

    $detallePanel.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}" class="detalle-imagen">
        <h2 class="detalle-nombre">${personaje.name}</h2>
        <p class="detalle-info">ID: <span class="detalle-value">${personaje.id}</span></p>
        <p class="detalle-info">Especie: <span class="detalle-value">${personaje.species}</span></p>
        <p class="detalle-info">Estado: <span class="detalle-value">${personaje.status}</span></p>
        <p class="detalle-info">Género: <span class="detalle-value">${personaje.gender}</span></p>
        <p class="detalle-info">Creado: <span class="detalle-value">${new Date(personaje.createdAt).toLocaleDateString()}</span></p>
    `;
};


// --- Lógica de la API y Flujo ---

/**
 * Obtiene el listado completo de personajes y los renderiza.
 */
const cargarGaleria = async () => {
    try {
        // Mostrar estado de carga
        $galeria.innerHTML = '<p class="loading-message">Cargando personajes...</p>';

        // Simular la llamada a get(url)
        // const data = await get(API_BASE); 

        // ***** Sustituto de prueba, asumiendo que 'get' funciona: *****
        const response = await fetch(API_BASE);
        const data = await response.json();
        // *************************************************************

        const personajes = data.items;

        $galeria.innerHTML = ""; // Limpiar el mensaje de carga

        personajes.forEach(personaje => {
            $galeria.appendChild(crearTarjetaPersonaje(personaje));
        });

    } catch (error) {
        console.error("Error al cargar la galería:", error);
        $galeria.innerHTML = '<p class="error-message">Error al cargar datos. Inténtalo más tarde.</p>';
    }
};

/**
 * Obtiene los detalles de un personaje y los muestra.
 * @param {number} id - ID del personaje a mostrar.
 */
const mostrarDetalle = async (id) => {
    try {
        $detallePanel.innerHTML = '<p class="loading-message">Cargando detalles del personaje...</p>';

        // Simular la llamada a get(url)
        // const detalle = await get(`${API_BASE}/${id}`); 

        // ***** Sustituto de prueba: *****
        const response = await fetch(`${API_BASE}/${id}`);
        const detalle = await response.json();
        // ********************************

        renderDetallePanel(detalle);

    } catch (error) {
        console.error(`Error al cargar detalles del personaje ${id}:`, error);
        $detallePanel.innerHTML = '<p class="error-message">No se pudo cargar la información detallada.</p>';
    }
};


// --- Inicialización ---

document.addEventListener("DOMContentLoaded", cargarGaleria);