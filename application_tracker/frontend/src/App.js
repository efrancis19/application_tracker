import logo from './logo.svg';
import './App.css';
import ApplicationList from "./ApplicationList";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/applications/")
      .then(r => r.json())
      .then(data => console.log(data));
  }, []);

  return (
  <main>
    <h1>React And Django App Test</h1>
    <ApplicationList />   {}
  </main>
  );
}

export default App;
