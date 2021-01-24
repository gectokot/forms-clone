import React from "react";
import styled from "styled-components";

const Input = styled.input`
  outline-width: 0;
  font-size: 18px;
  padding: 10px;
  background: #1e3b72;
  color: white;
  border: none;
  border-radius: 3px 3px 0 0;
  width: 100%;
  ::placeholder {
    color: white;
  }
`;

function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder="Enter Todo"
        required
      ></Input>
    </form>
  );
}

export default TodoForm;