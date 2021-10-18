//import './App.css';
import React from 'react';
import { TodoProvider } from "./components/TodoContext";
import { UI } from "./components/UI";

function App() {

  return (
    <TodoProvider>
      <UI/>
    </TodoProvider>
  );
}

export default App;
