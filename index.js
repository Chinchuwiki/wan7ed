function cambioMiembroFoto(id) {
  let miembro;
  let foto;
  let instagram;

  if (id === "foto1") {
    miembro = "M7 CRISR13";
    foto = "./Imagenes/miembro-M7CRISR13.png";
    instagram = "https://www.instagram.com/cristian_rocha95/";
  } else if (id === "foto2") {
    miembro = "M7 Ayato98";
    foto = "./Imagenes/miembro-M7Ayato98.png";
    instagram = "https://www.instagram.com/diego_karaben/";
  } else if (id === "foto3") {
    miembro = "WANTED_NIKOTESLA";
    foto = "./Imagenes/miembro-WANTEDNIKOTESLA.png";
    instagram = "https://www.instagram.com/rochanico47/";
  } else if (id === "foto4") {
    miembro = "Chinchuwiki";
    foto = "./Imagenes/miembro-Chinchuwiki.png";
    instagram = "https://www.instagram.com/gastonedgardorocha/";
  }

  let tituloMiembro = document.getElementById("tituloMiembro");
  let fotoMiembro = document.getElementById("fotoMiembro");
  let instagramMiembro = document.getElementById("instagram");

  tituloMiembro.textContent = miembro;
  fotoMiembro.src = foto;
  instagramMiembro.href = instagram;
}
