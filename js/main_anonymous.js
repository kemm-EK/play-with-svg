console.log("main.js loaded");

// ********************************************************************************************************
// Kode til figur 3
// ********************************************************************************************************
const hotspot1 = document.querySelector("#circle-hotspot1");
const hotspot2 = document.querySelector("#circle-hotspot2");
const hotspot3 = document.querySelector("#circle-hotspot3");

hotspot1.addEventListener("click", () => {
  document.querySelector(".svg-container-hotspots-included #hotspot_orange").classList.toggle("invisible");
});

hotspot2.addEventListener("click", () => {
  document.querySelector(".svg-container-hotspots-included #hotspot_green").classList.toggle("invisible");
});

hotspot3.addEventListener("click", () => {
  document.querySelector(".svg-container-hotspots-included #hotspot_yellow").classList.toggle("invisible");
});

// ********************************************************************************************************
// Kode til figur 4
// ********************************************************************************************************

// De 3 knapper navngives i JavaScript "hotspotBtn1", "hotspotBtn2" og "hotspotBtn3"
const hotspotBtn1 = document.querySelector("#hotspotBtn1");
const hotspotBtn2 = document.querySelector("#hotspotBtn2");
const hotspotBtn3 = document.querySelector("#hotspotBtn3");

// Tilføj hover-effekt på knapperne, som fremhæver den tilsvarende blob i SVG'en
hotspotBtn1.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.add("pointed");
});

hotspotBtn2.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.add("pointed");
});

hotspotBtn3.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.add("pointed");
});

// Fjern hover-effekt når musen forlader knapperne
hotspotBtn1.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.remove("pointed");
});

hotspotBtn2.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.remove("pointed");
});

hotspotBtn3.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.remove("pointed");
});

// Tilføj klik-funktionalitet på knapperne, som fremhæver den valgte blob og opdaterer tekstområdet
hotspotBtn1.addEventListener("click", () => {
  resetBtns();
  console.log("hotspotBtn1 clicked");
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den orange blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 165, 0, 0.2)";
});

hotspotBtn2.addEventListener("click", () => {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_green").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn2").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den grønne blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(0, 255, 0, 0.2)";
});

hotspotBtn3.addEventListener("click", () => {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn3").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den gule blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 255, 0, 0.2)";
});

// Funktion til at nulstille alle knapper og fjern fremhævninger
function resetBtns() {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspot_green").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.remove("active");
  document.querySelector(".svg-container-buttons #hotspotBtn2").classList.remove("active");
  document.querySelector(".svg-container-buttons #hotspotBtn3").classList.remove("active");
  document.querySelector(".textarea").textContent = "";
}
