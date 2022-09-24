import { useField } from "formik";
import React from "react";
import "react-phone-input-2/lib/style.css";

const modifyClasses = (className, meta) => {
  if (meta.touched) {
    let isInvalid = meta.error;
    if (isInvalid && !className.includes("is-invalid"))
      className = className + " is-invalid";
    if (!isInvalid && !className.includes("is-valid"))
      className = className + " is-valid";
  }
  return className;
};

export const TextInput = ({
  label,
  labelClassname = "form-label",
  isRequired = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  props.className = modifyClasses(props.className, meta);

  return (
    <>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClassname}>
          {label}
          {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
        </label>
      )}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export const PasswordInput = ({
  label,
  labelClassname = "form-label",
  isRequired = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  props.className = modifyClasses(props.className, meta);

  const [type, setType] = React.useState("password");

  return (
    <>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClassname}>
          {label}
          {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
        </label>
      )}
      <div className="input-group" id="show_hide_password">
        <input {...field} {...props} type={type} autoComplete="on" />
        <div className="input-group-addon cp">
          <span
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              marginRight: meta.touched ? "15px" : "0px",
            }}
            onClick={() =>
              setType((type) => (type === "password" ? "text" : "password"))
            }
          >
            {type === "password" ? "Show" : "Hide"}
          </span>
        </div>
        {meta.touched && meta.error ? (
          <div className="invalid-feedback text-red-600">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};
