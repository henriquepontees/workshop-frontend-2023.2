
import './RandomPeopleFetch.css'

import React, { useState } from 'react';

export default function RandomPeopleFetch() {
  const [personagemAleatorio, setPersonagemAleatorio] = useState({
    nome: '',
    massa: '',
    cor_do_Cabelo: '',
    altura: '',
  });
  
  const DadosFetch = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        const indiceAleatorio = Math.floor(Math.random() * data.count);
        
        return fetch(`https://swapi.dev/api/people/${indiceAleatorio}/`);
      })
      .then((response) => response.json())
      .then((data) => {
        setPersonagemAleatorio({
          nome: data.name,
          massa: data.mass,
          corCabelo: data.hair_color,
          altura: data.height,
          corPele: data.skin_color,
          corOlho: data.eye_color,
          anoNascimento: data.birth_year,
          genero: data.gender
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className='divRPF' >
        <button onClick={DadosFetch} className='buttonRPF' >Clique para ver os dados de um personagem aleatorio</button> <br />
        <p className='pRPF' >Nome: {personagemAleatorio.nome}</p> <br />
        <p className='pRPF' >Massa: {personagemAleatorio.massa}</p> <br />
        <p className='pRPF' >Cor do Cabelo: {personagemAleatorio.corCabelo}</p> <br />
        <p className='pRPF' >Cor do Pele: {personagemAleatorio.corPele}</p> <br />
        <p className='pRPF' >Altura: {personagemAleatorio.altura}</p> <br />
        <p className='pRPF' >Cor dos olhos: {personagemAleatorio.corOlho}</p> <br />
        <p className='pRPF' >Ano de nascimento: {personagemAleatorio.anoNascimento}</p> <br />
        <p className='pRPF' >Gênero: {personagemAleatorio.genero}</p>
      </div>
      </>
  );
}

