import Header from './components/Header';

import Hero from './components/Hero';
import Programas from './components/Programas';
import Services from './components/Services';
import About from './components/About';
import Comunidade from './components/Comunidade';


import Footer from './components/Footer';


function App() {


  return (
     <div className="min-h-screen flex flex-col">

      <Header/>


    <main className="flex-grow ">
       {/* pages will go here */}
       <Hero />
       <Programas />
       <Services />
       <About />
       <Comunidade />


    </main>

      <Footer/>
      
     
    </div>
  );
}

export default App
