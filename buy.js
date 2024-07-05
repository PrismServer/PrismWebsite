// script.js
function buyRank(rank) {
    const userResponseMessage = document.getElementById('userResponse-message');
    
    if (rank === 'VIP Gold') {
        userResponseMessage.textContent = `You have selected to buy the ${rank} rank. Please Pm Ofpi Chrus for the Payment Thankyou!!`;
    } else if (rank === 'VIP Diamond') {
        userResponseMessage.textContent = `You have selected to buy the ${rank} rank. Please Pm Ofpi Chrus for the Payment Thankyou!!`;
    } else {
        userResponseMessage.textContent = `You have selected to buy an unknown rank. Please contact support.`;
    }

    // Show the notification
    const userResponse = document.getElementById('userResponse');
    userResponse.style.display = 'block';
}

function closeUserResponse() {
    // Hide the notification
    const userResponse = document.getElementById('userResponse');
    userResponse.style.display = 'none';
}

function continuePurchase() {
    alert("Proceeding to payment gateway...");
    // You can redirect to a payment gateway or another page here
    closeUserResponse();
}

function cancelPurchase() {
    alert("Purchase canceled.");
    closeUserResponse();
}
