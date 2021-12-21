import axios from "axios";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../states/user";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", { name, lastname, email, password })
      .then(() => {
        history.push("/login");
      });
  };

  return (
    <>
      <div className="w-25 m-auto padtop">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="Name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputLastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputLastName"
              aria-describedby="emailHelp"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" class="btn btn-outline-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
