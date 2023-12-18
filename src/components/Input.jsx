import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={`${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
