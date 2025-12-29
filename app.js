// ================= BASIC SETUP =================
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f9fafb";
document.body.style.perspective = "1000px";

// ================= HEADER =================
const header = document.createElement("header");
Object.assign(header.style, {
  position: "fixed",
  top: "0",
  width: "100%",
  background: "#0f172a",
  color: "white",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: "1000",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
});

header.innerHTML = `
  <div style="display:flex;align-items:center;gap:10px;">
    <img src="logo.jpg" style="height:42px;">
    <b style="font-size:18px;">VELRION PUBLICATION</b>
  </div>
  <div style="font-size:14px;">Premium eBooks</div>
`;
document.body.appendChild(header);

// ================= HERO =================
const hero = document.createElement("section");
Object.assign(hero.style, {
  marginTop: "90px",
  padding: "70px 20px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  background: "linear-gradient(135deg,#e0f2fe,#fef9c3)",
  transformStyle: "preserve-3d"
});

hero.innerHTML = `
  <div style="max-width:520px;">
    <h1 style="font-size:36px;margin-bottom:15px;">
      Build Wealth. Master the Mind. Move in Silence.
    </h1>
    <p style="font-size:16px;margin-bottom:20px;">
      Velrion Publication is a premium digital publishing brand founded by
      <b>Shivam Vanjare</b>, Focused on Mindset mastery, Wealth creation,
      Trading psychology and Long-Term Success.
    </p>
    <p style="color:#166534;font-weight:bold;">
      ✔ Legally available on all Major Platforms
    </p>
  </div>

  <img src="hero.jpg"
       style="max-width:420px;width:100%;border-radius:16px;
              box-shadow:0 25px 60px rgba(0,0,0,0.25);
              transform:translateZ(40px);">
`;
document.body.appendChild(hero);

// ================= WHY =================
const why = document.createElement("section");
why.style.padding = "60px 20px";
why.style.maxWidth = "900px";
why.style.margin = "auto";

why.innerHTML = `
  <h2>Why Velrion Publication?</h2>
  <p>
    Our Books are written for Thinkers who prefer Clarity Over Noise,
    Patience over Impulse, and Silent Power over Loud Success.
  </p>
`;
document.body.appendChild(why);

// ================= POPULAR BOOKS =================
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

// ================= DISCOVER =================
const discover = document.createElement("section");
discover.style.padding = "60px 20px";
discover.style.background = "#ffffff";

discover.innerHTML = `
  <div style="max-width:900px;margin:auto;">
    <h2>Discover Powerful Books That Shape Thinking</h2>
    <p>
      These Books are created for Readers Who Value Clarity over Noise,
      Discipline over Impulse, and Silent Power over loud Success.
    </p>
    <p>
      Each title by <b>Shivam Vanjare</b> strengthens Decision-Making,
      Wmotional Control, Wealth Mindset and Independent Thinking.
    </p>
  </div>
`;
document.body.appendChild(discover);

// ================= SHOP =================
function showBuyInfo(book) {
  alert(
    book +
    "\n\nAvailable legally on:\nAmazon Kindle\nGoogle Play Books\nApple Books\n\n" +
    "🔍 Search book name on your preferred platform.\n\n🔥 Limited Time Offer!"
  );
}

const products = [
  { name: "THINK LIKE MONEY", price: "₹199", img: "book1.jpg" },
  { name: "MILLIONAIRE HABITS", price: "₹249", img: "book2.jpg" },
  { name: "THE ART OF SILENT POWER", price: "₹299", img: "book3.jpg" },
  { name: "DOPAMINE FASTING", price: "₹349", img: "book4.jpg" },
  { name: "THE MARKET MIND", price: "₹399", img: "book5.jpg" }
];

const shop = document.createElement("section");
shop.style.padding = "60px 20px";
shop.innerHTML = `<h2 style="text-align:center;">View Books</h2>`;

const grid = document.createElement("div");
Object.assign(grid.style, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "25px"
});

products.forEach(p => {
  const card = document.createElement("div");
  Object.assign(card.style, {
    background: "white",
    padding: "15px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: "transform 0.4s, box-shadow 0.4s",
    transformStyle: "preserve-3d"
  });

  card.onmouseenter = () => {
    card.style.transform = "rotateY(8deg) rotateX(4deg) translateZ(20px)";
    card.style.boxShadow = "0 35px 70px rgba(0,0,0,0.3)";
  };
  card.onmouseleave = () => {
    card.style.transform = "none";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
  };

  card.innerHTML = `
    <img src="${p.img}" style="width:100%;border-radius:10px;">
    <h3>${p.name}</h3>
    <p><b>${p.price}</b></p>
    <button style="padding:10px 16px;background:#2563eb;
      color:white;border:none;border-radius:8px;cursor:pointer;">
      Buy Now
    </button>
  `;

  card.querySelector("button").onclick = () => showBuyInfo(p.name);
  grid.appendChild(card);
});

shop.appendChild(grid);
document.body.appendChild(shop);

// ================= ABOUT =================
const about = document.createElement("section");
about.style.padding = "60px 20px";
about.style.background = "#f1f5f9";

about.innerHTML = `
  <div style="max-width:900px;margin:auto;">
    <h2>About the Founder</h2>
    <p>
      <b>Shivam Vanjare</b> is an Entrepreneur, Author, Trader and Digital Publisher
      with Deep Experience in Trading Psychology, Investing Mindset and long-term
      Wealth Principles.
    </p>
  </div>
`;
document.body.appendChild(about);

// ================= FOOTER =================
const footer = document.createElement("footer");
footer.style.background = "#020617";
footer.style.color = "#cbd5f5";
footer.style.padding = "30px 20px";
footer.style.textAlign = "center";

footer.innerHTML = `
  <p><b>Velrion Publication</b></p>
  <p>Founder & MD: SHIVAM VANJARE</p>
  <p>Contact:
    <a href="mailto:velrion1818@gmail.com" style="color:#93c5fd;">
      velrion1818@gmail.com
    </a>
  </p>
  <p style="font-size:12px;">Privacy Policy • Terms • Service Policy</p>
`;
document.body.appendChild(footer);
