"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import style from "./card.module.css";
function Card() {
  const url = "https://pokeapi.co/api/v2/pokemon/205";
  const [pokemon, setPokemon] = useState("/vercel.svg");
  const [estado, setEstado] = useState("Estado");
  const [habilidad, setHabilidad] = useState("Habilidad");
  const [tipo, setTipo] = useState("Tipo");
  const [tipos, setTipos] = useState("Tipos");
  const [altura, setAltura] = useState("Altura");
  const [peso, setPeso] = useState("Peso");
  const [habilidades, setHabilidades] = useState("Habilidades");
  const [hp, setHp] = useState("Hp");
  const [ataque, setAtaque] = useState("Ataque");
  const [defensa, setDefensa] = useState("Defensa");
  const [velocidad, setVelocidad] = useState("Velocidad");
  const [indice, setIndice] = useState("Indice");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.sprites.front_default);
        setEstado(data.species.name);
        setHabilidad(data.abilities[0].ability.name);
        setTipo(data.types[0].type.name);
        setTipos(data.types[1].type.name);
        setAltura(data.height);
        setPeso(data.weight);
        setHabilidades(data.abilities[0].ability.name);

        setHp(data.stats[0].base_stat);
        setAtaque(data.stats[1].base_stat);
        setDefensa(data.stats[2].base_stat);
        setVelocidad(data.stats[5].base_stat);
        setIndice(data.id);
      });
  }, []);
  return (
    <div className={style.contenedor}>
      <div>
        <h1 className={style.title}> My Pokemon</h1>
        <h1 className={style.pokname}> {habilidad}</h1>
        <h3 className={style.idpok}>#{indice}</h3>
        <Image src={pokemon} width="500" height="500" />
      </div>
      <div>
        <div className={style.cardContainer}>
          <div className={style.description}>
            <h1>About</h1>
            <div className={style.linea}></div>
            <div className={style.about}>
              <p>Type</p>
              <p className={style.pinfo}>
                {tipo}, {tipos}
              </p>
              <p>Height</p>
              <p className={style.pinfo}>{altura}</p>
              <p>Weight</p>
              <p className={style.pinfo}>{peso}</p>
              <p>Abilities</p>
              <p className={style.pinfo}>{habilidades}</p>
            </div>
            <h1>Stats</h1>
            <div className={style.about}>
              <p>HP</p>
              <p className={style.pinfo}>{hp}</p>
              <p>Attack</p>
              <p className={style.pinfo}>{ataque}</p>
              <p>Defense</p>
              <p className={style.pinfo}>{defensa}</p>
              <p>Speed</p>
              <p className={style.pinfo}>{velocidad}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
