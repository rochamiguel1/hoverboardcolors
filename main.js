
const container = document.querySelector (".container")
const colors = [ "#49e734", "#42ddf1", "#f05cdf", "#dfdf3a","#40e0d0", "#e43e25" , "#f5f5f5", "#3426f4","#984cdf", "#08ac08", "#d59815","#d59815","#e1145f","#1ce796"]
const squares = 500;

for(let i = 1 ; i < squares ; i++) {
  const square = document.createElement("div")
  square.classList.add("square")

  square.addEventListener ("mouseover", () => getcolor(square));
  square.addEventListener ("mouseout", () => removecolor(square));

  container.appendChild(square)
}

function getcolor(e) {
    const color = ramdoncolors ()
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color} `
}

function removecolor(e) {
    e.style.background = "#1d1d1d";
    e.style.boxShadow = `0 0 2px #000`
}

function ramdoncolors() {
    //devuelve un color del array al azar
    return colors[Math.floor(Math.random() * colors.length)]
}