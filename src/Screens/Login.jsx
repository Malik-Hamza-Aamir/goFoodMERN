import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log("Response given ");
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if(json.success) {
        localStorage.setItem("userEmail" , credentials.email);
        localStorage.setItem("authToken" , json.authToken);
        console.log(localStorage.getItem("authToken"));
        console.log(localStorage.getItem("userEmail"));
        navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-primary">
            Login
          </button>

          <Link to="/createuser" className="m-3 btn btn-danger">
            I am a New User
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
