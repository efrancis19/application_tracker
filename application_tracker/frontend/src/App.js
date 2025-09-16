import logo from './logo.svg';
import './App.css';

import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/applications/")
      .then(r => r.json())
      .then(data => console.log(data));
  }, []);

  return <h1>React + Django test</h1>;
}

export default App;
