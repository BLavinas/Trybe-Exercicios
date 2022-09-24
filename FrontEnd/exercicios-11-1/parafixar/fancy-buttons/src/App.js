import React, { Component } from 'react';


const handleClick = () => {

}
const handleClick2 = () => {
  console.log('nerdola');
}

const handleClick3 = () => {
  console.log('xablau');
}
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Clique aqui</button>
        <button onClick={handleClick2}>Clique aqui</button>
        <button onClick={handleClick3}>Clique aqui</button>
      </div>
    )
  }
}

export default App
