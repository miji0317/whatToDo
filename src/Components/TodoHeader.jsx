import React from "react";
import styled from "styled-components";

export default function TodoHeader() {
  const date = new Date();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  const today = `${year}년 ${month}월 ${day}일`;

  return (
    <Head>
      <h3>{today}</h3>
      <div className="todo">할 일이 n개 남아있습니다.</div>
    </Head>
  );
}

const Head = styled.div`
  padding: 40px 30px;
  border-bottom: 1px solid #e9ecef;
  font-family: "yg-jalnan";

  h3 {
    margin: 0px;
    font-size: 36px;
    color: 343a40;
  }

  .todo {
    color: #ffb3b3;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
