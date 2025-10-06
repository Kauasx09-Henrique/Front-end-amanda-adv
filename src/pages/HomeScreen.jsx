import React from 'react';

// Importando todas as seções que compõem a tela
import Hero from '../sections/Hero';
import Sobre from '../sections/Sobre';
import AreasDeAtuacao from '../sections/AreasDeAtuacao';
import Contato from '../sections/Contato';

// Renomeamos a função para HomeScreen
function HomeScreen() {
  return (
    <main>
      <Hero />
      <Sobre />
      <AreasDeAtuacao />
      <Contato />
    </main>
  );
}

// E exportamos o novo nome
export default HomeScreen;