import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import TodoForm from "./TodoForm";
import Todoitem from "./TodoItem";

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 500px;
  background-color: #e6e6fa;
`;

function Form() {
  const [items, setItems] = useState([{value: "You can edit a Todo by clicking on it", id: 1},]);
  const [value, setValue] = useState("");
  const [editedText, setEditedText] = useState("");

  //local storage
  useEffect(() => {
    if (localStorage.length !== 0)
      setItems(JSON.parse(localStorage.getItem("items")));
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    const newItem = { value, id: uuidv4() };
    setItems([...items, newItem]);
    setValue("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditing = (e) => {
    setEditedText(e.target.value);
  };

  //handleChange but for editing
  const changeState = e => {
    setEditedText(e.target.value)
  }

  const submitEdited = (id) => {
    console.log(id);
    const editedItem = { value: editedText, id: id };
    console.log(editedItem);
    setItems(
      items.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
  };

  const renderedTodos = items.map((item) => (
    <Todoitem
      key={item.id}
      id={item.id}
      todo={item.value}
      deleteItem={deleteItem}
      handleEditing={handleEditing}
      submitEdited={submitEdited}
      changeState={changeState}
    />
  ));

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <TodoList>{renderedTodos}</TodoList>
    </div>
  );
}

export default Form;
