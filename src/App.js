import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className='todo-app'>
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt='freeCodeCamp logo' />
      </div>
      <div className='todo-main-list'>
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
