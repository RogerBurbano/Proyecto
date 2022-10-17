
//------------------------MODO  OSCURO-----------------------------
const btnRoger = document.querySelector("#roger");

btnRoger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnRoger.classList.toggle("active");
});

// ----------------------LOGIN------------------------------

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (e.currentTarget.nombre.value == "") {
    alert("El campo de nombre esta vacio");
    return;
  }

  if (e.currentTarget.contraseña.value == "") {
    alert("Contraseña Requerida");
    return;
  }

  alert(
    `Bienvenido ${e.currentTarget.nombre.value}`
  );
});

