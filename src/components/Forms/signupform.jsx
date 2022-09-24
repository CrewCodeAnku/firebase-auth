import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, PasswordInput } from "../UI/form-fields";

const SignUpForm = (props) => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const request = {
            name: values.name,
            email: values.email,
            password: values.password,
          };
          props.signup(request);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, isValidating }) => (
          <Form onSubmit={handleSubmit}>
            <section className="h-full gradient-form md:h-screen">
              <div className="container py-4 px-6 h-full mx-auto">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                  <div className="xl:w-10/12">
                    <div className="block bg-white shadow-lg rounded-lg">
                      <div className="lg:flex lg:flex-wrap g-0">
                        <div
                          className="lg:w-6/12 flex items-center lg:rounded-l-lg rounded-b-lg lg:rounded-br-none"
                          style={{
                            background:
                              "linear-gradient(to right, #614385,#516395)",
                          }}
                        >
                          <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                            <h4 className="text-xl font-semibold mb-6">
                              We are Tack
                            </h4>
                            <p className="text-sm">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                        <div className="lg:w-6/12 px-4 md:px-0">
                          <div className="md:p-12 md:mx-6">
                            <div className="text-center">
                              <img
                                className="mx-auto w-48"
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo"
                              />
                              <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                                We are The Tack Team
                              </h4>
                            </div>

                            <p className="mb-4">
                              Don't have an account? signup
                            </p>
                            <div className="mb-4">
                              <TextInput
                                label="Name"
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Enter name here"
                                labelClassname="form-label"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                isRequired
                              />
                            </div>
                            <div className="mb-4">
                              <TextInput
                                label="Email"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter email here"
                                labelClassname="form-label"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                isRequired
                              />
                            </div>
                            <div className="mb-4">
                              <PasswordInput
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter password here"
                                labelClassname="form-label"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                isRequired
                              />
                            </div>
                            <div className="text-center pt-1 mb-12 pb-1">
                              <button
                                type="submit"
                                disabled={
                                  isSubmitting || isValidating || props.loading
                                }
                                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                style={{
                                  background:
                                    "linear-gradient(to right,#614385,#516395)",
                                }}
                              >
                                Sign Up
                                {props.loading ? (
                                  <i className="fa fa-circle-o-notch fa-spin ml-3"></i>
                                ) : null}
                              </button>
                            </div>
                            <div className="flex items-center justify-between pb-6">
                              <p className="mb-0 mr-2">
                                Alreay have an account?
                              </p>
                              <Link
                                to="/signin"
                                type="button"
                                className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                              >
                                Login
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SignUpForm;
