console.log("main.js loaded");

// ********************************************************************************************************
// Kode til figur 3
// ********************************************************************************************************
const hotspot1 = document.querySelector("#circle-hotspot1");
const hotspot2 = document.querySelector("#circle-hotspot2");
const hotspot3 = document.querySelector("#circle-hotspot3");

// Named event handlers for hotspots (figure 3)
function toggleHotspotOrange() {
  document.querySelector(".svg-container-hotspots-included #hotspot_orange").classList.toggle("invisible");
}

function toggleHotspotGreen() {
  document.querySelector(".svg-container-hotspots-included #hotspot_green").classList.toggle("invisible");
}

function toggleHotspotYellow() {
  document.querySelector(".svg-container-hotspots-included #hotspot_yellow").classList.toggle("invisible");
}

hotspot1.addEventListener("click", toggleHotspotOrange);
hotspot2.addEventListener("click", toggleHotspotGreen);
hotspot3.addEventListener("click", toggleHotspotYellow);

// ********************************************************************************************************
// Kode til figur 4
// ********************************************************************************************************

// De 3 knapper navngives i JavaScript "hotspotBtn1", "hotspotBtn2" og "hotspotBtn3"
const hotspotBtn1 = document.querySelector("#hotspotBtn1");
const hotspotBtn2 = document.querySelector("#hotspotBtn2");
const hotspotBtn3 = document.querySelector("#hotspotBtn3");

// Tilføj hover-effekt på knapperne, som fremhæver den tilsvarende blob i SVG'en
function hotspotBtn1MouseOver() {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.add("pointed");
}

function hotspotBtn2MouseOver() {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.add("pointed");
}

function hotspotBtn3MouseOver() {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.add("pointed");
}

hotspotBtn1.addEventListener("mouseover", hotspotBtn1MouseOver);
hotspotBtn2.addEventListener("mouseover", hotspotBtn2MouseOver);
hotspotBtn3.addEventListener("mouseover", hotspotBtn3MouseOver);

// De tre svg-grupper navngives i JavaScript "hotspot_orange", "hotspot_green" og "hotspot_yellow"
const hotspotOrange = document.querySelector(".svg-container-buttons #hotspot_orange");
const hotspotGreen = document.querySelector(".svg-container-buttons #hotspot_green");
const hotspotYellow = document.querySelector(".svg-container-buttons #hotspot_yellow");

// Tre funtioner til at håndtere mouseover events på svg-grupperne
function hotspotOrangeMouseOver() {
  hotspotOrange.classList.add("pointed");
}

function hotspotGreenMouseOver() {
  hotspotGreen.classList.add("pointed");
}

function hotspotYellowMouseOver() {
  hotspotYellow.classList.add("pointed");
}
// Tilføj event listeners til svg-grupperne
hotspotOrange.addEventListener("mouseover", hotspotOrangeMouseOver);
hotspotGreen.addEventListener("mouseover", hotspotGreenMouseOver);
hotspotYellow.addEventListener("mouseover", hotspotYellowMouseOver);

// Fjern hover-effekt når musen forlader knapperne
function hotspotBtn1MouseOut() {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.remove("pointed");
}

function hotspotBtn2MouseOut() {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.remove("pointed");
}

function hotspotBtn3MouseOut() {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.remove("pointed");
}

hotspotBtn1.addEventListener("mouseout", hotspotBtn1MouseOut);
hotspotBtn2.addEventListener("mouseout", hotspotBtn2MouseOut);
hotspotBtn3.addEventListener("mouseout", hotspotBtn3MouseOut);

// Tre funktioner til at fjerne hover effekt ved mouseout event på svg-grupperne
function hotspotOrangeMouseOut() {
  hotspotOrange.classList.remove("pointed");
}

function hotspotGreenMouseOut() {
  hotspotGreen.classList.remove("pointed");
}

function hotspotYellowMouseOut() {
  hotspotYellow.classList.remove("pointed");
}
// Tilføj event listeners til svg-grupperne
hotspotOrange.addEventListener("mouseout", hotspotOrangeMouseOut);
hotspotGreen.addEventListener("mouseout", hotspotGreenMouseOut);
hotspotYellow.addEventListener("mouseout", hotspotYellowMouseOut);

// Tilføj klik-funktionalitet på knapperne, som fremhæver den valgte blob og opdaterer tekstområdet
function hotspotBtn1Click() {
  resetBtns();
  console.log("hotspotBtn1 clicked");
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den orange blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 165, 0, 0.2)";
}

function hotspotBtn2Click() {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_green").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn2").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den grønne blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(0, 255, 0, 0.2)";
}

function hotspotBtn3Click() {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn3").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den gule blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 255, 0, 0.2)";
}

hotspotBtn1.addEventListener("click", hotspotBtn1Click);
hotspotBtn2.addEventListener("click", hotspotBtn2Click);
hotspotBtn3.addEventListener("click", hotspotBtn3Click);

//Tilføj klikfunktionalitet på svg-grupperne, som fremhæver den valgte blob og opdaterer tekstområdet
function hotspotOrangeClick() {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den orange blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 165, 0, 0.2)";
}

function hotspotGreenClick() {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_green").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn2").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den grønne blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(0, 255, 0, 0.2)";
}

function hotspotYellowClick() {
  resetBtns();
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn3").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den gule blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 255, 0, 0.2)";
}
// Tilføj event listeners til svg-grupperne
hotspotOrange.addEventListener("click", hotspotOrangeClick);
hotspotGreen.addEventListener("click", hotspotGreenClick);
hotspotYellow.addEventListener("click", hotspotYellowClick);

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
