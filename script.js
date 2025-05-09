document.addEventListener("DOMContentLoaded", () => {
    const maps = {
        "mapa-general": ["Actipan 2", "Augusto Rodin 507 (Anexo)", "Augusto Rodin 456", "Augusto Rodin 498", "Campana 73", "Campana 91", "Campana 95", "Chancellor", "Donatello 57", "Donatello 59", "Valencia 106", "Valencia 102", "Valencia 100"],
        "rodin-planta-baja": ["Salón 46R", "Promoción y admisiones", "Salón 45R", "Salón 44R", "Salón 43R", "Salón 42R", "Salón 41R", "Cajeros", "Arte y cultura"],
        "rodin-primer-piso": ["Sala de juntas", "Cámara Gesell", "Sala B", "Sala A", "Salón 47R", "Salón 1 de música", "Cafetería", "Oratorio", "Sanitarios", "Biblioteca", "Hemeroteca"],
        "valencia": ["Cafetería", "Explanada", "Laboratorio de procesos de manufactura", "Sanitarios", "Rectoría", "Cielito Querido", "Biblioteca", "Centro de Simulación"]
    };

    const mapTabs = document.getElementById("map-tabs");
    const campusMap = document.getElementById("campus-map");
    const placeName = document.getElementById("place-name");
    const placeDescription = document.getElementById("place-description");
    const placeImage = document.getElementById("place-image");

    for (const map in maps) {
        const placesList = document.getElementById(`${map}-places`);
        maps[map].forEach(place => {
            const listItem = document.createElement("li");
            listItem.textContent = place;
            listItem.addEventListener("click", () => {
                placeName.textContent = place;
                placeDescription.textContent = `Información sobre ${place}.`;
                placeImage.src = `Mapas/lugares/${place.toLowerCase().replace(/ /g, "-")}.jpg`;
                placeImage.style.display = "block";

                // Remover clase activa de otros botones
                document.querySelectorAll(".places-list li").forEach(btn => btn.classList.remove("active"));
                listItem.classList.add("active");
            });
            placesList.appendChild(listItem);
        });
    }

    mapTabs.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            document.querySelectorAll(".places-list").forEach(list => list.classList.remove("active"));
            document.querySelectorAll("#map-tabs li").forEach(tab => tab.classList.remove("active"));
            event.target.classList.add("active");
            document.getElementById(`${event.target.dataset.map}-places`).classList.add("active");
            campusMap.src = `Mapas/${event.target.dataset.map}.jpg`;
        }
    });
});




