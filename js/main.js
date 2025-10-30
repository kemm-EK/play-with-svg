console.log("main.js loaded");

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

const hotspotBtn1 = document.querySelector("#hotspotBtn1");
const hotspotBtn2 = document.querySelector("#hotspotBtn2");
const hotspotBtn3 = document.querySelector("#hotspotBtn3");

hotspotBtn1.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.add("pointed");
});

hotspotBtn2.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.add("pointed");
});

hotspotBtn3.addEventListener("mouseover", () => {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.add("pointed");
});
hotspotBtn1.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.remove("pointed");
});

hotspotBtn2.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_green").classList.remove("pointed");
});

hotspotBtn3.addEventListener("mouseout", () => {
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.remove("pointed");
});
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

function resetBtns() {
  document.querySelector(".svg-container-buttons #hotspot_orange").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspot_green").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspot_yellow").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.remove("active");
  document.querySelector(".svg-container-buttons #hotspotBtn2").classList.remove("active");
  document.querySelector(".svg-container-buttons #hotspotBtn3").classList.remove("active");
  document.querySelector(".textarea").textContent = "";
}
