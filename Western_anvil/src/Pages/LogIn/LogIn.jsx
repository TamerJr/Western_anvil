import React, { useContext } from "react";
import Form from "../../Components/Form/Form";
import userContext from "../../Context/AuthContext";

const LogIn = () => {
  const { signIn ,setEmail,setPassword} = useContext(userContext);
 
  return (
    <form onSubmit={signIn}>
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

export default LogIn;
