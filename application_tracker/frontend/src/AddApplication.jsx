import { useState } from "react";
import { API } from "./api";

export default function AddApplication({ onAdd }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const submitApplication = async (e) => {
    e.preventDefault();
    const newApp = { company, position };

    try {
      const res = await fetch(`${API}/api/applications/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApp),
      });
      const data = await res.json();
      console.log(data);
      onAdd(data);
      setCompany("");
      setPosition("");
    } catch (err) {
      console.error("Failed to add the new application:", err);
    }
  };

  return (
    <form onSubmit={submitApplication}>
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        required
      />
      <input
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}