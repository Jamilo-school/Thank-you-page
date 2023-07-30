document.addEventListener("DOMContentLoaded", function() {
  const popupMessage = document.getElementById("popupMessage");

  // Function to show the popup message
  function showPopupMessage() {
    popupMessage.style.display = "block";
    setTimeout(function() {
      popupMessage.style.display = "none";
      // Redirect to the new link address after 4 seconds (adjust the time as needed)
      window.location.href = "https://jamilo-school.github.io/2023-Grade-5-E-portfolio/"; // Replace with your desired link address
    }, 3000);
  }

  // Show the popup message and redirect when the page loads
  showPopupMessage();
});
