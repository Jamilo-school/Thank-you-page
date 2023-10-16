document.addEventListener("DOMContentLoaded", function() {
  const popupMessage = document.getElementById("popupMessage");

  // Function to show the popup message
  function showPopupMessage() {
    popupMessage.style.display = "block";
    setTimeout(function() {
      popupMessage.style.display = "none";
      // Redirect to the new link address after 4 seconds (adjust the time as needed)
      window.location.replace("https://www.google.com/"); // Replace with your desired link address
      // Close the page after 1 second
      setTimeout(function() {
        window.close();
      }, 10);
    }, 15000); // Adjust the time as needed (4 seconds in this example)
  }

  // Show the popup message and redirect when the page loads
  showPopupMessage();
});
