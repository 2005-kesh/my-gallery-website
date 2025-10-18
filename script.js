// Array of images (replace URLs with your own)
const images = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", caption: "Nature Beauty" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", caption: "Mountain View" },
  { src: "https://images.unsplash.com/photo-1494526585095-c41746248156", caption: "Urban Life" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", caption: "Ocean Waves" },
  { src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63", caption: "City Lights" },
  { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9", caption: "Beautiful Sky" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", caption: "Wild Forest" },
  { src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2", caption: "Calm Lake" },
  { src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", caption: "Flower Field" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", caption: "Desert Dunes" },
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

// Display gallery images dynamically
images.forEach(imgData => {
  const item = document.createElement("div");
  item.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = imgData.src;
  img.alt = imgData.caption;

  const caption = document.createElement("p");
    caption.textContent = imgData.caption;

    item.appendChild(img);
    item.appendChild(caption);
    gallery.appendChild(item);

    // Click event to open lightbox
    item.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = imgData.src;
        lightboxCaption.textContent = imgData.caption;
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});