import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "./GlobalStyle";
import TodoBox from "./Components/TodoBox";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/todo");
        console.log(result.data);
        setTodo(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    todo && (
      <>
        <GlobalStyle />
        <TodoBox todo={todo} />
      </>
    )
  );
}

export default App;
