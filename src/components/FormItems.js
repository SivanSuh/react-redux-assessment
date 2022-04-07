import React, { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { useDispatch } from "react-redux";
import Popup from "./Popup";
import { deleteForm, updateForm } from "../redux/formSlice";

const FormItems = ({ posts }) => {
  const [open, setOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPriority, setEditPriority] = useState(posts.priority);

  const editable = (e) => setEditPriority(e.target.value);

  const dispatch = useDispatch();
  const Wrap = styled.div`
    width: 100%;

    border: 1px solid #e4eafd;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  `;
  const ChangeBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const Button = styled.button`
    padding: 5px;
    margin: 0 5px;
    font-size: 20px;
    background-color: #e8e8e8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  const Category = styled.div`
    font-weight: bold;
    color: white;
    width: 70px;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
    ${posts.priority === "Acil"
      ? "background-color:#E83D6D;"
      : posts.priority === "Normal"
      ? "background-color:#F1A824"
      : posts.priority === "Önemli"
      ? "background-color:#2277E0"
      : "null"}
  `;
  {
    /* Reducer Function  */
  }
  const deleteHandle = () => {
    dispatch(deleteForm(posts.id));
  };
  const editButton = () => {
    console.log(editPriority);
    if (posts.id) {
      dispatch(updateForm({ id: posts.id, postPr: editPriority }));
    }
  };

  const Input = styled.input`
    width: 90%;
    padding: 15px;
  `;
  const SaveBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
  `;
  const Title = styled.div`
    width: 50%;
  `;
  const Select = styled.select`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    outline: none;
  `;

  return (
    <Wrap key={posts.id}>
      <Title>
        <h3>{posts.title}</h3>
      </Title>
      <Category>{posts.priority}</Category>
      <ChangeBtn>
        <Button>
          <GrEdit onClick={() => setOpen(true)} />
        </Button>
        <Button>
          <RiDeleteBin5Line onClick={() => setDeletePopup(true)} />
        </Button>
      </ChangeBtn>

      {/* POPUP STARTED */}
      <Popup trigger={open} setTrigger={setOpen}>
        <h1>Job Edit</h1>
        <Input disabled placeholder={posts.title} />
        <Select value={editPriority} onChange={editable}>
          <option>Acil</option>
          <option>Önemli</option>
          <option>Normal</option>
        </Select>

        <SaveBtn>
          <button
            style={{
              padding: "10px 40px",
              margin: "0 20px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "10px 40px",
              margin: "0 20px",
              background: "crimson",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={editButton}
          >
            Save
          </button>
        </SaveBtn>
      </Popup>
      <Popup trigger={deletePopup}>
        <h1>Are you sure delete</h1>

        <div style={{ marginTop: "15px" }}>
          <button
            style={{
              padding: "10px 40px",
              margin: "0 20px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setDeletePopup(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            style={{
              background: "crimson",
              padding: "10px 40px",
              margin: "0 20px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={deleteHandle}
          >
            Approve
          </button>
        </div>
      </Popup>
    </Wrap>
  );
};

export default FormItems;
