const share = document.querySelector("#share");
const shareIcon = document.querySelectorAll(".share-icon");

shareIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    share.classList.value == "share slide-out-bottom"
      ? (share.classList.value = "share slide-top")
      : (share.classList.value = "share slide-out-bottom");
  });
});
