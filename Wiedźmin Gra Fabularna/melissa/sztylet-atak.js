let buttonSztylet = document.querySelector('#roll-sztylet');
let outcomeSztylet = document.querySelector('.outcome-sztylet');
let rollOutcomeSztylet = document.querySelector('.roll-outcome-sztylet');
let dmgSztylet = document.querySelector('.dmg-sztylet');
let bdyPartSztylet = document.querySelector('.bdy-part-sztylet');

console.log(bdyPartSztylet);
console.log(dmgSztylet);
console.log(rollOutcomeSztylet);
console.log(outcomeSztylet);
console.log(buttonSztylet);

dmgSztylet.innerText = 'Obrażenia';
bdyPartSztylet.innerText = 'Część ciała';
outcomeSztylet.innerText = 'Suma'
rollOutcomeSztylet.innerText = 'Wynik'

const sztyletAttack = () => {
    let minBMD = 1 ;
    let maxBMD = 11 ;
    const malos = 5;
    let attackRoll = (Math.floor(Math.random() * (maxBMD - minBMD) + minBMD))
    rollOutcomeSztylet.innerText = `Wynik ${attackRoll}`;
    outcomeSztylet.innerText = `Suma ${attackRoll + ref + malos}`;

    let minBM = 1;
    let maxBM = 7;
    let rollDMGSztylet = (Math.floor(Math.random() * (maxBM - minBM) + minBM)) + 2;
    dmgSztylet.innerText = `Obraż. ${rollDMGSztylet}`;

    let minBB = 1;
    let maxBB = 7;
    let rollBB = (Math.floor(Math.random() * (maxBB - minBB)));

    if(rollBB === 1){
        bdyPartSztylet.innerText = 'Głowa';
        } else if(rollBB === 2) {
        bdyPartSztylet.innerText = 'Tors';
        } else if(rollBB === 3) {
        bdyPartSztylet.innerText = 'P Ręka';
        } else if(rollBB === 4) {
        bdyPartSztylet.innerText = 'L Ręka';
        } else if(rollBB === 5) {
        bdyPartSztylet.innerText = 'P Noga';
        } else if(rollBB === 6) {
        bdyPartSztylet.innerText = 'P Noga';
        }
};

buttonSztylet.addEventListener("click", sztyletAttack);