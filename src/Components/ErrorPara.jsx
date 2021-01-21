import React from "react";
function ErrorPara(props) {
  return (
    <p className="err-para">
      <em>{props.content}</em>
    </p>
  );
}
export default ErrorPara;
