function cambioMiembroFoto(id) {
  // let miembro;
  let foto;
  let account;

  if (id === "foto1") {
    // miembro = "M7 CRISR13";
    foto = "./Imagenes/miembro-M7CRISR13.png";
    account = "account.3e11fa5f7a194c2c9b9d5ceaed6ba06c";
  } else if (id === "foto2") {
    // miembro = "M7 Ayato98";
    foto = "./Imagenes/miembro-M7Ayato98.png";
    account = "account.57090a734890420fa1bfe48fa8596d1f";
  } else if (id === "foto3") {
    miembro = "WANTED_NIKOTESLA";
    foto = "./Imagenes/miembro-WANTEDNIKOTESLA.png";
    account = "account.46100bdd2c9e419280a4bc7fc8a08b80";
  } else if (id === "foto4") {
    // miembro = "Chinchuwiki";
    foto = "./Imagenes/miembro-Chinchuwiki.png";
    account = "account.9d880c22cff144748083da90ffd2896a";
  } else if (id === "foto5") {
    // miembro = "WANTED_Furious";
    foto = "./Imagenes/miembro-Chinchuwiki.png";
    account = "account.be33e06d123b410ca42002e3cb11fb42";
  }

  // let tituloMiembro = document.getElementById("tituloMiembro");
  let fotoMiembro = document.getElementById("fotoMiembro");

  // tituloMiembro.textContent = miembro;
  fotoMiembro.src = foto;
}
