import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use.");
      } else {
        console.log("user creation: ", error);
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        {/* <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName
          }}
        ></FormInput> */}

        <FormInput
          label="Display Name: "
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          label="Email: "
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password:"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>

        <Button buttonType={BUTTON_TYPE_CLASSES.google} type="submit">
          Sign Up
        </Button>

        {/* <Button buttonType="google" type="submit">
          Sign Up
        </Button> */}
      </form>
    </div>
  );
};

export default SignUpForm;
