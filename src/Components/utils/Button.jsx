import React from "react";
import { handleTouch } from "../../Handlers/handler";

function Button(props) {
  const { content, style, callbackfn, type, disabled } = props;
  const handleClick = () => {
    if (type === "button" && callbackfn) {
      callbackfn();
      handleTouch();
    } else {
      return;
    }
  };
  return (
    <button
      className={style}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
