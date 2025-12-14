// BASIC SETUP
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f9fafb";

// HEADER
const header = document.createElement("header");
header.style.position = "fixed";
header.style.top = "0";
header.style.width = "100%";
header.style.background = "#0f172a";
header.style.color = "white";
header.style.padding = "15px 20px";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.zIndex = "1000";

header.innerHTML = `
  <div style="display:flex;align-items:center;gap:10px;">
    <img src="logo.jpg" style="height:40px;">
    <b style="font-size:18px;">VELRION PUBLICATION</b>
  </div>
  <div style="font-size:14px;">Premium eBooks</div>
`;
document.body.appendChild(header);

// HERO SECTION
const hero = document.createElement("section");
hero.style.marginTop = "90px";
hero.style.padding = "40px 20px";
hero.style.display = "flex";
hero.style.flexWrap = "wrap";
hero.style.alignItems = "center";
hero.style.justifyContent = "space-between";
hero.style.background = "linear-gradient(135deg,#e0f2fe,#fef9c3)";

hero.innerHTML = `
  <div style="max-width:500px;">
    <h1 style="font-size:32px;margin-bottom:15px;">
      Discover Powerful Books That Shape Thinking
    </h1>
    <p style="font-size:16px;margin-bottom:20px;">
      Premium books on mindset, trading & success curated by 
      <b>Shivam Vanjare</b>, focused on mindset, wealth, and silent power.
    </p>
    <p style="color:#166534;font-weight:bold;">
      ✔ Legally available on all major platforms
    </p>
  </div>

  <img src="hero.jpg" style="max-width:420px;width:100%;border-radius:12px;">
`;
document.body.appendChild(hero);

// BUY INFO POPUP
function showBuyInfo(bookName) {
  alert(
    bookName +
    "\n\nThis book is legally available on all major platforms.\n\n" +
    "You can purchase it from:\n" +
    "• Amazon Kindle\n" +
    "• Google Play Books\n" +
    "• Apple Books\n\n" +
    "🔍 Search the book name on your preferred platform.\n\n" +
    "🔥 Limited Time Offer: Up to 20% OFF\n\n" +
    "Hurry and grab your copy!"
  );
}

// PRODUCTS DATA
const products = [
  { name: "THINK LIKE MONEY", price: "₹199", img: "book1.jpg" },
  { name: "MILLIONAIRE HABITS", price: "₹249", img: "book2.jpg" },
  { name: "THE ART OF SILENT POWER", price: "₹299", img: "book3.jpg" },
  { name: "OPPOSE THE COMMON PATH", price: "₹349", img: "book4.jpg" }
];

// SHOP SECTION
const shop = document.createElement("section");
shop.style.padding = "40px 20px";

shop.innerHTML = `
  <h2 style="text-align:center;margin-bottom:30px;">
    Our Book Collection
  </h2>
`;

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(auto-fit,minmax(220px,1fr))";
grid.style.gap = "20px";

// CREATE PRODUCT CARDS
products.forEach(product => {
  const card = document.createElement("div");
  card.style.background = "white";
  card.style.borderRadius = "12px";
  card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  card.style.padding = "15px";
  card.style.textAlign = "center";

  card.innerHTML = `
    <img src="${product.img}" style="width:100%;border-radius:8px;margin-bottom:10px;">
    <h3 style="font-size:16px;">${product.name}</h3>
    <p style="font-weight:bold;color:#0f172a;">${product.price}</p>
    <p style="font-size:12px;color:#166534;">
      Available on Amazon, Google Play & Apple Books
    </p>
    <button style="
      margin-top:10px;
      padding:10px 15px;
      background:#2563eb;
      color:white;
      border:none;
      border-radius:6px;
      cursor:pointer;
    ">
      Buy Now
    </button>
  `;

  card.querySelector("button").onclick = () => showBuyInfo(product.name);
  grid.appendChild(card);
});

shop.appendChild(grid);
document.body.appendChild(shop);

// FOOTER
const footer = document.createElement("footer");
footer.style.background = "#020617";
footer.style.color = "#cbd5f5";
footer.style.padding = "30px 20px";
footer.style.marginTop = "40px";
footer.style.textAlign = "center";

footer.innerHTML = `
  <p><b>Velrion Publication</b></p>
  <p>Managing Director: Shivam Vanjare</p>
  <p>Contact: <a href="mailto:velrion1818@gmail.com" style="color:#93c5fd;">velrion1818@gmail.com</a></p>
  <p style="font-size:12px;margin-top:10px;">
    Privacy Policy • Terms of Use • Service Policy
  </p>
`;
document.body.appendChild(footer);
