import KeyIcon from "../assets/KeyIcon";
import MailIcon from "../assets/MailIcon";
import UserIcon from "../assets/UserIcon";
import { Link } from "react-router";

const SignUp = () => {
    // Dummy function for registration
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration attempted!");
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
                            />
                        </label>
                        <label className="input-custom grow gap-2">
                            <UserIcon />
                            <input
                                name="lastName"
                                className="grow"
                                placeholder="Last name"
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
                            />
                        </label>
                        <label className="input-custom grow gap-2">
                            <KeyIcon />
                            <input
                                name="confirmPassword"
                                type="password"
                                className="grow"
                                placeholder="Confirm your password..."
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
