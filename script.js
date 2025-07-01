function toggleMode() {
  const html = document.documentElement

  /* isso para o botão toogle */
  if (html.classList.contains("light")) html.classList.remove("light")
  else {
    html.classList.add("light")
  }

  /* agora para alterar a img*/
  const img = document.querySelector("#Profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
