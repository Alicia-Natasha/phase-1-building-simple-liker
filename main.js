// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  hearts.forEach(heart => {
      heart.addEventListener("click", () => {
          if (!heart.classList.contains("activated-heart")) {
              // Simulate server request
              mimicServerCall()
                  .then(() => {
                      // Success: Change to full heart
                      heart.textContent = "♥";
                      heart.classList.add("activated-heart");
                  })
                  .catch((error) => {
                      // Failure: Show error modal with message
                      modalMessage.textContent = error;
                      errorModal.classList.remove("hidden");

                      // Hide modal after 3 seconds
                      setTimeout(() => {
                          errorModal.classList.add("hidden");
                      }, 3000);
                  });
          } else {
              // Toggle back to empty heart on click
              heart.textContent = "♡";
              heart.classList.remove("activated-heart");
          }
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
