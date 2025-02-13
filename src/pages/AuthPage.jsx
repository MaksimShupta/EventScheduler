import KeyIcon from "../assets/KeyIcon";
import UserIcon from "../assets/UserIcon";
import { Link } from "react-router";
import { logIn } from "../data/authentication";
import { useState } from "react";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const filledOutField = Object.entries(formData).find(
      ([key, value]) => !value
    );
    if (filledOutField) {
      alert(`Please fill in the ${filledOutField[0]} field.`);
      return;
    }

    try {
      const response = await logIn(formData.username, formData.password);
      console.log("Log-in response:", response);
      alert("You successfully logged in!");
    } catch (error) {
      console.error("Log-in failed!", error);
      alert("Log-in failed. Please try again.");
    }
  };

  return (
    <div className="items-center flex flex-col py-10 tracking-wide">
      <h2 className="font-bold textLight text-3xl mb-10">
        Welcome Back! Log in to your account
      </h2>
      <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 bg-bgLight space-y-10">
        <form onSubmit={handleLogin} className="space-y-8">
          <label className="input-custom">
            <UserIcon />
            <input
              name="username"
              type="text"
              className="grow"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label className="input-custom">
            <KeyIcon />
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className="btn-primary block mx-auto text-lg">Log In</button>
        </form>
        <p className="text-center font-light">
          No account yet?{" "}
          <Link to="/sign-up" className="btn-secondary ml-4">
            Sign up now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
