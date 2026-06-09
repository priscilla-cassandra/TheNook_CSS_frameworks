const newPost = document.getElementById("new-post");
const closeButton = document.getElementById("close-button");
const newPostOverlay = document.getElementById("new-post-overlay");

newPost.addEventListener("click", () => {
  newPostOverlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  newPostOverlay.classList.add("hidden");
});
