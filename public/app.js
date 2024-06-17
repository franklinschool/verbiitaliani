if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js", { scope: './' })
      .then((reg) => console.log("service Worker: registered"))
      .catch((err) => console.log(`service worker; Error:${err}`));
  });
}