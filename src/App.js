import './App.css';
import Dashboard from './Dashboard';
// import logo from './image/patbot-icon.ico';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <br />  */}
          PatBOT: Intelligent Patrol Robot
        </h1>
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
