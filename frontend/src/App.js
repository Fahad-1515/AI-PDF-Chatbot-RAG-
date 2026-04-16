import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://127.0.0.1:8000/upload/", formData);
    alert("Uploaded!");
  };

  const askQuestion = async () => {
    const res = await axios.get("http://127.0.0.1:8000/query/", {
      params: { q: query },
    });
    setResponse(res.data.answer);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI PDF QA System</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload PDF</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Ask question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={askQuestion}>Ask</button>

      <div>
        <h3>Results:</h3>
        {response.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
