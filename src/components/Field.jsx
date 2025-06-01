import React from 'react';
import './Field.css';
//props
const Field = ({ field, value, onChange, errors }) => {
  // Creates an object commonProps that bundles props to be passed to form elements to avoid repetition
  const commonProps = {
    name: field.name,
    value: value || "",
    onChange: (e) => {
      const val = field.type === "checkbox" ? e.target.checked : e.target.value;
      onChange(field.name, val);
    }
  };

  return (
    <div className="field-container">
      {field.type !== "checkbox" ? (
        <>
        {/* htmlFor links the label to the input by id for accessibility. */}
          <label htmlFor={field.name} className="field-label">
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
          {(field.type === "text" || field.type === "number" || field.type === "date") && (
            <input
              type={field.type}
              id={field.name}
              {...commonProps}
              className="field-input"
            />
          )}
          {field.type === "select" && (
            <select id={field.name} {...commonProps} className="field-select">
              <option value="">Select...</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {field.type === "textarea" && (
            <textarea
              id={field.name}
              {...commonProps}
              className="field-textarea"
              rows={4}
            />
          )}
        </>
      ) : (
        <div className="field-checkbox-container">
          <input
            id={field.name}
            type="checkbox"
            checked={value || false}
            onChange={commonProps.onChange}
            className="field-checkbox"
          />
          <label htmlFor={field.name} className="field-label">
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
        </div>
      )}
      {/* Show error message if present */}
      {errors && <div className="error-message">{errors}</div>}
    </div>
  );
};

export default Field;
