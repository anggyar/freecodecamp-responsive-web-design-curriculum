const galleryItems = document.querySelectorAll(".gallery-item");
console.log(galleryItems);
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector("#close-btn");
const lightboxImage = document.querySelector("#lightbox-image");

function turnOnLightbox(src) {
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    let urlFull = item.getAttribute("src");

    let modifiedUrl = `${urlFull.split("-")[0]}.jpg`;
    turnOnLightbox(modifiedUrl);

    lightboxImage.setAttribute("src", modifiedUrl);
  });
});
