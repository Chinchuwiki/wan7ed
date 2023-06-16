function cambioMiembroFoto(id, account) {
  let foto;
  let fotoMiembro = document.getElementById("fotoMiembro");
  let tituloMiembro = document.getElementById("tituloMiembro");
  let statsContainer = document.getElementById("statsContainer");

  if (id === "foto1") {
    foto = "./Imagenes/miembro-M7CRISR13.png";
    account = "account.3e11fa5f7a194c2c9b9d5ceaed6ba06c";
  } else if (id === "foto2") {
    foto = "./Imagenes/miembro-M7Ayato98.png";
    account = "account.57090a734890420fa1bfe48fa8596d1f";
  } else if (id === "foto3") {
    foto = "./Imagenes/miembro-WANTEDNIKOTESLA.png";
    account = "account.46100bdd2c9e419280a4bc7fc8a08b80";
  } else if (id === "foto4") {
    foto = "./Imagenes/miembro-Chinchuwiki.png";
    account = "account.9d880c22cff144748083da90ffd2896a";
  } else if (id === "foto5") {
    foto = "./Imagenes/miembro-Chinchuwiki.png";
    account = "account.be33e06d123b410ca42002e3cb11fb42";
  }

  fotoMiembro.src = foto;

  // Realizar la petición GET
  fetch(
    `https://api.pubg.com/shards/steam/players/${account}/seasons/division.bro.official.pc-2018-24`,
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkODEzOTk0MC1lZTAwLTAxM2ItMDg1Ny00YWQ1NTRmZjEzNWIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjg2ODcxMTAxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndhbjdlZCJ9.FpfHZEllxWdDQqwUF6fARf9IRr7Gr_RdpXLzEarsQZo",
        Accept: "application/vnd.api+json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const squadStats = data.data.attributes.gameModeStats.squad;
      const wins = squadStats.wins;
      const vehicleDestroys = squadStats.vehicleDestroys;
      const roundsPlayed = squadStats.roundsPlayed;
      const roundMostKills = squadStats.roundMostKills;
      const kills = squadStats.kills;
      const headshotKills = squadStats.headshotKills;
      const damageDealt = squadStats.damageDealt;

      // Actualizar los valores en el modal
      statsContainer.innerHTML = `
          <div>
            <p>Partidas ganadas: ${wins}</p>
            <p>Kills: ${kills}</p>
            <p>Round Most Kills: ${roundMostKills}</p>
            <p>Headshot Kills: ${headshotKills}</p>
            <p>Daño total: ${damageDealt.toFixed(2)}</p>
            <p>Partidas jugadas: ${roundsPlayed}</p>
            <p>Vehiculos destruidos: ${vehicleDestroys}</p>
          </div>
        `;
    })
    .catch((error) => {
      console.log(error);
    });
}
