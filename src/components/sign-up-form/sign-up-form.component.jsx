import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () =>{
    setFormFields(defaultFormFields);
  }

  console.log(formFields);

  const handleSubmit = async(event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert("Password do not match.");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);

      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    } catch (error) {

      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use.");
      } else {
        console.log('user creation: ', error);
      }
      
    }
   

    // if (formFields.password === formFields.confirmPassword) {
    //   const createdUser = createAuthUserWithEmailAndPassword(
    //     formFields.email,
    //     formFields.password
    //   );
    //   console.log('signup' + createdUser);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email</h1>
      <form onSubmit={handleSubmit}>
        <label>Displayname: </label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>

        <label>Email: </label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></input>

        <label>Password: </label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>

        <label>Confirm Password: </label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
