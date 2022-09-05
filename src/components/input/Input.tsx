import React, { useId, useState } from "react";
import clsx from "clsx";
import "./input.scss";

const FIELD_VALIDATION: { success: string; error: string } = {
  success: "field--success",
  error: "field--error",
};

interface InputProps {
  label: string;
  caption?: string;
  validation?: keyof typeof FIELD_VALIDATION;
  small?: boolean;
  search?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    caption,
    validation,
    small = false,
    search = false,
    disabled = false,
  } = props;

  const [value, setValue] = useState("");
  const id = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const deleteValue = (): void => {
    setValue("");
  };

  const classNamField = clsx(
    "field",
    value && "field--typing",
    validation ? FIELD_VALIDATION[validation] : null,
    small && "field--small",
    search && "field--search"
  );

  return (
    <div className={classNamField}>
      {" "}
      <input
        className="field__input"
        onChange={handleChange}
        id={id}
        value={value}
        disabled={disabled}
      />
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <span className="field__icon-close" onMouseDown={deleteValue} />
      <span className="field__caption">{caption}</span>
    </div>
  );
};

export default Input;
