import React, { useState } from "react";
import FormInput from "./components/FormInput";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  function handleSubmit(e) {
    // prevent refresh page on button click
    e.preventDefault();
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values);

  return (
    <div className="app">
      <Navbar />
      <main className="flex items-center justify-center flex-col min-h-screen border-1 border-black bg-violet-100">
        {/* MAIN MENU */}
        <div className="border-1 my-4 border-black shadow-md rounded-xl max-w-screen-sm w-4/5 ">
          {/* TITLE DIV */}
          {/* <div className="bg-lime-300 p-4 font-bold rounded-tl-lg rounded-tr-lg flex items-center justify-center ">
            <h1 className="text-2xl">REGISTER NOW</h1>
          </div> */}
          {/* FORM */}
          <form className="p-4 bg-white" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="px-4 py-3 mt-2 font-bold rounded-lg text-white bg-violet-900 w-full">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
