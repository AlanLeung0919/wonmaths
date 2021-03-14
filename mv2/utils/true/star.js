(() => {
  function callback(route) {
    if (route === "modestar") {
      const loaded = setInterval(() => {
        const el = document.querySelectorAll("li");
        if (el.length) {
          const e = document.querySelector(".container").children[0].__vue__;
          e.num = 3;
          e.score = 3;
          e.reached = true;
          clearInterval(loaded);
        }
      }, 100);
    }
  }
  if (window.star) return;
  window.star = true;
  window.unwatchStar = document
    .getElementById("app")
    .__vue__.$watch("$route.name", callback, { immediate: true });
})();
