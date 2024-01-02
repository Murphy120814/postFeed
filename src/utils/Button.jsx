import React from "react";

function Button(props) {
  const { children, className, ...restProps } = props;
  return (
    <>
      <button
        className={
          "px-4 py-2 bg-button-color w-fit text-black font-semibold rounded-xl mt-4 " +
          className
        }
        {...restProps}>
        {children}
      </button>
    </>
  );
}

export default Button;
