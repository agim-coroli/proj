let citation = `Albert Einstein : "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.`
let citation2 = `Mahatma Gandhi : "La meilleure façon de se trouver est de se perdre au service des autres."`
let citation3 = `Marie Curie : "Dans la vie, rien n'est à craindre, tout est à comprendre. Maintenant est le moment de comprendre davantage, pour que nous puissions craindre moins."`
let citation4 = `Nelson Mandela : "Cela semble toujours impossible jusqu'à ce qu'on le fasse."`
let citation5 = `Oscar Wilde : "Soyez vous-même, les autres sont déjà pris."`

let tableau = [citation, citation2, citation3, citation4, citation5]
let citationRandom = Math.floor(Math.random()*tableau.length);
alert(tableau[citationRandom])




// alert("salut")
location.reload();