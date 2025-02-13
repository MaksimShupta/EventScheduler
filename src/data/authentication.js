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

const logIn = (email, password) => {
    // Sicherstellen, dass email und password existieren
    if (!email || !password) {
        console.error("Email and password must be provided!");
        return { success: false, message: "Please enter email and password." };
    }

    let users = getUsers();
    console.log("Users from localStorage:", JSON.stringify(users, null, 2));

    // Find user, aber mit optional chaining `?.trim()` um Fehler zu vermeiden
    const user = users.find(
        (u) =>
            u.email?.trim() === email?.trim() &&
            u.password?.trim() === password?.trim()
    );

    if (!user) {
        console.error("Invalid email or password");
        return { success: false, message: "Invalid credentials" };
    }

    // Save current session
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    console.log("You've successfully logged in!");
    return { success: true, user };
};

// Check if a user is authenticated
const isAuthenticated = () => {
    return !!localStorage.getItem(SESSION_KEY);
};

// Logout function (clears session)
const logOut = () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.reload();
    console.log("You've logged out.");
};

export { signUp, logIn, isAuthenticated, logOut };
