//EVENTOS
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", (e) => {
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
});

const boton = document.getElementById("boton");
const texto = document.getElementById("text");

boton.addEventListener("click", () => {
    textResponsive();
});

function textResponsive() {
    texto.innerHTML = `
    <p class="textBoton"> ¿Sabias que podes adaptar tu web a diferentes dispositivos?
    Esto se hace con MediaQueries, para que puedas ver tu web en una computadora, tablet o smartphone, también podes hacer diferentes diseños para cada uno de los dispositivos que quieras. En diseñArg lo hacemos por vos. <p>
   `;
}

const boton2 = document.getElementById("boton2");
const texto2 = document.getElementById("text2");

boton2.addEventListener("click", () => {
    textDesign();
});

function textDesign() {
    texto2.innerHTML = `
  <p class="textBoton"> Plasmá tu negocio o tus ideas en una web y hacete conocer ¡mas rapidamente!. Mediante los lenguajes HTML, CSS3 y JavasScript podemos darle vida ¡a tu negocio o marca personal! <p>
 `;
}

const boton3 = document.getElementById("boton3");
const texto3 = document.getElementById("text3");

boton3.addEventListener("click", () => {
    textSeo();
});

function textSeo() {
    texto3.innerHTML = `
  <p class="textBoton"> Aplicamos metadata para tu web con KeyWords y Description con palabras clave para que te posiciones en Google y tus clientes puedan encontrarte!. <p>
 `;
}
