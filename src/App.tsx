import { useState } from "react";

import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MyComponentMain from "./exports/MyComponentMain";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <LanguageSwitcher />
      <br />
      <MyComponentMain />
      <br />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
