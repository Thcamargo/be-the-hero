import React from 'react'; // React, { useState }

import './global.css'
import Routes from './routes';

function App() {
 /* const [counter, setCounter] = useState(0);

  // Estado retorna um Array [valor da variavel, função de atualização que consegue alterar o valor da variável]

  function increment() {
    setCounter(counter + 1);   
  }*/

  return ( 
    <Routes />
     /* <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick = {increment}> Incrementar </button>
   </div>*/
  );
}

export default App;
