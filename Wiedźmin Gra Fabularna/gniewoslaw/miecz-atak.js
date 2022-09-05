let buttonMiecz = document.querySelector('#roll-miecz');
let outcomeMiecz = document.querySelector('.outcome-miecz');
let rollOutcomeMiecz = document.querySelector('.roll-outcome-miecz');
let dmgMiecz = document.querySelector('.dmg-miecz');
let bdyPartMiecz = document.querySelector('.bdy-part-miecz');

console.log(bdyPartMiecz);
console.log(dmgMiecz);
console.log(rollOutcomeMiecz);
console.log(outcomeMiecz);
console.log(buttonMiecz);

dmgMiecz.innerText = 'Obrażenia';
bdyPartMiecz.innerText = 'Część ciała';
outcomeMiecz.innerText = 'Suma'
rollOutcomeMiecz.innerText = 'Wynik'

const mieczAttack = () => {
    let minBMD = 1 ;
    let maxBMD = 11 ;
    const szer = 6;
    let attackRoll = (Math.floor(Math.random() * (maxBMD - minBMD) + minBMD))
    rollOutcomeMiecz.innerText = `Wynik ${attackRoll}`;
    outcomeMiecz.innerText = `Suma ${attackRoll + ref + szer}`;

    let minBM = 1;
    let maxBM = 13;
    let rollDMGMiecz = (Math.floor(Math.random() * (maxBM - minBM) + minBM)) + 2 + 4 +1;
    dmgMiecz.innerText = `Obraż. ${rollDMGMiecz}`;

    let minBB = 1;
    let maxBB = 7;
    let rollBB = (Math.floor(Math.random() * (maxBB - minBB)));

    if(rollBB === 1){
        bdyPartMiecz.innerText = 'Głowa';
        } else if(rollBB === 2) {
        bdyPartMiecz.innerText = 'Tors';
        } else if(rollBB === 3) {
        bdyPartMiecz.innerText = 'P Ręka';
        } else if(rollBB === 4) {
        bdyPartMiecz.innerText = 'L Ręka';
        } else if(rollBB === 5) {
        bdyPartMiecz.innerText = 'P Noga';
        } else if(rollBB === 6) {
        bdyPartMiecz.innerText = 'P Noga';
        }
};

buttonMiecz.addEventListener("click", mieczAttack);