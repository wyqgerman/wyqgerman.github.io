var treasures = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
const treasure = (id) => {
  if (id === treasures) {
    return document.getElementById(id).innerHTML = "&#x1f308"
  }
  else if (id === bomb) {
    return document.getElementById(id).innerHTML = "&#x2620"
  }
  else {
    return document.getElementById(id).innerHTML = "&#x1f332"
  }
}
