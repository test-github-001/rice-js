'use strict';

const info = document.querySelector('.info');

const road = document.querySelector('.road');
const roadWidth = road.clientWidth;
const carWidth = 100;
const screenOffset = 50;

const start = screenOffset;
const finish = roadWidth - carWidth - screenOffset;

const carRedDiv = document.createElement('img');
carRedDiv.src = './src/images/car_red.png';
carRedDiv.className = 'car';
carRedDiv.style.left = start + 'px';
carRedDiv.style.bottom = 160 + 'px';
road.append( carRedDiv );

const carGreenDiv = document.createElement('img');
carGreenDiv.src = './src/images/car_green.png';
carGreenDiv.className = 'car';
carGreenDiv.style.left = start + 'px';
carGreenDiv.style.bottom = 110 + 'px';
road.append( carGreenDiv );

const carBlueDiv = document.createElement('img');
carBlueDiv.src = './src/images/car_blue.png';
carBlueDiv.className = 'car';
carBlueDiv.style.left = start + 'px';
carBlueDiv.style.bottom = 60 + 'px';
road.append( carBlueDiv );

const carYellowDiv = document.createElement('img');
carYellowDiv.src = './src/images/car_yellow.png';
carYellowDiv.className = 'car';
carYellowDiv.style.left = start + 'px';
carYellowDiv.style.bottom = 10 + 'px';
road.append( carYellowDiv );

let winner;

const getAcceleration = () => (Math.random() < 0.7) ? 0 : 0.01;

const carRed = {
    name: 'RED CAR',
    img: carRedDiv,
    speed: 0,
    dist: start,

    move: function() {
        this.speed += getAcceleration(),
        this.dist += this.speed;
        this.img.style.left = this.dist + 'px';
    }
}

const carGreen = {
    name: 'GREEN CAR',
    img: carGreenDiv,
    speed: 0,
    dist: start,

    move: function() {
        this.speed += getAcceleration(),
        this.dist += this.speed;
        this.img.style.left = this.dist + 'px';
    }
}

const carBlue = {
    name: 'BLUE CAR',
    img: carBlueDiv,
    speed: 0,
    dist: start,

    move: function() {
        this.speed += getAcceleration(),
        this.dist += this.speed;
        this.img.style.left = this.dist + 'px';
    }
}

const carYellow = {
    name: 'YELLOW CAR',
    img: carYellowDiv,
    speed: 0,
    dist: start,

    move: function() {
        this.speed += getAcceleration(),
        this.dist += this.speed;
        this.img.style.left = this.dist + 'px';
    }
}

let riceLoop = setInterval( () => {
    let maxDist = Math.max(carRed.dist, carGreen.dist, carBlue.dist, carYellow.dist);
    if (maxDist >= finish) {
        clearInterval(riceLoop);
        switch (maxDist) {
            case carRed.dist    : winner = carRed.name; break;
            case carGreen.dist  : winner = carGreen.name; break;
            case carBlue.dist   : winner = carBlue.name; break;
            case carYellow.dist : winner = carYellow.name; break;
        }
        info.innerHTML = 'WINNER is ' + winner;
    } else {
        carRed.move();
        carGreen.move();
        carBlue.move();
        carYellow.move();
    }
}, 7);