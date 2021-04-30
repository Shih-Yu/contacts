import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  // set blank form (1)
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
  };
  // set state (2)
  const [form, setForm] = useState(initialState);

  // get user input from form (3)
  // getting event argument
  const changeHandler = (e) => {
    // destuctute the fields and value for input attributes
    const { name, value } = e.target;
    // spreading the form object, then by wrapping first inside [],
    // it will grab all of the other properties inside the form object
    setForm({ ...form, [name]: value });
    console.log(value);
  };

  // submit form to db
  const handleSubmit = (e) => {
    // stops page from reloading when submitting
    e.preventDefault();
    // assigning data base endpoint
    let url = "http://localhost:5000/contacts";
    axios
      .post(url, form)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    // clear from after submit
    setForm(initialState);
  };

  return (
    <div className="container card mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row m-5">
          <div className="col-sm-6">
            <input
              type="text"
              name="fname"
              id="fname"
              className="form-control"
              placeholder="First Name"
              onChange={changeHandler}
              value={form.fname}
              />
              
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              name="lname"
              id="lname"
              className="form-control"
              placeholder="Last Name"
              onChange={changeHandler}
              value={form.lname}
            />
          </div>
        </div>
        <div className="row m-5">
          <div className="col-sm-6">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={changeHandler}
              value={form.email}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
              onChange={changeHandler}
              value={form.phone}
            />
          </div>
        </div>
        <div className="row m-5">
          <div className="col-sm">
            <input
              type="text"
              name="company"
              id="company"
              className="form-control"
              placeholder="Company"
              onChange={changeHandler}
              value={form.company}
            />
          </div>
          <div className="col-sm">
            <button type="submit" className="btn btn-secondary">
              Add Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
