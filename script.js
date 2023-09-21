function toggleMode() {
  const html = document.documentElement // documentElement = HTML
  html.classList.toggle('light') //O código abaixo faz exatamente a mesma coisa que esse trecho
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}