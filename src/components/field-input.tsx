import React from "react";

const FieldInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (<div>
    <input {...props} />
  </div>)
}

export default FieldInput;