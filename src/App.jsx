import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const title = 'React';
const welcome = {
  title: 'Welcome',
  greeting: 'Hey',
};

function getTitle() {
  return title;
}

function App() {
  const [fruits, setFruits] = useState([]);

  function fruitMap() {
    const initialFruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    setFruits(initialFruits);
  }

  function ridOnce() {
    if (fruits.length > 0) {
      const updatedFruits = [...fruits];
      updatedFruits.splice(-1, 1); //remove the lasst fruit
      setFruits(updatedFruits);
    }
  }

  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle('title')}
      </h1>
      
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" /><br />
      
      <button onClick={fruitMap}>Show fruit list</button><br />
      <button onClick={ridOnce}>Remove last fruit</button>
      
      {/* Render the fruit list dynamically */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
