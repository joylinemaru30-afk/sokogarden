import axios from "axios";
import React, { useState } from "react";
// import "../styles/loader.css";
import "./stylings/Signin.css";

const Signupcomponent = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");

  // Hourglass loader
  const Loader = () => (
    <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
  );

  const submit = async (e) => {
    e.preventDefault();
    setloading(true);
    setsuccess("");
    seterror("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      await axios.post("https://joykosgei.pythonanywhere.com/api/signup", data);

      setloading(false);
      setsuccess("✅ User registered successfully");
      setusername("");
      setphone("");
      setemail("");
      setpassword("");
    } catch (err) {
      setloading(false);
      seterror("❌ Sorry, registration failed.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 shadow card signup-card">
        <h1>Signup</h1>

        {loading && <Loader />}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={submit}>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter username here"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <br />

          <input
            type="email"
            className="form-control"
            required
            placeholder="Enter the email address here"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />

          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter your phone number here"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <br />

          <input
            type="password"
            className="form-control"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupcomponent;
