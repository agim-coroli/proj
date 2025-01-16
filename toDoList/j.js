
let vert = document.getElementById('add');
let formIn = document.getElementById('form');
let rouge = document.getElementById('del');
let input_List = document.getElementById('input_list')

// chaque click sur le bouton vert fait ----->
vert.addEventListener('click', () => {
  
  if (formIn.value != "") { // si input n'est pas vide, creer un paragraphe
    if (input_List.children.length === 10) {
      alert("il ya trop")
      return
    } 
    let newP = document.createElement('p')
    newP.style.border = "1px solid black"
    newP.style.width = "95%"
    newP.style.margin = '0 '
    newP.style.height = "5vh"
    newP.style.marginBottom = "1%"
    input_List.appendChild(newP)
    newP.textContent = formIn.value
    formIn.value = ""
    console.log(input_List.children.length);
    

  }else {//si se nest pas vide affiche un alert qui demande d'entrée une valeur
    alert("Veuillez entrer une valeur dans le formulaire.");
  }
})