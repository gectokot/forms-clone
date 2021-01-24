import React from "react";
import styled from "styled-components";

function TodoItem(props) {
  const sumbitAndDontReload = (e) => {
    e.preventDefault();
    props.submitEdited(props.id);
  };

  return (
    <li>
      <form action="" onSubmit={sumbitAndDontReload}>
        <Item
          type="text"
          defaultValue={props.todo}
          value={props.editedText}
          onChange={props.handleEditing}
          onClick={props.changeState}
          onBlur={sumbitAndDontReload}
        />
      </form>
      <span
        size="32"
        onClick={() => props.deleteItem(props.id)}
        style={{ alignSelf: "center" }}
      >
        a
      </span>
    </li>
  );
}

export default TodoItem;
