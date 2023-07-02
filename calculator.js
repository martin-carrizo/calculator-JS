const scrn = document.querySelector(".scrn");
const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pressbtn = btn.textContent;

    if (btn.id === "C") {
      scrn.textContent = "0";
      return;
    }

    if (btn.id === "del") {
      if (scrn.textContent.length === 1 || scrn.textContent === "error!") {
        scrn.textContent = "0";
      } else {
        scrn.textContent = scrn.textContent.slice(0, -1);
      }

      return;
    }

    if (btn.id === "eq") {
      try {
        scrn.textContent = eval(scrn.textContent);
      } catch {
        scrn.textContent = "error!";
      }
      return;
    }

    if (scrn.textContent === "0" || scrn.textContent === "error!") {
      scrn.textContent = pressbtn;
    } else {
      scrn.textContent += pressbtn;
    }
  });
});
