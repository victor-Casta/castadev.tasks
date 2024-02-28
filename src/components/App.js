import React from "react";
import "../css/App.css";
import { TodoProvider } from "../TodoContext/context";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;