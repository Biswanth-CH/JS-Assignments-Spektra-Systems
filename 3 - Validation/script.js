function validateForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const terms = document.getElementById("terms").checked;

  if (!/^[A-Za-z\s]+$/.test(fullName)) {
    alert("Full name should contain only letters and spaces.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  if (!terms) {
    alert("You must agree to the terms and conditions.");
    return false;
  }

  displayConfirmation(fullName, email);
  return false;
}

function displayConfirmation(fullName, email) {
  document.getElementById("signupForm").style.display = "none";

  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";

  const submittedDetails = document.getElementById("submittedDetails");
  submittedDetails.innerHTML = `
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
    `;
}
