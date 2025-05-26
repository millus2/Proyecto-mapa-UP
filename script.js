const lugares = {
  general: [
    {
      nombre: "Actipan 2",
      descripcion: "Entrada principal. Ubicada en calle Málaga.",
      imagenes: ["actipan_2.jpg"]
    },
    {
      nombre: "Augusto Rodin 456",
      descripcion: "Aulas administrativas. Entrada por calle Rodin.",
      imagenes: ["augusto_rodin_456.jpg"]
    },
    {
      nombre: "Augusto Rodin 498",
      descripcion: "Edificio principal de aulas. Contiene la Sala Buñuel y el Smart Center.",
      imagenes: ["augusto_rodin_498.jpg"]
    },
    {
      nombre: "Augusto Rodin 507 (Anexo)",
      descripcion: "Oficinas administrativas y aulas.",
      imagenes: ["augusto_rodin_507.jpg"]
    },
    {
      nombre: "Campana 73",
      descripcion: "Entrada por la calle Campana.",
      imagenes: ["campana_73.jpg"]
    },
    {
      nombre: "Campana 91",
      descripcion: "Acceso vehicular para personal autorizado.",
      imagenes: ["campana_91.jpg"]
    },
    {
      nombre: "Campana 95",
      descripcion: "Acceso peatonal lateral.",
      imagenes: ["campana_95.jpg"]
    },
    {
      nombre: "Chancellor",
      descripcion: "Edificio de aulas Chancellor.",
      imagenes: ["chancelor.jpg"]
    },
    {
      nombre: "Donatello 57",
      descripcion: "Edificio académico.",
      imagenes: ["donatello_57.jpg"]
    },
    {
      nombre: "Donatello 59",
      descripcion: "Área administrativa adicional.",
      imagenes: ["donatello_59.jpg"]
    },
    {
      nombre: "Valencia 106",
      descripcion: "Edificio con aulas y laboratorios.",
      imagenes: ["valencia_106.jpg"]
    }
  ],
  rodin_pb: [
    { nombre: "Arte y Cultura", descripcion: "Oficinas de Arte y Cultura.", imagenes: ["arte_y_cultura.jpg"] },
    { nombre: "Sala de Lactancia", descripcion: "Espacio privado para lactancia.", imagenes: ["sala_de_lactancia.jpg"] },
    { nombre: "Cajeros", descripcion: "Cajeros Santander y Multicajero disponibles.", imagenes: ["8cajeros.jpg"] },
    { nombre: "Sala A", descripcion: "Sala de cómputo A.", imagenes: ["salaa.jpg"] },
    { nombre: "Sala B", descripcion: "Sala de cómputo B.", imagenes: ["salab.jpg"] },
    { nombre: "Sala C", descripcion: "Sala de cómputo C.", imagenes: ["salac.jpg"] },
    { nombre: "Cafetería", descripcion: "Cafetería con variedad de locales.", imagenes: ["cafeteria.jpg"] },
    { nombre: "Área de comida", descripcion: "Zona de alimentos y mesas.", imagenes: ["area_de_comida.jpg"] },
    { nombre: "Salón 47R", descripcion: "Aula ubicada al fondo del pasillo.", imagenes: ["salon_47R.jpg"] }
  ],
  rodin_pp: [
    { nombre: "iOS Development Lab", descripcion: "Laboratorio de desarrollo de aplicaciones iOS.", imagenes: ["development_lab.jpg"] },
    { nombre: "SAUP", descripcion: "Oficinas del SAUP.", imagenes: ["SAUP.jpg"] },
    { nombre: "Sanitarios", descripcion: "Servicios sanitarios en el primer piso.", imagenes: ["4sanitarios.jpg"] },
    { nombre: "Sanitarios 2", descripcion: "Servicios sanitarios secundarios.", imagenes: ["11sanitarios.jpg"] },
    { nombre: "Sanitarios 3", descripcion: "Servicios sanitarios adicionales.", imagenes: ["12sanitarios.jpg"] }
  ],
  valencia: [
    { nombre: "Módulo de Santander", descripcion: "Atención bancaria en campus.", imagenes: ["modulo_de_santander.jpg"] },
    { nombre: "Cajero", descripcion: "Cajero automático Santander.", imagenes: ["cajero.jpg"] },
    { nombre: "Rectoría", descripcion: "Oficinas de rectoría de la Universidad.", imagenes: ["rectoria.jpg"] },
    { nombre: "Explanada", descripcion: "Área común con mesas y árboles.", imagenes: ["explanada.jpg"] },
    { nombre: "Biblioteca", descripcion: "Biblioteca central de la UP.", imagenes: ["biblioteca.jpg"] },
    { nombre: "Laboratorio de procesos de manufactura", descripcion: "Espacio de prácticas técnicas.", imagenes: ["laboratorio_de_procesos_de_manufactura.jpg"] }
  ],

  // NUEVOS MAPAS
  casco_antiguo_p1: [
    { nombre: "Aula Magna", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Sala del Búho", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 3R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 4R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 5R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 6R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 7R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 8R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 9R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 10R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 11R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Salón 12R", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Baños Mujeres", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Baños Hombres", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] },
    { nombre: "Instituto Panamericano de Jurisprudencia", descripcion: "", imagenes: ["CascoAntiguoP1.jpg"] }
  ],
  jerez_p3: [
    { nombre: "Salón J01", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Salón J02", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Salón J03", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Salón J04", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Aulas de Estudio", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Baños", descripcion: "", imagenes: ["Jerez10P3.jpg"] },
    { nombre: "Elevador", descripcion: "", imagenes: ["Jerez10P3.jpg"] }
  ],
  jerez_p4: [
    { nombre: "Salón J05", descripcion: "", imagenes: ["Jerez10P4.jpg"] },
    { nombre: "Sala Juicios Orales", descripcion: "", imagenes: ["Jerez10P4.jpg"] },
    { nombre: "Oficinas Derecho", descripcion: "", imagenes: ["Jerez10P4.jpg"] }
  ],
  malaga_p1: [
    { nombre: "Laboratorio de Termofluidos", descripcion: "", imagenes: ["MalagaP1.jpg"] },
    { nombre: "Cancha de Pádel", descripcion: "", imagenes: ["MalagaP1.jpg"] },
    { nombre: "Baños Hombres", descripcion: "", imagenes: ["MalagaP1.jpg"] }
  ],
  malaga_pb: [
    { nombre: "Taller de Maderas", descripcion: "", imagenes: ["MalagaPB.jpg"] },
    { nombre: "Gimnasio", descripcion: "", imagenes: ["MalagaPB.jpg"] },
    { nombre: "Baños Mujeres", descripcion: "", imagenes: ["MalagaPB.jpg"] }
  ],
  periquillo: [
    { nombre: "Salón P1", descripcion: "", imagenes: ["Periquillo.jpg"] },
    { nombre: "Salón P2", descripcion: "", imagenes: ["Periquillo.jpg"] },
    { nombre: "Salón P3", descripcion: "", imagenes: ["Periquillo.jpg"] },
    { nombre: "Salón P4", descripcion: "", imagenes: ["Periquillo.jpg"] },
    { nombre: "Baños Mujeres", descripcion: "", imagenes: ["Periquillo.jpg"] },
    { nombre: "Baños Hombres", descripcion: "", imagenes: ["Periquillo.jpg"] }
  ],
  rodin_p2: [
    { nombre: "Salón NR1", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR2", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR3", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR4", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR5", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR6", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR7", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR8", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón NR9", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "CAES", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Elevador", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón 37R", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón 36R", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón 35R", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón 34R", descripcion: "", imagenes: ["RodinP2.jpg"] },
    { nombre: "Salón A2", descripcion: "", imagenes: ["RodinP2.jpg"] }
  ],
  rodin_p3: [
    { nombre: "Auditorio", descripcion: "", imagenes: ["RodinP3.jpg"] },
    { nombre: "Elevador", descripcion: "", imagenes: ["RodinP3.jpg"] }
  ],
  valencia_ing_p1: [
    { nombre: "Laboratorio de Ingeniería de Métodos", descripcion: "", imagenes: ["ValenciaINGP1.jpg"] },
    { nombre: "Laboratorio de Automatización y Robótica", descripcion: "", imagenes: ["ValenciaINGP1.jpg"] },
    { nombre: "Laboratorio de Control", descripcion: "", imagenes: ["ValenciaINGP1.jpg"] },
    { nombre: "UP Panteras", descripcion: "", imagenes: ["ValenciaINGP1.jpg"] },
    { nombre: "Baños", descripcion: "", imagenes: ["ValenciaINGP1.jpg"] }
  ],
  valencia_ing_p2: [
    { nombre: "Laboratorio de Cómputo 2", descripcion: "", imagenes: ["ValenciaINGP2.jpg"] },
    { nombre: "Laboratorio de Cómputo 1", descripcion: "", imagenes: ["ValenciaINGP2.jpg"] },
    { nombre: "Análisis de Materiales y Microscopía", descripcion: "", imagenes: ["ValenciaINGP2.jpg"] },
    { nombre: "Elevador", descripcion: "", imagenes: ["ValenciaINGP2.jpg"] }
  ]
};

let lugarActual = 'general';

function cambiarMapa(nombre, categoria) {
  document.getElementById("campus-map").src = "mapas/" + nombre;
  lugarActual = categoria;
  mostrarLugares();
  limpiarInfo();
}

function mostrarLugares() {
  const lista = document.getElementById("places-list");
  lista.innerHTML = "";
  lugares[lugarActual].forEach((lugar, index) => {
    const boton = document.createElement("button");
    boton.textContent = lugar.nombre;
    boton.className = "place-btn";
    boton.onclick = () => mostrarInfo(lugar);
    lista.appendChild(boton);
  });
}

function mostrarInfo(lugar) {
  document.getElementById("place-name").textContent = lugar.nombre;
  document.getElementById("place-description").textContent = lugar.descripcion;

  const contenedor = document.getElementById("place-images");
  contenedor.innerHTML = "";

  // No mostrar la imagen si es la única y coincide exactamente con el mapa actual
  if (lugar.imagenes.length === 1) {
    const imagen = lugar.imagenes[0];
    const mapaActual = document.getElementById("campus-map").src.split("/").pop();
    if (imagen === mapaActual) {
      return; // No mostrar nada
    }
  }

  // Si hay más imágenes o no coincide con el mapa, mostrar normalmente
  lugar.imagenes.forEach(img => {
    const i = document.createElement("img");
    i.src = "mapas/" + img;
    i.className = "info-image";
    contenedor.appendChild(i);
  });
}



function limpiarInfo() {
  document.getElementById("place-name").textContent = "Selecciona un lugar";
  document.getElementById("place-description").textContent = "Haz clic en un lugar para ver más detalles.";
  document.getElementById("place-images").innerHTML = "";
}

window.onload = () => {
  mostrarLugares();
};









