let buttonKostur = document.querySelector('#roll-kostur');
let outcomeKostur = document.querySelector('.outcome-kostur');
let rollOutcomeKostur = document.querySelector('.roll-outcome-kostur');
let dmgKostur = document.querySelector('.dmg-kostur');
let bdyPartKostur = document.querySelector('.bdy-part-kostur');

dmgKostur.innerText = 'Obrażenia';
bdyPartKostur.innerText = 'Część ciała';
outcomeKostur.innerText = 'Suma'
rollOutcomeKostur.innerText = 'Wynik'

const kosturAttack = () => {
    let minBMD =1 ;
    let maxBMD =11 ;
    let attackRoll = (Math.floor(Math.random() * (maxBMD - minBMD) + minBMD))
    rollOutcomeKostur.innerText = `Wynik ${attackRoll}`;
    outcomeKostur.innerText = `Suma ${attackRoll + ref + koswl}`;

    let minBM = 1;
    let maxBM = 7;
    let rollDMGKostur = (Math.floor(Math.random() * (maxBM - minBM) + minBM)) + 2;
    dmgKostur.innerText = `Obraż. ${rollDMGKostur}`;

    let minBB = 1;
    let maxBB = 7;
    let rollBB = (Math.floor(Math.random() * (maxBB - minBB)));

    if(rollBB === 1){
        bdyPartKostur.innerText = 'Głowa';
        } else if(rollBB === 2) {
        bdyPartKostur.innerText = 'Tors';
        } else if(rollBB === 3) {
        bdyPartKostur.innerText = 'P Ręka';
        } else if(rollBB === 4) {
        bdyPartKostur.innerText = 'L Ręka';
        } else if(rollBB === 5) {
        bdyPartKostur.innerText = 'P Noga';
        } else if(rollBB === 6) {
        bdyPartKostur.innerText = 'P Noga';
        }
};

buttonKostur.addEventListener("click", kosturAttack);