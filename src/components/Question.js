import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Option from "./Option";

const QuestionContainer = styled.div`
  margin: 15px auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
`;

function Question() {
  const [isEditing, setIsEditing] = useState(true);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ option: "Pizda", id: uuidv4() }]);
  const [value, setValue] = useState("");
  const [editedText, setEditedText] = useState("");

  const addNewOption = (e) => {
    e.preventDefault();
    setOptions([...options, { option: "", id: uuidv4() }]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newOption = { value, id: uuidv4() };
  //   setOptions([...options, newOption]);
  // };

  const handleEditing = (e) => {
    setEditedText(e.target.value);
  };

  //handlechange for text in option input
  const changeState = (e) => {
    setEditedText(e.target.value);
  };

  const submitEdited = (id) => {
    const editedOption = { option: editedText, id: id };
    setOptions(
      options.map((option) =>
        option.id === editedOption.id ? editedOption : option
      )
    );
  };

  const deleteOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const renderOptions = options.map((option) => (
    <Option
      key={option.id}
      id={option.id}
      option={option.option}
      deleteOption={deleteOption}
      handleEditing={handleEditing}
      submitEdited={submitEdited}
      changeState={changeState}
    />
  ));

  return (
    <QuestionContainer>
      <div>
        <input type="text" placeholder="Question" />
        <select name="select">
          <option value="value1">Radio</option>
          <option value="value2">
            Checkbox
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>

      {renderOptions}
      <button onClick={addNewOption}>Add new option</button>
    </QuestionContainer>
  );
}

export default Question;
