// ------ PRODUCTS DATA ------
const books = [
  { id: 1, title: "Functional Training", price: 20, image: "1.jpg" },
  { id: 2, title: "Functional Biology", price: 25, image: "2.jpg" },
  { id: 3, title: "The bike guy", price: 15, image: "3.jpg" },
  { id: 4, title: "Win-Win strategy", price: 18, image: "4.jpg" },
  { id: 5, title: "Computer whiz", price: 22, image: "5.jpg" },
  { id: 6, title: "Item Book", price: 30, image: "6.jpg" },
  { id: 7, title: "Show case", price: 14, image: "7.jpg" },
  { id: 8, title: "Power less", price: 12, image: "8.jpg" }
];

const productList = document.getElementById("productList");
const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");

// ------ RENDER PRODUCTS ------
function renderProducts(data) {
  productList.innerHTML = "";
  data.forEach(book => {
    const product = document.createElement("div");
    product.classList.add("product-item");
    product.innerHTML = `
      <img src="${book.image}" data-id="${book.id}" class="product-img">
      <h3>${book.title}</h3>
      <p>$${book.price}</p>
    `;
    productList.appendChild(product);
  });
  attachModalEvents();
}
renderProducts(books);

// ------ SEARCH FILTER ------
searchBox.addEventListener("keyup", () => {
  const keyword = searchBox.value.toLowerCase();
  const filtered = books.filter(b => b.title.toLowerCase().includes(keyword));
  renderProducts(filtered);
});

// ------ SORT FUNCTION ------
sortSelect.addEventListener("change", () => {
  const sorted = [...books];
  if (sortSelect.value === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  }
  renderProducts(sorted);
});

// ------ MODAL FUNCTIONALITY ------
const modal = document.getElementById("bookModal");
const overlay = document.getElementById("overlay");
const closeModalBtn = document.querySelector(".close-modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");

function attachModalEvents() {
  const productImages = document.querySelectorAll(".product-img");
  productImages.forEach(img => {
    img.addEventListener("click", () => {
      const id = img.getAttribute("data-id");
      const book = books.find(b => b.id == id);
      modalImage.src = book.image;
      modalTitle.textContent = book.title;
      modalPrice.textContent = "$" + book.price;
      modal.classList.add("active");
      overlay.classList.add("active");
    });
  });
}

// ------ CLOSE MODAL ------
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
/* ---------- Side Drawer (mobile) ---------- */
 // ---------- Side Drawer (mobile) ----------
const menuToggle = document.getElementById('menuToggle');
const sideDrawer = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const closeDrawer = document.getElementById('closeDrawer');

menuToggle.addEventListener('click', function() {
  const open = sideDrawer.classList.toggle('open');
  drawerOverlay.classList.toggle('visible', open);
  sideDrawer.setAttribute('aria-hidden', !open);
  this.setAttribute('aria-expanded', open);
});

closeDrawer.addEventListener('click', function() {
  sideDrawer.classList.remove('open');
  drawerOverlay.classList.remove('visible');
  sideDrawer.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
});

drawerOverlay.addEventListener('click', function() {
  sideDrawer.classList.remove('open');
  drawerOverlay.classList.remove('visible');
  sideDrawer.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
});

document.querySelectorAll('.drawer-link').forEach(l => {
  l.addEventListener('click', () => {
    sideDrawer.classList.remove('open');
    drawerOverlay.classList.remove('visible');
    sideDrawer.setAttribute('aria-hidden','true');
    menuToggle.setAttribute('aria-expanded','false');
  });
});

  /* ---------- Anchor scroll offset for fixed header ---------- */
// Select all sections that have an ID
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY + 150; // offset for navbar height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href*=${sectionId}]`).classList.add("active");
    } else {
      document.querySelector(`.nav-link[href*=${sectionId}]`).classList.remove("active");
    }
  });
});
