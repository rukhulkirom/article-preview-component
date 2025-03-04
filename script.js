const share = document.querySelector("#share");
const shareIcon = document.querySelectorAll(".share-icon");

for (let i = 0; i < shareIcon.length; i++) {
  shareIcon[i].addEventListener("click", () => {
    share.classList.value == "share slide-out-bottom"
      ? (share.classList.value = "share slide-top")
      : (share.classList.value = "share slide-out-bottom");
  });
}
