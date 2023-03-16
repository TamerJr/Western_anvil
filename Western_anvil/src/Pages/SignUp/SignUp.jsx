import React, { useContext } from "react";
import Form from "../../Components/Form/Form";
import userContext from "../../Context/AuthContext";

const SignUp = () => {
  const {user, signUp ,setEmail,setPassword} = useContext(userContext);
  console.log(user)
  return (
    <form onSubmit={signUp}>
      <p>
        <label>Email</label>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <label>Password</label>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
