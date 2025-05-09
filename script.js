// Función para cambiar de mapa
function changeMap(map) {
    const campusMap = document.getElementById("campus-map");
    campusMap.src = `imagenes/${map}.jpg`;
    campusMap.setAttribute("data-map", map);

    // Actualiza los botones activos
    document.querySelectorAll(".map-button").forEach(button => button.classList.remove("active"));
    document.querySelector(`[data-map="${map}"]`).classList.add("active");
}

// Manejar los botones de mapas
document.querySelectorAll(".map-button").forEach(button => {
    button.addEventListener("click", () => {
        const map = button.getAttribute("data-map");
        changeMap(map);
    });
});

// Datos de los lugares
const placesData = {
    "mapa-general": ["Actipan 2", "Augusto Rodin 507 (Anexo)", "Augusto Rodin 456", "Augusto Rodin 498"],
    "rodin-planta-baja": ["Salón 46R", "Promoción y admisiones"],
    "rodin-primer-piso": ["Sala de juntas", "Cámara Gesell"],
    "valencia": ["Cafetería", "Explanada"]
};

// Cargar los lugares del mapa seleccionado
function loadPlaces(map) {
    const placesList = document.getElementById("places-list");
    placesList.innerHTML = "";
    placesData[map].forEach(place => {
        const li = document.createElement("li");
        li.textContent = place;
        li.addEventListener("click", () => {
            document.getElementById("place-name").textContent = place;
            document.getElementById("place-description").textContent = `Información sobre ${place}.`;
        });
        placesList.appendChild(li);
    });
}

// Cargar el mapa general y sus lugares al inicio
changeMap("mapa-general");
loadPlaces("mapa-general");

// Manejar el cambio de lugares al seleccionar un mapa
document.querySelectorAll(".map-button").forEach(button => {
    button.addEventListener("click", () => {
        const map = button.getAttribute("data-map");
        changeMap(map);
        loadPlaces(map);
    });
});





