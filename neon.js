const fontList = [
  "alexandra",
  "amanda",
  "barcelony",
  "Neon",
  "Bayshore",
  "Budhayanti",
  "Gruenewald",
  "Hamillton",
  "Hesterica",
  "Patio",
  "learning",
  "littleDay",
  "Northwell",
  "Photograph",
  "Quinzey",
  "Rocket",
  "Bauhaus",
  "Circular",
  "Comfortaa",
  "courierNew",
  "DolceVita",
  "Kiona",
  "ClubMusic",
  "nixieOne",
  "PaperDaisy",
  "SpaceGalaxy",
  "OutlineAllstar",
  "DoubleCozy",
  "OutlineLoveLoLine",
  "OutlineMarqueeMoon",
  "OutlineMetropolis1920",
  "OutlineNEONGLOW",
];

generateFonts();

function generateFonts() {
  const element = document.querySelector("div[data-for]");
  const list = eval(element.getAttribute("data-for"));
  const parent = element.parentElement;
  list.forEach((e) => {
    let clone = element.cloneNode(true);
    clone.classList.add(element.getAttribute("data-prefix") + e);
    clone.innerText = e;
    parent.appendChild(clone);
  });
  element.style.display = "none";
}
