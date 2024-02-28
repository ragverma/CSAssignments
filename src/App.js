import './App.css';
import Navbar from './Navbar';
import Card from './Card';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> CS 230L </h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800434127</p>
      <p>Hi I am Ragini</p>
      <div className = "card-container">
        <Card heading="Card 01" backgroundColor="#007FFF" content="q"/>        
        <Card heading="Card 02" backgroundColor="#E63E62" content="c"/>        
        <Card heading="Card 03" backgroundColor="#2E8B57" content="d"/>
      </div>
    </div>
  );
}

export default App;
