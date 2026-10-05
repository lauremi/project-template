function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated database users
    const users = [
        {
            username: "admin",
            password: "admin123"
        },
        {
            username: "mega-admin",
            password: "yesplease2000"
        }
    ];

    const userFound = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (userFound) {
        window.location.href = "userdashboard.html";
    }
    else {
        document.getElementById("errorMessage").textContent =
            "Invalid username or password.";
    }
}