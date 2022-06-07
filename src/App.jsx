import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="modal">
        <h1>
          Nombre:{" "}
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </h1>
      </div>
    </>
  );
}

export default App;
