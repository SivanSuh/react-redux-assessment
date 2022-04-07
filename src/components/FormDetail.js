import React, { useState } from "react";
import style from "styled-components";
import { useDispatch } from "react-redux";
import { addForm } from "../redux/formSlice";
import { nanoid } from "@reduxjs/toolkit";

{
  /*FormDetail you make add new job name  and priority category */
}

const FormDetail = () => {
  const [inputValue, setInputValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("Acil");
  const dispatch = useDispatch();

  const Detail = style.div`
    width:70%;
    margin:60px auto ;
    
    @media (max-width:600px){
      width:98%;
    }
    
  `;
  const Conteiner = style.form`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
  `;
  const Input = style.input`
    width:80%;
    padding:10px;
  `;
  const Section = style.select`
  
  padding:10px;
  margin:0 5px;
  `;
  const Btn = style.button`
    padding:10px;
    border:none;
    border-radius:5px;
    background-color:#2277E0;
    color:white;
  `;
  const HandleChange = (e) => {
    e.preventDefault();
    console.log(`adding : ${inputValue}`);
    setInputValue("");
    dispatch(
      addForm({
        id: nanoid(),
        title: inputValue,
        priority: priorityValue,
      })
    );
  };

  return (
    <Detail>
      <Conteiner onSubmit={HandleChange}>
        <Input
          placeholder="Job Name"
          maxLength="255"
          type="text"
          required={true}
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Section
          required
          value={priorityValue}
          onChange={(e) => setPriorityValue(e.target.value)}
        >
          <option>Acil</option>
          <option>Önemli</option>
          <option>Normal</option>
        </Section>
        <Btn type="submit">CREATE</Btn>
      </Conteiner>
    </Detail>
  );
};

export default FormDetail;
