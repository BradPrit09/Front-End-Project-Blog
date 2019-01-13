// Get the SignIn modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Get the SignUp Modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Code for Create Post modal */

//Get the modal
var createPost = document.getElementById("createPost01");

//Get the button that opens the modal
var secondBtn = document.getElementById("myCreatePostBtn");

// When the user clicks on the button open the modal
secondBtn.onclick = function () {
    createPost.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the All post button that opens the bloglist.html file
var allPostBtn = document.getElementById("myAllPostsBtn");
// When the user clicks on "All posts" button , opens the bloglist.html file
allPostBtn.onclick = function () {
    //window.open("../html/bloglist.html", "_self");
    window.location.href = 'html/bloglist.html';
};

