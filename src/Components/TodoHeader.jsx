import React from "react";
import styled from "styled-components";

export default function TodoHeader({ todo }) {
  const date = new Date();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  const today = `${year}ë ${month}ì ${day}ì¼`;

  return (
    <Head>
      <div className="date">{today}</div>
      <h3>What To Doâð»</h3>
      <div className="todo">ë±ë¡ë í  ì¼ {todo.length}ê°ì§</div>
    </Head>
  );
}

const Head = styled.div`
  padding: 40px 30px;
  border-bottom: 1px solid #e9ecef;
  font-family: "yg-jalnan";

  .date {
    text-align: right;
    font-size: 14px;
    color: #797a7e;
  }

  h3 {
    margin: 0px;
    font-size: 36px;
    color: #ffb3b3;
  }

  .todo {
    color: #797a7e;
    font-size: 18px;
    margin-top: 20px;
  }
`;
