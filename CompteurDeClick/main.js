// ###############################################################################################################################

let body = document.body
body.style.cssText =
    "margin: 0; height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;";

let main = document.getElementById('pageMain')
main.style.cssText =
    "background: gray; width:20%; height:20%; display:flex; justify-content:space-evenly; align-items:center";

let affichage = document.getElementById('affichage')
// affichage.textContent = "0"
affichage.style.cssText =
    "width:20%; height:40%; background-color:white; text-align:center; line-height:8vh; font-size:2.5rem; font-family:sans-serif;";

let bouton = document.getElementById('button')
bouton.textContent = "+"
bouton.style.cssText =
    "height:25%; width:14%;border-radius:50%; font-size:2.5rem; background-color:green; cursor:pointer;";
let bouton2 = document.getElementById('button2')
bouton2.textContent = "-"
bouton2.style.cssText =
    "height:25%; width:14%;border-radius:50%; font-size:2.5rem; background-color:red; cursor:pointer;";
// ###############################################################################################################################

// ↑ Appelle des balise + stylisation ↑
// ↓ ---------Ajout du click--------- ↓

// ###############################################################################################################################

affichage.textContent = 0
bouton.addEventListener('click', () => {
    affichage.textContent++

})
bouton2.addEventListener('click', () => {
    affichage.textContent--
    if (affichage.textContent < 0) {
        affichage.textContent = 0
    }
})
// ###############################################################################################################################