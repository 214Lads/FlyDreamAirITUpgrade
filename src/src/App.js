import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{

    async function test(){
      console.log('here')
      let r = await fetch('/endpoint').then((r) => r.json())
      console.log(r)
    }
    test()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a test app</p>
      </header>
    </div>
  );
}

export default App;
