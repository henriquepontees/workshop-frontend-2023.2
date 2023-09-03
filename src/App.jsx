import './App.css'
import RandomPeopleFetch from './components/fetch/RandomPeopleFetch';
import Header from './components/header/Header';
import Curiosidades from './components/curiosidades/Curiosidades';
import Carrossel from './components/carrosel/Carrosel';



function App() {
  

  return (
    <>
    <Header/>
    <Curiosidades/>
    <Carrossel/>
    <RandomPeopleFetch/>
    <footer><p className='pApp'><b>Todos os direitos reservados©️</b></p></footer>
    </>
  )

}
export default App
