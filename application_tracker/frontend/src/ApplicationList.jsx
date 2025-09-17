import { useEffect, useState } from "react";
import { API } from "./api";

export default function ApplicationsList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log("API Base:", API);
    fetch(`${API}/api/applications/`)
      .then(r => r.json())
      .then(d => setRows(Array.isArray(d) ? d : (d.results ?? [])))
      .catch(err => console.error("Fetch failed:", err));
  }, []);

  return (
    <ul>
      {rows.map(item => (
        <li key={item.id || item.name}>
          {item.company ?? item.name ?? JSON.stringify(item)}
          {item.position}
        </li>
      ))}
    </ul>
  );
}