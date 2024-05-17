import React from "react";

function Button({ size, onClick, children }) {
  const sizeClasses = {
    sm: "h-9 rounded border bg-transparent px-4 text-sm hover:bg-white hover:text-black transition-all",
    lg: "w-full rounded bg-lightBlue p-3 text-white",
  };
  //sm 디폴트
  const sizeClass = sizeClasses[size] || sizeClasses.sm;

  return (
    <button onClick={onClick} className={sizeClass}>
      {children}
    </button>
  );
}

export default Button;
