let buttonCadfansgrasp = document.querySelector('#roll-catfangrasp');
let dmgCadfansgrasp = document.querySelector('.dmg-catfangrasp');
let igniteChance = document.querySelector('.ignite-chance');
let turnDurationCadfansgrasp = document.querySelector('.turn-duration');

console.log(buttonCadfansgrasp);
console.log(dmgCadfansgrasp);
console.log(igniteChance);
console.log(turnDurationCadfansgrasp);

dmgCadfansgrasp.innerText = 'Obrażenia';
igniteChance.innerText = 'Podpalenie';
turnDurationCadfansgrasp.innerText = 'Tury';

const cadfansgraspAttack = () => {

    let minBM = 2;
    let maxBM = 12;
    let rollDMGCadfansgrasp = (Math.floor(Math.random() * (maxBM - minBM) + minBM));
    dmgCadfansgrasp.innerText = `Obraż. ${rollDMGCadfansgrasp}`;

    let minIC = 1;
    let maxIC = 6;
    let rollIC = (Math.floor(Math.random() * (maxIC - minIC)));

    if(rollIC === 1){
        igniteChance.innerText = 'Tak';
        } else if(rollIC === 2) {
        igniteChance.innerText = 'Tak';
        } else if(rollIC === 3) {
        igniteChance.innerText = 'Tak';
        } else if(rollIC === 4) {
        igniteChance.innerText = 'Nie';
        } else if(rollIC === 5) {
        igniteChance.innerText = 'Nie';
        } else if(rollIC === 6) {
        igniteChance.innerText = 'Nie';
        }
        let minRD = 1;
        let maxRD = 6;
        let rollRD = (Math.floor(Math.random() * (maxRD - minRD)));
    
        if(rollRD === 1){
            turnDurationCadfansgrasp.innerText = 'Jedna tura';
            } else if(rollRD === 2) {
                turnDurationCadfansgrasp.innerText = 'Dwie tury';
            } else if(rollRD === 3) {
                turnDurationCadfansgrasp.innerText = 'Trzy tury';
            } else if(rollRD === 4) {
                turnDurationCadfansgrasp.innerText = 'Cztery tury';
            } else if(rollRD === 5) {
                turnDurationCadfansgrasp.innerText = 'Pięć tur';
            } else if(rollRD === 6) {
                turnDurationCadfansgrasp.innerText = 'Sześć tur';
            }
};
    
buttonCadfansgrasp.addEventListener("click", cadfansgraspAttack);