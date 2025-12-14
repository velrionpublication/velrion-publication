const app = document.getElementById("app");

// ---------- STYLES ----------
const style = document.createElement("style");
style.innerHTML = `
:root{
    --bg:#f5f5f5;
    --text:#111;
    --card:#fff;
    --header:#111;
}
.dark{
    --bg:#121212;
    --text:#f5f5f5;
    --card:#1f1f1f;
    --header:#000;
}
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:var(--bg);
    color:var(--text);
    transition:0.3s;
}
header{
    background:var(--header);
    color:white;
    padding:15px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.logo{
    display:flex;
    align-items:center;
    gap:10px;
}
.logo img{ height:40px; }
.toggle{
    background:#444;
    color:white;
    border:none;
    padding:8px 14px;
    border-radius:20px;
    cursor:pointer;
}
.hero{
    padding:60px 30px;
    display:flex;
    gap:40px;
    align-items:center;
    flex-wrap:wrap;
}
.hero img{
    max-width:450px;
    border-radius:15px;
    box-shadow:0 10px 30px rgba(0,0,0,0.2);
}
.products{
    padding:40px 30px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}
.card{
    background:var(--card);
    padding:15px;
    border-radius:12px;
    box-shadow:0 6px 15px rgba(0,0,0,0.15);
    transition:0.3s;
}
.card:hover{ transform:translateY(-6px); }
.card img{
    width:100%;
    border-radius:10px;
}
footer{
    background:var(--header);
    color:white;
    text-align:center;
    padding:20px;
}
button.buy{
    background:#25D366;
    color:white;
    border:none;
    padding:10px;
    width:100%;
    margin-top:10px;
    border-radius:6px;
    cursor:pointer;
}
`;
document.head.appendChild(style);

// ---------- HEADER ----------
const header = document.createElement("header");
header.innerHTML = `
<div class="logo">
    <img src="images/logo.jpg">
    <h2>VELRION PUBLICATION</h2>
</div>
<button class="toggle">Dark Mode</button>
`;
app.appendChild(header);

// ---------- HERO ----------
const hero = document.createElement("section");
hero.className = "hero";
hero.innerHTML = `
<div>
    <h1>Books That Shape Minds & Wealth</h1>
    <p>Managing Director: <b>Shivam Vanjare</b><br>
    Premium books on mindset, trading & success.</p>
</div>
<img src="images/hero.jpg">
`;
app.appendChild(hero);

// ---------- PRODUCTS ----------
const products = document.createElement("section");
products.className = "products";

const books = [
    { title: "THINK LIKE MONEY", price: "₹199", img: "images/book1.jpg" },
    { title: "MILLIONAIRE HABITS", price: "₹249", img: "images/book2.jpg" },
    { title: "THE ART OF SILENT POWER", price: "₹299", img: "images/book3.jpg" },
    { title: "OPPOSE THE COMMON PATH", price: "₹349", img: "images/book4.jpg" }
];

books.forEach(book=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${book.img}">
        <h3>${book.title}</h3>
        <p>${book.price}</p>
        <button class="buy">Buy Now</button>
    `;
    products.appendChild(card);
});
app.appendChild(products);

// ---------- FOOTER ----------
const footer = document.createElement("footer");
footer.innerHTML = `
<p>Email: velrion1818@gmail.com | Instagram: Velrion Publication</p>
<p>Privacy Policy | Terms of Use | Service Policy</p>
`;
app.appendChild(footer);

// ---------- DARK MODE ----------
document.querySelector(".toggle").onclick = ()=>{
    document.body.classList.toggle("dark");
};
