import { useEffect, useState } from "react";
import { API } from "./api";
import AddApplication from "./AddApplication";

export default function ApplicationsList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API}/api/applications/`);
      const data = await res.json();
      const applications = Array.isArray(data) ? data : (data.results ?? []);
      setRows(applications);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  fetchApplications();
}, []);

  const handleAdd = (newApp) => {
    setRows(prev => [newApp, ...prev]);
  };

  return (
    <div>
      <AddApplication onAdd={handleAdd} />
      <ul>
        {rows.map(item => (
          <li key={item.id}>
            {item.company} — {item.position}
          </li>
        ))}
      </ul>
    </div>
  );
}