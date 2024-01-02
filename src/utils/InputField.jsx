import React from "react";

function InputField(props) {
  const { name, Type, ...restProps } = props;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{name}</label>
      <Type required={true} type="text" id={name} {...restProps} />
    </div>
  );
}

export default InputField;
