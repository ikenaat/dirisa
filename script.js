// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to handle with JavaScript

    // Get user input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple check for empty inputs
    if (!username || !password) {
        displayMessage("Please fill in both username and password.", "error");
        return;
    }

    // For simplicity, simulate a successful login (real apps would verify this on the server)
    if (username === 'user' && password === '123') {
        // Simulate a successful login
        displayMessage("Login successful! Redirecting to the homepage...", "success");
        setTimeout(function() {
            window.location.href = "index.html"; // Redirect to homepage after login
        }, 2000); // Delay to allow the user to read the success message
    } else {
        displayMessage("Oops! Invalid username or password. Please try again.", "error");
    }
});

// Function to display custom messages
function displayMessage(message, type) {
    const messageContainer = document.getElementById("messageContainer");
    
    if (!messageContainer) {
        // If message container doesn't exist, create it dynamically
        const newMessageContainer = document.createElement("div");
        newMessageContainer.id = "messageContainer";
        newMessageContainer.style.marginTop = "10px";
        document.getElementById("loginForm").appendChild(newMessageContainer);
    }

    // Update the message container
    const container = document.getElementById("messageContainer");
    container.textContent = message;
    container.style.color = type === "error" ? "red" : "green";
    container.style.fontSize = "16px";
    container.style.fontWeight = "bold";
    container.style.textAlign = "center";



    // script.js
function searchAnime() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const animeCards = document.querySelectorAll(".anime-card");
    
    animeCards.forEach(card => {
        const title = card.textContent.toLowerCase();
        
        if (title.includes(searchTerm)) {
            card.style.display = "block"; // Show the card if it matches the search
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match
        }
    });
}

}
