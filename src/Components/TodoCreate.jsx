import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function TodoCreate({ getTodo }) {
  const [inputTodo, setInputTodo] = useState("");

  async function postTodo(inputTodo) {
    try {
      const response = await axios.post("http://localhost:3333/todo", {
        text: inputTodo,
        done: false,
      });
      console.log(response);
      getTodo();
      setInputTodo("");
      document.getElementById("input-todo").value = null;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CreateContainer>
      <InputBox
        id="input-todo"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInputTodo(e.target.value)}
      ></InputBox>
      <CreateBtn onClick={(e) => postTodo(inputTodo)}>추가</CreateBtn>
    </CreateContainer>
  );
}

const CreateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;
`;

const InputBox = styled.input`
  width: 70%;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid #ffb3b3;
  }
`;

const CreateBtn = styled.div`
  width: 20%;
  border-radius: 10px;
  background-color: #ffb3b3;
  color: #fff;
  text-align: center;
  padding: 5px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 4px -1px #d2d2d2;
  }
`;
