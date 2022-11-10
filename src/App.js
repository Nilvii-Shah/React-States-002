import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [markdown, setMarkup] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <Input settext={setMarkup} />
      <Output markdowndata={markdown} />
    </div>
  );
}

export default App;
