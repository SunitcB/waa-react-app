import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dashboard } from './containers/Dashboard';
import NavHeader from './containers/NavHeader';
import PageRouter from './containers/PageRouter';

function App() {

  console.log("Environment Variable");
  console.log(process.env.REACT_APP_HOST_URL)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <BrowserRouter>
        <NavHeader />
        <PageRouter />
      </BrowserRouter>

    </div>

  );
}

export default App;
