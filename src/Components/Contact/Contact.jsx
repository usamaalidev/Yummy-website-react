import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Contact() {
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 characters")
      .max(10, "Name can't be more than 10 characers"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "You must be 18 at least")
      .max(80, "You must be at most 80 years old"),
    email: Yup.string()
      .required("email is required")
      .email("Please Enter a valid Email"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^01[125][0-9]{8}$/, "Please Enter a valid Phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password must be at least 8")
      .max(25, "password can't be more than 25")
      .matches(/^[A-Z]/, "Password must start with capital letter"),
    repassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password and Repassword must be the same"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      phone: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit: checker,
  });

  function checker() {
    console.log(formik.values);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-3 justify-content-center py-5">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
              id="name"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.name}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              id="email"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Your Phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              name="phone"
              id="phone"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.phone}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              inputMode="numeric"
              className="form-control"
              placeholder="Enter your Age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
              name="age"
              id="age"
            />
            {formik.errors.age && formik.touched.age ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.age}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              id="password"
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder="RePassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.repassword}
              name="repassword"
              id="repassword"
            />
            {formik.errors.repassword && formik.touched.repassword ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.repassword}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            className="btn btn-outline-danger flex-grow-0 fit-content"
            type="submit"
            disabled={!(formik.isValid && formik.dirty) ? true : false}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
