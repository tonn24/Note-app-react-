import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><RemoveIcon/></button>
    </div>
  );
}

export default Note;
