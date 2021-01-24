import React from "react";
import styled from "styled-components";

const OptionStyle = styled.li`
  height: 100%;
  font-size: 18px;
  padding: 10px;
  width: 80%;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  overflow-wrap: anywhere;
  transition: background 0.2s;
  &:hover {
    background: #f5f5f5;
  }
`;

const InputField = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;

// const Item = styled.input`
//   outline-width: 0;
//   font-size: 18px;
//   background: #e6e6fa;
//   border: none;
//   width: 350px;
//   transition: background 0.2s;
//   ${Todo}:hover & {
//     background: #cfcfff;
//   }
// `;

// const DeleteButton = styled.span`
//   overflow: hidden;
//   border-radius: 3px 0 0 3px;
//   padding-top: 5px;
//   background-color: red;
//   color: white;
//   cursor: pointer;
//   margin: -10px;
//   width: 0;
//   transition: width 0.25s;
//   ${Todo}:hover & {
//     width: 32px;
//   }
// `;

function Option(props) {
  const sumbitAndDontReload = (e) => {
    e.preventDefault();
    props.submitEdited(props.id);
  };

  return (
    <OptionStyle>
      <form action="" onSubmit={sumbitAndDontReload}>
        <InputField
          type="text"
          defaultValue={props.option}
          value={props.editedText}
          onChange={props.handleEditing}
          onClick={props.changeState}
          onBlur={sumbitAndDontReload}
        />
      </form>
      <span>
        <span
          size="32"
          onClick={() => props.deleteOption(props.id)}
          style={{ alignSelf: "center" }}
        >
          x
        </span>
      </span>
    </OptionStyle>
  );
}

export default Option;
