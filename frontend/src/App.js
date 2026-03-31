import { useState } from "react";

function App() {
  const [interest, setInterest] = useState("");
  const [events, setEvents] = useState([]);

  const getRecommendations = async () => {
    const res = await fetch("http://127.0.0.1:5001/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ interest }),
    });

    const data = await res.json();
    setEvents(data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 NovaAlert</h1>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter interest (AI, Web, Data)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button style={styles.button} onClick={getRecommendations}>
          Search
        </button>
      </div>

      <div style={styles.cardsContainer}>
        {events.map((event) => (
          <div key={event.id} style={styles.card}>
            <h3>{event.title}</h3>
            <p>{event.description || "Exciting event for you!"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "40px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  inputBox: {
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "none",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#38bdf8",
    color: "black",
    cursor: "pointer",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
};

export default App;