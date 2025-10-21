import { useEffect, useState } from "react";
import { API } from "./api";
import AddApplication from "./AddApplication";

export default function ApplicationsList() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API}/api/applications/`);
      const data = await res.json();
      const applications = Array.isArray(data) ? data : (data.results ?? []);
      setRows(applications);
      setLoading(false);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  fetchApplications();
}, []);

  const handleAdd = (newApp) => {
    setRows(prev => [newApp, ...prev]);
  };

  if (loading) {
    return (
      <div>
        <AddApplication onAdd={handleAdd} />
        <p>Loading applications...</p>
      </div>
    );
  }

  return (
    <div>
      <AddApplication onAdd={handleAdd} />
      <p>Total: {rows.length} applications.</p>
      <ul>
        {rows.map(item => (
          <li key={item.id}>
            {item.company}: {item.position} - {item.date_applied}
          </li>
        ))}
      </ul>
    </div>
  );
}