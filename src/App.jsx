import React, { useState } from "react";
import Field from "./components/Field";
import { schema } from "./schema";

function App() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  //Handles field value changes
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //Validate input values :)
  const validate = () => {
    const errs = {};
    schema.fields.forEach((f) => {
      if (f.required && !formData[f.name]) {
        errs[f.name] = `${f.label} is required`;
      }
    });
    return errs;
  };

  //handle form submit on click and Shows error if any 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
    } else {
      setErrors({});
      setSubmittedData(formData);
    }
  };

  //rendering of form using Field component and get field dynamiclly based on schema
  return (
  <div className="form-wrapper">
    <h1 class="title">{schema.title}</h1>
    <form onSubmit={handleSubmit}>
      {schema.fields.map((field) => (
        // Renders a Field component for each one
        <Field
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          errors={errors[field.name]}
        />
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    {/* Display input values in Json format */}
    {submittedData && (
      <div className="submitted-data">
        <pre>Form Data: {JSON.stringify(submittedData, null, 2)}</pre>
      </div>
    )}
  </div>
);

}

export default App;
