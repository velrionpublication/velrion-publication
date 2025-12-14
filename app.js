const app = document.getElementById("app");
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

/* ========== THEME ========== */
let dark = false;
function applyTheme() {
  document.body.style.background = dark ? "#0f172a" : "#ffffff";
  document.body.style.color = dark ? "#ffffff" : "#000000";
}
applyTheme();

/* ========== HEADER ========== */
const header = document.createElement("header");
header.style.cssText = `
position:fixed; top:0; width:100%;
display:flex; justify-content:space-between;
align-items:center; padding:15px 30px;
background:#111827; color:white; z-index:1000;
`;

header.innerHTML = `
<div style="display:flex;align-items:center;gap:12px;">
  <img src="logo.jpg" style="height:45px;border-radius:8px;">
  <b style="font-size:20px;">VELRION PUBLICATION</b>
</div>
<div>
  <button id="themeBtn" style="padding:8px 14px;border:none;border-radius:6px;cursor:pointer;">
    🌙 Dark
  </button>
</div>
`;
document.body.appendChild(header);

/* Dark toggle */
document.getElementById("themeBtn").onclick = () => {
  dark = !dark;
  applyTheme();
};

/* ========== HERO SECTION ========== */
const hero = document.createElement("section");
hero.style.cssText = `
margin-top:90px;
padding:60px 20px;
display:flex; flex-wrap:wrap;
align-items:center; justify-content:center;
gap:40px;
`;

hero.innerHTML = `
<div style="max-width:500px; animation:fade 1s;">
  <h1 style="font-size:40px;">Premium E-Books That Shape Minds & Wealth</h1>
  <p style="font-size:18px;line-height:1.6;">
    Premium books on mindset, trading & success curated by
    <b>Shivam vanjare</b>.
  </p>
  <a href="#shop" style="
    display:inline-block;margin-top:20px;
    background:#22c55e;color:white;
    padding:14px 26px;border-radius:30px;
    text-decoration:none;font-weight:bold;">
    Browse Books →
  </a>
</div>

<img src="hero.jpg" style="
max-width:420px;width:100%;
border-radius:20px;
box-shadow:0 20px 40px rgba(0,0,0,.3);
animation:float 3s infinite alternate;">
`;
app.appendChild(hero);

/* ========== SHOP ========== */
const shop = document.createElement("section");
shop.id = "shop";
shop.style.padding = "60px 20px";
shop.innerHTML = `<h2 style="text-align:center;font-size:32px;">Our Collection</h2>`;

const grid = document.createElement("div");
grid.style.cssText = `
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px; margin-top:40px;
`;

const products = [
 { name: "THINK LIKE MONEY", price: "₹199", img: "book1.jpg" },
{ name: "MILLIONAIRE HABITS", price: "₹249", img: "book2.jpg" },
{ name: "THE ART OF SILENT POWER", price: "₹299", img: "book3.jpg" },
{ name: "OPPOSE THE COMMON PATH", price: "₹349", img: "book4.jpg" }
];

products.forEach(p=>{
  const card = document.createElement("div");
  card.style.cssText = `
  padding:18px;border-radius:16px;
  background:${dark?"#020617":"#f8fafc"};
  box-shadow:0 10px 25px rgba(0,0,0,.15);
  text-align:center;
  transition:.3s;
  `;
  card.innerHTML = `
    <img src="${p.img}" style="width:100%;border-radius:12px;">
    <h3>${p.name}</h3>
    <a href="https://wa.me/919527649838"
      style="display:inline-block;
      background:#25D366;color:white;
      padding:10px 18px;
      border-radius:20px;
      text-decoration:none;">
      Buy on WhatsApp
    </a>
  `;
  grid.appendChild(card);
});

shop.appendChild(grid);
app.appendChild(shop);

/* ========== FOOTER ========== */
const footer = document.createElement("footer");
footer.style.cssText = `
background:#020617;
color:white;
padding:40px 20px;
text-align:center;
`;

footer.innerHTML = `
<h3>Velrion Publication</h3>
<p>Managing Director: <b>Shivam Vanjare</b></p>
<p>Email: velrion1818@gmail.com</p>
<p>Instagram: velrion publication</p>
<hr style="margin:20px 0;">
<p>Privacy Policy • Terms of Use • Service Policy</p>
`;

document.body.appendChild(footer);

/* ========== ANIMATIONS ========== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fade {from{opacity:0;transform:translateY(20px)} to{opacity:1}}
@keyframes float {from{transform:translateY(0)} to{transform:translateY(-15px)}}
`;
document.head.appendChild(style);

