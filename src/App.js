import Header from './Components/Header/Header'
import Form from './Components/Form/Form'


import './App.css';

function App() {



  return (
    <div className='Container'>
      <div className="Area">

        <Header />

        <div className='Main'>

          <Form />

        </div>

      </div>

      {/* Link repositorio do gitHub */}
      <footer className='Footer'>
        <p id="pFooter">Repositorio do projeto</p>
      </footer>

    </div> 
  );
}

export default App;
