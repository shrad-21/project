"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  input {
    padding: 15px;
    width: 100%;
    border: 0.5px solid #ccc;
    border-radius: 5px;

    &:hover {
      border: 0.5px solid black;
      transition: 0.3s ease-in-out;
    }
    &:focus {
      border: 0.2px solid black;
      transition: 0.3s ease-in-out;
      outline: none;
    }
    &::placeholder {
      font-size: 15px;
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-search-cancel-button,
  input[type="number"]::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 10px;
`;

const TextInput = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const Error = styled.p`
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 0;
`;

const Input = ({
  id = "input-type-text",
  name = "",
  value,
  label = "",
  required = true,
  placeholder = "placeholder",
  error = null,
  disabled = false,
  type = "text",
  borderColor,
  onChange,
  customInputStyles,
  children,
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <Wrapper
      error={error}
      required={required}
      borderColor={borderColor}
      customInputStyles={customInputStyles}
    >
      {label && (
        <Label
        // htmlFor={id}
        // labelColor={isInProfile ? colors?.black_coral : labelColor}
        >
          <span>
            {label}
            {required && (
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            )}
          </span>
        </Label>
      )}
      <div>
        <input
          value={value || ""}
          disabled={disabled}
          placeholder={placeholder}
          type={inputType}
          name={name}
          required={required}
          id={id}
          onChange={onChange}
        />
        {children}
      </div>

      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
