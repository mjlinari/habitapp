import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../states/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", { email, password })
      .then(() => axios.get("/api/auth/me"))
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("user", JSON.stringify(res.data))
        history.push("/");
      })
      .catch((error) => {
        if (error.response.status === 401) alert("Mal la clave o el usuario, gil")

        console.log("ERROR", {error})});
  };

  return (
    <>
      <div className="w-25 m-auto padtop" id="loginForm">
        <form onSubmit={handleSubmit}>
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

export default LoginForm;
