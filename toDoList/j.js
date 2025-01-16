let vert = document.getElementById('add');
let formIn = document.getElementById('form');
let input_List = document.getElementById('input_list')
let rouge = document.getElementById('del');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let bloc = document.createElement('div');

function del(e) {
  e.addEventListener('click', () => {
    input_List.innerHTML = ""
  })
}

function add() {
  let bloc = document.createElement('div');
  bloc.style.border = "1px solid black";
  bloc.style.width = "98%";
  bloc.style.margin = '0';
  bloc.style.height = "5vh";
  bloc.style.marginBottom = "1%";
  input_List.appendChild(bloc)

  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  bloc.appendChild(p1)
  bloc.appendChild(p2)
  p1.style.borderRight = "1px solid black";
  p1.style.width = "92%";
  p1.style.height = "5vh";
  p2.style.height = "5vh";
  p1.style.fontFamily = "sans-serif"
  p2.textContent = "❌"
  p2.id = "singledel"
  p2.style.lineHeight = "5vh"
  p2.style.fontSize = "1rem"
  p2.style.cursor = "pointer"
  p1.textContent = formIn.value;
  formIn.value = ""

  p2.addEventListener('click', () => {
    bloc.remove();
  });
}

// chaque click sur le bouton vert fait ----->
vert.addEventListener('click', () => {

  if (formIn.value !== "") { // si input n'est pas vide, creer un paragraphe

    if (input_List.children.length > 9) { // si il ya trop de to do element, on ne peu plus en mettre
      alert("il y a trop choses à faire dans ta liste")
      return
    }
    add()

  } else {//si se nest pas vide affiche un alert qui demande d'entrée une valeur

    alert("Veuillez entrer une valeur dans le formulaire.");

  }
})

rouge.addEventListener('click', () => {
  // on ajoute une chose a faire 
  if (input_List.children.length !== 0) { // si la liste n'est pas vide, on la supprime
    del(rouge)
  }
})