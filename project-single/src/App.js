import eye from './icons/eye.svg';
import './App.css';

import NavigationMenu from './main-content/nav-bar-component/NavigationMenu';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Main />
      <header className="App-header">
        <img src={eye} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
