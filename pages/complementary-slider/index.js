const left = document.getElementById("left-side");

const handleMouseMove = (e) => {
  const position = e.clientX / window.innerWidth * 100;

  left.style.width = `${position}%`;
}

document.onmousemove = (e) => handleMouseMove(e);
