const trailer = document.getElementById("trailer");

const getTrailerIconClass = (type) => {
  switch(type) {
    case "video": return "fa fa-play";
    case "game": return "fa fa-gamepad";
    default: return "fa fa-gamepad";
  }
}

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  })
}

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = !!interactable;

  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerIconClass(interactable.dataset.type);
  }
}
