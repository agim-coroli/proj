alert("Bienvenu dans mon jeu, vous aller commencer")

let car = document.getElementById("car")
let wheel = document.querySelectorAll(".wheel")
let obstacle = document.getElementById("rock")
let obstacle2 = document.getElementById("rock2")
let line = document.getElementsByClassName("line")
let line__disipear = document.getElementsByClassName("line__disipear")
let all = document.querySelectorAll('*');
let gameOver = document.getElementById("gameOver")

document.addEventListener("keydown", function (event) {
	if (event.key === 'ArrowLeft') {
		car.style.animation = "rotate-car-left 0.5s forwards";
		for (let i = 0; i < wheel.length; i++) {
			wheel[i].style.animation = "rotate-wheel-left 0.5s forwards";
		}
	} else if (event.key === 'ArrowRight') {
		car.style.animation = "rotate-car-right 0.5s forwards";
		for (let i = 0; i < wheel.length; i++) {
			wheel[i].style.animation = "rotate-wheel-right 0.5s forwards";
		}
	} else if (event.key === 'ArrowDown') {
		car.style.scale="0.5"
	} else if (event.key === 'ArrowUp') {
		car.style.scale="1"
	}
})



let random = Math.floor(Math.random() * 10) + 1;
switch (random) {
	case 1:
		rockMove()
		break;
	case 2:
		rockMove2()
		break;
	case 3:
		rockMove()
		break;
	case 4:
		rockMove2()
		break;
	case 5:
		rockMove()
		break;
	case 6:
		rockMove2()
		break;
	case 7:
		rockMove()
		break;
	case 8:
		rockMove2()
		break;
	case 9:
		rockMove()
		break;
	case 10:
		rockMove2()
		break;
	default:
		break;
}


function rockMove() {
	obstacle.style.animation = "rockMove 3s linear 0s infinite"
	obstacle2.style.animation = "rockMove 3s linear 2s infinite"
}
function rockMove2() {
	obstacle2.style.animation = "rockMove 3s linear 2s infinite"
	obstacle.style.animation = "rockMove 3s linear 0s infinite"
}

function detectCollision(rect1, rect2) {
	return (
		rect1.left < rect2.right &&
		rect1.right > rect2.left &&
		rect1.top < rect2.bottom &&
		rect1.bottom > rect2.top
	);
}

function getRect(element) {
	let rect = element.getBoundingClientRect();
	return {
		left: rect.left,
		right: rect.right,
		top: rect.top,
		bottom: rect.bottom
	};
}

let collisionInterval = setInterval(checkCollision, 50);

function checkCollision() {
    let carRect = getRect(car);
    let obstacleRect = getRect(obstacle);
    let obstacleRect2 = getRect(obstacle2);

    if (detectCollision(carRect, obstacleRect) || detectCollision(carRect, obstacleRect2)) {
        obstacle.style.animationPlayState = 'paused';
        obstacle2.style.animationPlayState = 'paused';
        car.style.animationPlayState = 'paused';
        all.forEach(element => {
            element.style.filter = 'brightness(0.8) grayscale(50%)';
        });
        for (let i = 0; i < line.length; i++) {
            line[i].style.animationPlayState = 'paused';
        }
        for (let i = 0; i < line__disipear.length; i++) {
            line__disipear[i].style.animationPlayState = 'paused';
        }
        gameOver.style.opacity = "1";
        
        // Arrêter la vérification de collision
        clearInterval(collisionInterval);

        setTimeout(() => {
            let reponse = confirm("Voulez-vous relancer une partie ?");
            if (reponse === true) {
                location.reload();
            } else {
                alert("À bientôt");
            }
        }, 100);
    }
}