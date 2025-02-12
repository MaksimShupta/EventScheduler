// getting automatically the localhost
const signIn_url = `${window.location.origin}/sign-in`;
const signUp_url = `${window.location.origin}/sign-up`;

const signUp = async (
  firstname,
  lastname,
  email,
  password,
  confirmPassword
) => {
  try {
    console.log("sign up url: ", signUp_url);
    const response = await fetch(`${signUp_url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    // Parse JSON response
    const data = await response.json();
    console.log("You've successfully signed in !", data);
    return data;
  } catch (error) {
    console.error("Sign-in failed:", error);
  }
};

const logIn = async (username, password) => {
  try {
    const response = await fetch(`${signIn_url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    // Parse JSON response
    const data = await response.json();
    console.log("You've successfully logged in !", data);
    return data;
  } catch (error) {
    console.error("Log-in failed:", error);
  }
};

export { logIn, signUp };
