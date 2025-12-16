// BASIC SETUP
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f9fafb";

// ================= HEADER =================
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

// ================= HERO =================
const hero = document.createElement("section");
hero.style.marginTop = "90px";
hero.style.padding = "50px 20px";
hero.style.display = "flex";
hero.style.flexWrap = "wrap";
hero.style.alignItems = "center";
hero.style.justifyContent = "space-between";
hero.style.background = "linear-gradient(135deg,#e0f2fe,#fef9c3)";

hero.innerHTML = `
  <div style="max-width:520px;">
    <h1 style="font-size:34px;margin-bottom:15px;">
      Discover Powerful Books That Shape Thinking
    </h1>
    <p style="font-size:16px;margin-bottom:15px;">
      Premium books on mindset, trading & success curated by 
      <b>Shivam Vanjare</b>, focused on mindset, wealth, and silent power.
    </p>
    <p style="color:#166534;font-weight:bold;">
      ✔ Legally available on all major platforms
    </p>
  </div>

  <img src="hero.jpg" style="max-width:420px;width:100%;border-radius:14px;">
`;
document.body.appendChild(hero);

// ================= WHY VELRION =================
const why = document.createElement("section");
why.style.padding = "50px 20px";
why.style.maxWidth = "900px";
why.style.margin = "auto";

why.innerHTML = `
  <h2>Why Velrion Publication?</h2>
  <p>
    Our books are written for thinkers who prefer clarity over noise,
    patience over impulse, and silent power over loud success.
  </p>
`;
document.body.appendChild(why);

// ================= POPULAR BOOKS (TEXT ONLY) =================
const popular = document.createElement("section");
popular.style.padding = "30px 20px";
popular.style.maxWidth = "900px";
popular.style.margin = "auto";

popular.innerHTML = `
  <h2>Popular Books</h2>
  <ul>
    <li>The Art of Silent Power</li>
    <li>Oppose the Common Path – Why Doing the Opposite Makes You Rich</li>
    <li>Dopamine Fasting</li>
    <li>The Invisible Rules of Wealth</li>
  </ul>
`;
document.body.appendChild(popular);

// ================= DISCOVER (DEPTH SECTION) =================
const discover = document.createElement("section");
discover.style.padding = "50px 20px";
discover.style.background = "#ffffff";

discover.innerHTML = `
  <div style="max-width:900px;margin:auto;">
    <h2>Build Wealth. Master the Mind. Move in Silence.</h2>
    <p>
      Velrion Publication curates premium books on mindset, trading psychology
      and long-term success for individuals who think differently.
    </p>
    <p>
      These books are created for readers who really want to do something in life
      and value clarity over noise, discipline over impulse, and silent power over loud success.
    </p>
    <p>
      Each title by <b>Shivam Vanjare</b> strengthens decision-making,
      emotional control, wealth mindset and independent thinking.
    </p>
  </div>
`;
document.body.appendChild(discover);

// ================= SHOP =================
function showBuyInfo(bookName) {
  alert(
    bookName +
    "\n\nLegally available on:\n• Amazon Kindle\n• Google Play Books\n• Apple Books"
  );
}

const products = [
  { name: "The Art of Silent Power", price: "₹299", img: "book3.jpg" },
  { name: "Oppose the Common Path", price: "₹349", img: "book4.jpg" }
];

const shop = document.createElement("section");
shop.style.padding = "50px 20px";

shop.innerHTML = `<h2 style="text-align:center;">View Books</h2>`;
const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(auto-fit,minmax(220px,1fr))";
grid.style.gap = "20px";

products.forEach(p => {
  const card = document.createElement("div");
  card.style.background = "white";
  card.style.padding = "15px";
  card.style.borderRadius = "12px";
  card.style.textAlign = "center";
  card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";

  card.innerHTML = `
    <img src="${p.img}" style="width:100%;border-radius:8px;">
    <h3>${p.name}</h3>
    <p><b>${p.price}</b></p>
    <button style="padding:10px 15px;background:#2563eb;color:white;border:none;border-radius:6px;">
      Buy Now
    </button>
  `;

  card.querySelector("button").onclick = () => showBuyInfo(p.name);
  grid.appendChild(card);
});

shop.appendChild(grid);
document.body.appendChild(shop);

// ================= ABOUT FOUNDER =================
const about = document.createElement("section");
about.style.padding = "50px 20px";
about.style.background = "#f1f5f9";

about.innerHTML = `
  <div style="max-width:900px;margin:auto;">
    <h2>About the Founder</h2>
    <p>
      <b>Shivam Vanjare</b> is an entrepreneur, author, trader and digital publisher
      with deep experience in trading psychology, investing mindset and long-term
      wealth principles.
    </p>
  </div>
`;
document.body.appendChild(about);

// ================= FOOTER =================
const footer = document.createElement("footer");
footer.style.background = "#020617";
footer.style.color = "#cbd5f5";
footer.style.padding = "30px";
footer.style.textAlign = "center";

footer.innerHTML = `
  <p><b>Velrion Publication</b></p>
  <p>Founder: Shivam Vanjare</p>
`;
document.body.appendChild(footer);
