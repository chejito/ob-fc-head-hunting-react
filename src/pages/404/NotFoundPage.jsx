import React from 'react';
import { useHistory } from 'react-router-dom'


const Notfoundpage = () => {

  const history = useHistory()

  const navigateTo = (path) => {
    history.push(path)
  }

  return (
    <div>
      <h1> 404 - Página No Encontrada</h1>
      <button onClick={() => navigateTo('/')}>
        <span class="material-icons">
          arrow_back
        </span>
        Volver
      </button>
    </div>
  );
}

export default Notfoundpage;
