import KeyIcon from "../assets/KeyIcon";
import UserIcon from "../assets/UserIcon";
import { Link } from "react-router";

const AuthPage = () => {
    // Dummy function for login
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login attempted!");
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
                        />
                    </label>
                    <label className="input-custom">
                        <KeyIcon />
                        <input
                            name="password"
                            type="password"
                            className="grow"
                            placeholder="Enter your password"
                        />
                    </label>
                    <button className="btn-primary block mx-auto text-lg">
                        Log In
                    </button>
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
