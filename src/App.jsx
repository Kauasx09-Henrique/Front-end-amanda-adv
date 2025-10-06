import React from 'react';

// Importa os componentes de layout
import Header from './components/Header';
import Footer from './components/Footer';

// Atualizamos a importação para buscar o novo arquivo e componente
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <>
      <Header />
      {/* Usamos o novo componente HomeScreen aqui */}
      <HomeScreen />
      <Footer />
    </>
  );
}

export default App;