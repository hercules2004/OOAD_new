//const Web3=require("web3");
document.addEventListener("DOMContentLoaded", () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
        const ethereumButton = document.getElementById("connectButton");
        const addressText = document.getElementById("address");

        ethereumButton.addEventListener("click", async () => {
            try {
                // Request MetaMask to connect
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                const address = accounts[0];

                // Display the user's wallet address
                addressText.textContent = address;
            } catch (error) {
                console.error(error);
                addressText.textContent = "An error occurred while connecting.";
            }
        });
    } else {
        alert("MetaMask is not installed. Please install it to use this feature.");
    }
    
});