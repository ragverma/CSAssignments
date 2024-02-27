import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import './Card.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> CS 230L </h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800434127</p>
      <p>Hi I am Ragini</p>
      <div className = "card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
