const alertaClick = document.getElementById("btn")
alertaClick.addEventListener("click", () => {
  alert("Click en el botón")
})

$(() => {
  $("#btn").click(() => {
    console.log("Hola, estoy utilizando JQuery")
  })
})
