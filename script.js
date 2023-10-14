document.addEventListener("DOMContentLoaded", function() {
  const popupMessage = document.getElementById("popupMessage");

  // Function to show the popup message
  function showPopupMessage() {
    popupMessage.style.display = "block";
    setTimeout(function() {
      popupMessage.style.display = "none";
      // Redirect to the new link address after 4 seconds (adjust the time as needed)
      window.location.href = "https://www.google.com/"; // Replace with your desired link address
    }, 700000); // Adjust the time as needed (3 seconds in this example)
  }

  // Show the popup message and redirect when the page loads
  showPopupMessage();
});

