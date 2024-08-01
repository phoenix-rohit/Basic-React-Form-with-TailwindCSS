import { useState } from "react";
import "./output.css";
import validator from "validator";

export default function App() {
  return <Form />;
}

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleReset(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUsername("");
  }

  function handleSubmit(e) {
    // preventing refersh on submit
    e.preventDefault();

    // Validations for empty inputs
    if (username === "" || email === "" || password === "") {
      return;
    }

    // Validations for Users Inputs
    if (
      username.length < 4 ||
      !validator.isEmail(email) ||
      password.length < 8
    ) {
      return;
    }

    const formData = { username, email, id: Date.now() };
    console.log(formData);
    handleReset();
  }

  return (
    <div className="p-24 my-32 min-h-screen max-w-2xl md:w-full  mx-auto">
      <div className="bg-[#444] text-white p-24 ">
        <form>
          <div className="mb-32 flex flex-col group">
            <label htmlFor="username">Username</label>
            <input
              className=""
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-32 flex flex-col group">
            <label htmlFor="email">Email</label>
            <input
              className=""
              type="text"
              id="username"
              placeholder="email@johndoe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-32 flex flex-col group">
            <label htmlFor="password">Password</label>
            <input
              className=""
              type="password"
              id="password"
              placeholder="Password goes here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-x-10">
            <button onClick={handleSubmit}>Sumbit</button>
            <button
              className="bg-gradient from-orange-700 to-orange-500"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
