const USERS_KEY = "users";
const SESSION_KEY = "currentUser";

// Get users
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];

const saveUsers = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

// Sign up function (registers a new user)
const signUp = (firstname, lastname, email, password) => {
  let users = getUsers();

  // Check if email is already registered
  if (users.some((user) => user.email === email)) {
    console.error("Email is already in use!");
    return { success: false, message: "Email is already registered" };
  }

  // Add new user
  users.push({ firstname, lastname, email, password });
  saveUsers(users);

  console.log("User registered successfully!");
  return { success: true };
};

// Log in function (verifies user credentials)
const logIn = (email, password) => {
  let users = getUsers();
  console.log("Users:", users);
  console.log("Mail:", String(email));
  console.log("Pass:", password);
  console.log("Users from localStorage:", JSON.stringify(users, null, 2));

  // Find user
  const user = users.find(
    (u) => u.email === email.trim() && u.password === password.trim()
  );
  console.log("User:", user);

  if (user) {
    // Save current session
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    console.log("You've successfully logged in!");
    return { success: true, user };
  } else {
    console.error("Invalid email or password");
    return { success: false, message: "Invalid credentials" };
  }
};

// Check if a user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem(SESSION_KEY);
};

// Logout function (clears session)
const logOut = () => {
  localStorage.removeItem(SESSION_KEY);
  console.log("You've logged out.");
};

export { signUp, logIn, isAuthenticated, logOut };
