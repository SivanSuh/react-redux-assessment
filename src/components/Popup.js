import React from "react";
import style from "styled-components";
const Popup = (props) => {
  const PopupMenu = style.div`
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.2);
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    `;
  const Menu = style.div`
    position:relative;
    padding:40px;
    width:100%;
    max-width:500px;
    height:350px;
    background-color:#FFFFFF;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
    `;

  return props.trigger ? (
    <PopupMenu>
      <Menu>{props.children}</Menu>
    </PopupMenu>
  ) : (
    ""
  );
};

export default Popup;
