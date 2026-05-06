import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

import About from './components/About';




function App() {


  return (
     <div className="min-h-screen flex flex-col">

      <Header/>


    <main className="flex-grow ">
       {/* pages will go here */}
       <Hero />
       <Services />
       <About />

    </main>

      <Footer/>
      
     
    </div>
  );
}

export default App
