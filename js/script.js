function OcultarLoader() {
  document.getElementById("loading-wrap").remove();
}

setTimeout(() => {
  OcultarLoader();
}, 2500);
