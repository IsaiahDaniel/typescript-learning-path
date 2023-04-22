import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button title="Save" buttontype='button' classNames={{ backgroundColor: "green", color: "white"  }} />
        <Button title="Save" buttontype='button' />

        <Card>
          <h2>React is the Greatest</h2>
        </Card>

        <Card>
          <h2>title</h2>
          <p>description</p>
          <p>Author: Stella Maris</p>
        </Card>
      </header>
    </div>
  );
}

export default App;


// const Button = ({ buttontype, classNames, title }: ButtonType) => {
//   return (
//     <button type={buttontype} style={classNames}>
//         { title }
//     </button>
//   )
// }