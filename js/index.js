// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var signUpButton = document.getElementById("signup-button");

var signInButton = document.getElementById("signIn-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

signUpButton.onclick = function(){
    modal.style.display = "block";
};


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    // alert("clicked span");
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};