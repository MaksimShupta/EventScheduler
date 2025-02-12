import KeyIcon from "../assets/KeyIcon";
import MailIcon from "../assets/MailIcon";
import UserIcon from "../assets/UserIcon";
import { Link } from "react-router";
import { signUp, logIn } from "../data/authentication";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        // Check if the new user data matches the stored data (email check or all fields)
        if (
          parsedUserData.email === formData.email ||
          (parsedUserData.firstName === formData.firstName &&
            parsedUserData.lastName === formData.lastName &&
            parsedUserData.email === formData.email)
        ) {
          alert(
            "An account with this information already exists. Please log in."
          );
          return;
        }
      }
      //checking if all fields are filled out
      console.log("form data: ", formData);
      const filledOutField = Object.entries(formData).find(
        ([key, value]) => !value
      );

      if (filledOutField) {
        alert(`Please fill in the ${filledOutField[0]} field.`);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      const response = await signUp(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        formData.confirmPassword
      );

      console.log("Sign-up response:", response.json());
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Account created successfully!");
    } catch (error) {
      console.error("Sign-up failed!", error);
      alert("Sign-up failed! Try again.");
    }
  };

  return (
    <div className="items-center flex flex-col  px-4 py-10">
      <h2 className="font-bold textLight text-3xl mb-10">
        Let’s Make Some Events Happen – Sign Up!
      </h2>
      <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-bgLight space-y-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between gap-2">
            <label className="input-custom grow gap-2">
              <UserIcon />
              <input
                name="firstName"
                className="grow"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <label className="input-custom grow gap-2">
              <UserIcon />
              <input
                name="lastName"
                className="grow"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="input-custom grow gap-2">
            <MailIcon />
            <input
              name="email"
              type="email"
              className="grow"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-between gap-2">
            <label className="input-custom grow gap-2">
              <KeyIcon />
              <input
                name="password"
                type="password"
                className="grow"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className="input-custom grow gap-2">
              <KeyIcon />
              <input
                name="confirmPassword"
                type="password"
                className="grow"
                placeholder="Confirm your password..."
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </div>

          <button className="btn-primary block mx-auto text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center font-light">
          Already have an account?{" "}
          <Link to="/sign-in" className="btn-secondary ml-4">
            Log in here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
