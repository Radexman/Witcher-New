let buttonCaryshail = document.querySelector('#roll-caryshail');
let outcomeCaryshail = document.querySelector('.outcome-caryshail');
let rollOutcomeCaryshail = document.querySelector('.roll-outcome-caryshail');
let dmgCaryshail = document.querySelector('.dmg-caryshail');
let bdyPartCaryshail = document.querySelector('.bdy-part-caryshail');
let freezeChance = document.querySelector('.freeze-chance');

dmgCaryshail.innerText = 'Obrażenia';
bdyPartCaryshail.innerText = 'Część ciała';
outcomeCaryshail.innerText = 'Suma';
rollOutcomeCaryshail.innerText = 'Wynik';
freezeChance.innerText = 'Zamro';

const caryshailAttack = () => {
    let minBMD =1 ;
    let maxBMD =11 ;
    let attackRoll = (Math.floor(Math.random() * (maxBMD - minBMD) + minBMD))
    rollOutcomeCaryshail.innerText = `Wynik ${attackRoll}`;
    outcomeCaryshail.innerText = `Suma ${attackRoll + wol + rzucza}`;

    let minBM = 1;
    let maxBM = 7;
    let rollDMGCaryshail = (Math.floor(Math.random() * (maxBM - minBM) + minBM));
    dmgCaryshail.innerText = `Obraż. ${rollDMGCaryshail}`;

    let minBB = 1;
    let maxBB = 7;
    let rollBB = (Math.floor(Math.random() * (maxBB - minBB)));

    if(rollBB === 1){
        bdyPartCaryshail.innerText = 'Głowa';
        } else if(rollBB === 2) {
        bdyPartCaryshail.innerText = 'Tors';
        } else if(rollBB === 3) {
        bdyPartCaryshail.innerText = 'P Ręka';
        } else if(rollBB === 4) {
        bdyPartCaryshail.innerText = 'L Ręka';
        } else if(rollBB === 5) {
        bdyPartCaryshail.innerText = 'P Noga';
        } else if(rollBB === 6) {
        bdyPartCaryshail.innerText = 'P Noga';
        }

    let minFC = 1;
    let maxFC = 5;
    let rollFC = (Math.floor(Math.random() * (maxFC - minFC)));

    if(rollFC === 1){
        freezeChance.innerText = 'Tak';
        } else if(rollFC === 2) {
        freezeChance.innerText = 'Nie';
        } else if(rollFC === 3) {
        freezeChance.innerText = 'Nie';
        } else if(rollFC === 4) {
        freezeChance.innerText = 'Nie';
};
}
buttonCaryshail.addEventListener("click", caryshailAttack);