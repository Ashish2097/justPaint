for(const link of document.getElementsByClassName("link")) {
  link.onmousemove = (e) => {
    const positionFactor = e.clientX / link.offsetWidth;
    const basePercent = 80;
    const percentRange = 20;
    const adjustablePercent = percentRange * positionFactor;

    const colorPercent = basePercent + adjustablePercent;

    link.style.setProperty("--light-red-percent", `${colorPercent}%`);
  }
}
