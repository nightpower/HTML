let pos = 0
let buff = 0
const gline = ['#intro', '#about', '#langs', '#items', '#block']

const up = () => {
  if (pos <= 0) return
  pos--
  document.querySelector(gline[pos]).scrollIntoView()
}

const down = () => {
  if (pos >= gline.length - 1) return
  pos++
  document.querySelector(gline[pos]).scrollIntoView()
}

window.onwheel = ({layerY}) => {
  layerY > buff ? down() : up();
  buff = layerY
};