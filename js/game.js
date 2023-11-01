const WIDCH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDCH),
    y: getRandomNumber(HEIGH)
}

let $map = document.getElementById('map');
let $distace = document.getElementById('distancia');
let clicks = 0;

$map.addEventListener('click', function (e) {

    clicks ++;
     let distance = getDistance(e, target);
     let distanceHint = getDistanceHint(distance);
     $distace.innerHTML = `<h1>${distanceHint}</h1>`

     if (distance < 20) {
        alert(`encontraste el tesoro en ${clicks} clicks!`);
        location.reload();
     }
}) 