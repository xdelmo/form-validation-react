import React, { useState } from "react";

function FormInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  // deconstructing props
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  function handleFocus(e) {
    setIsFocused(true);
  }

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="border-2 p-2 mb-2 rounded-xl"
        // Every time you get out of focus from the input field, the event will trigger
        onBlur={handleFocus}
        // if click on confirm password input error message will immediately show
        onFocus={() =>
          inputProps.name === "confirmPassword" && setIsFocused(true)
        }
        // convert isFocused from boolean to string variable
        focused={isFocused.toString()}
      />
      {isFocused && (
        <span className="text-sm hidden text-red-600 mb-2">{errorMessage}</span>
      )}
    </div>
  );
}

export default FormInput;
