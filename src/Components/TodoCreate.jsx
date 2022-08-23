import React from "react";
import styled from "styled-components";

export default function TodoCreate() {
  return (
    <CreateContainer>
      <InputBox placeholder="할 일을 입력하세요"></InputBox>
      <InputBtn>추가</InputBtn>
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

const InputBtn = styled.div`
  width: 20%;
  border-radius: 10px;
  background-color: #ffb3b3;
  color: #fff;
  text-align: center;
  padding: 5px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 2px 2px 4px -1px #d2d2d2;
  }
`;
