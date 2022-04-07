import React, { useState } from "react";
import style from "styled-components";
import { useSelector } from "react-redux";
import FormItems from "./FormItems";

const FormList = () => {
  const post = useSelector((state) => state.form);
  const [textValue, setTextValue] = useState("");

  const JobDetail = style.div`
        width:70%;
        margin:0 auto 50px ;
        display:flex;
        flex-direction:column;
        align-items:start;

        @media (max-width:600px){
          width:98%;
        }

    `;
  const Search = style.input`
        width:60%;
        padding:10px;
    `;
  const Wrapper = style.div`
        width:100%;
        background-color:#F1F4FF;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
        padding:15px;
        
    `;
  const Section = style.select`
  width:35%;
  padding:10px;
  
  `;
  const Lesson = style.div`
    width:100%;
    height:40px;
    background-color:#E4EAFD;
    display:flex;
    padding:5px;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid gray;
  `;

  const todoValue = post.map((posts) => {
    return <FormItems key={posts.id} posts={posts} />;
  });
  return (
    <JobDetail>
      <h2>Job List</h2>
      <Wrapper>
        <Search
          type="text"
          placeholder="Job Name"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Section>
          <option value="priority">Priority(all)</option>
        </Section>
      </Wrapper>
      <Lesson>
        <h2>Name</h2>
        <h2>Priority</h2>
        <h2>Action</h2>
      </Lesson>
      {todoValue}
    </JobDetail>
  );
};

export default FormList;
