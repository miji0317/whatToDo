import "./App.css";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import GlobalStyle from "./GlobalStyle";
import TodoBox from "./Components/TodoBox";

function App() {
  const [todo, setTodo] = useState([]);

  async function getTodo() {
    try {
      const response = await axios.get("http://localhost:3333/todo");
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    todo && (
      <>
        <GlobalStyle />
        <TodoBox todo={todo} getTodo={getTodo} />
      </>
    )
  );
}

export default App;
