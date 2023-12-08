import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
      <label
        className="font-bold font-primary mr-4 text-black"
        htmlFor={props.input.id}
      >
        {props.label}
      </label>
      <input
        className="w-[3rem] rounded-[5px] border-[1px] border-[#ccc] font-primary pl-[0.5rem]"
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
