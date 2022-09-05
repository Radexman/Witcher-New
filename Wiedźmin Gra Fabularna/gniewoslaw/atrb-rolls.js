// This app sets Mereth's main attributes and makes dice rolls. 
// It makes d10 roll and adds specific attributes to total sum.
// All outcome is printed in dialog popup.

// ---------------------------------- Modal Start ----------------------------


let rollOutcome = document.getElementById('d10-roll');
let rollSum = document.getElementById('sum');

// ---------------------------------- Modal End ----------------------------


// ---------------------------------- Attributes Start ----------------------------

const int = 4;
document.getElementById('int').innerText = int;

const ref = 11;
document.getElementById('ref').innerText = ref;

const zr = 11;
document.getElementById('zr').innerText = zr;

const cia = 10;
document.getElementById('cia').innerText = cia;

const szy = 9;
document.getElementById('szy').innerText = szy;

const emp = 1;
document.getElementById('emp').innerText = emp;

const rze = 5;
document.getElementById('rze').innerText = rze;

const wol = 10;
document.getElementById('wol').innerText = wol;

const sz = 1;
document.getElementById('sz').innerText = sz;


// ---------------------------------- Attributes End ----------------------------

// ---------------------------------- Int Roll Start ----------------------------

let intRoll = document.getElementById('int-artb');

const skillRollI = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int;

}

let modal = document.getElementById('roll-outcome-box');
let closeModal = document.getElementById('roll-outcome-box-close');

intRoll.addEventListener('click', skillRollI);

intRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Int Roll End ----------------------------

// ---------------------------------- Ref Roll Start ----------------------------

let refRoll = document.getElementById('ref-artb');

const skillRollR = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref;

}

refRoll.addEventListener('click', skillRollR);

refRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Ref Roll End ----------------------------

// ---------------------------------- Zr Roll Start ----------------------------

let zrRoll = document.getElementById('zr-artb');

const skillRollZ = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + zr;

}

zrRoll.addEventListener('click', skillRollZ);

zrRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Zr Roll End ----------------------------

// ---------------------------------- Cia Roll Start ----------------------------

let ciaRoll = document.getElementById('cia-artb');

const skillRollC = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + cia;

}

ciaRoll.addEventListener('click', skillRollC);

ciaRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Cia Roll End ----------------------------

// ---------------------------------- Szy Roll Start ----------------------------

let szyRoll = document.getElementById('szy-artb');

const skillRollSz = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + szy;

}

szyRoll.addEventListener('click', skillRollSz);

szyRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Szy Roll End ----------------------------

// ---------------------------------- Emp Roll Start ----------------------------

let empRoll = document.getElementById('emp-artb');

const skillRollEmp= () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp;

}

empRoll.addEventListener('click', skillRollEmp);

empRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Emp Roll End ----------------------------

// ---------------------------------- Rze Roll Start ----------------------------

let rzeRoll = document.getElementById('rze-artb');

const skillRollRz = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + rze;

}

rzeRoll.addEventListener('click', skillRollRz);

rzeRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Rze Roll End ----------------------------

// ---------------------------------- Wol Roll Start ----------------------------

let wolaRoll = document.getElementById('wol-artb');

const skillRollWola = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol;

}

wolaRoll.addEventListener('click', skillRollWola);

wolaRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Wol Roll End ----------------------------

// ---------------------------------- Sz Roll Start ----------------------------

let szczRoll = document.getElementById('szcz-artb');

const skillRollSzcz = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + sz;

}

szczRoll.addEventListener('click', skillRollSzcz);

szczRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Sz Roll End ----------------------------

// ---------------------------------- Alch Roll Start ----------------------------

let alchgnRoll = document.getElementById('alchgn-skill');

const skillRollAlchgn = () => {
    let min = 1;
    let max = 11;
    const alchgn = 1;
    document.querySelector('#alchgn').innerText = alchgn;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + rze + alchgn;

}

alchgnRoll.addEventListener('click', skillRollAlchgn);

alchgnRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
    
})

// ---------------------------------- Alch Roll End ---------------------------- 

// ---------------------------------- Atl Roll Start ----------------------------

let atlgnRoll = document.getElementById('atlgn-skill');

const skillRollAtlgn = () => {
    let min = 1;
    let max = 11;
    const atlgn = 6;
    document.querySelector('#atlgn').innerText = atlgn;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + zr + atlgn;

}


atlgnRoll.addEventListener('click', skillRollAtlgn);

atlgnRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Atl Roll End ----------------------------



// ---------------------------------- Czuj Roll Start ----------------------------

let czujRoll = document.getElementById('czujgn-skill');

const skillRollCzuj = () => {
    let min = 1;
    let max = 11;
    const czuj = 2;
    document.querySelector('#czujgn').innerText = czuj;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + czuj;

}

czujRoll.addEventListener('click', skillRollCzuj);

czujRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Czuj Roll End ----------------------------


// ---------------------------------- Ded Roll Start ----------------------------

let dedRoll = document.getElementById('dedgn-skill');

const skillRollDed = () => {
    let min = 1;
    let max = 11;
    const ded = 1;
    document.querySelector('#dedgn').innerText = ded;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + ded;

}

dedRoll.addEventListener('click', skillRollDed);

dedRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Ded Roll End ----------------------------

// ---------------------------------- Jez Roll Start ----------------------------

let jezRoll = document.getElementById('jezgn-skill');

const skillRollJez = () => {
    let min = 1;
    let max = 11;
    const jez = 1;
    document.querySelector('#jezgn').innerText = jez;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + jez;

}

jezRoll.addEventListener('click', skillRollJez);

jezRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Jez Roll End ----------------------------

// ---------------------------------- Pos Roll Start ----------------------------

let posRoll = document.getElementById('posgn-skill');

const skillRollPos = () => {
    let min = 1;
    let max = 11;
    const pos = 5;
    document.querySelector('#posgn').innerText = pos;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + cia + pos;

}

posRoll.addEventListener('click', skillRollPos);

posRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Pos Roll End ----------------------------

// ---------------------------------- Prze Roll Start ----------------------------

let przeRoll = document.getElementById('przegn-skill');

const skillRollPrze = () => {
    let min = 1;
    let max = 11;
    const prze = 1;
    document.querySelector('#przegn').innerText = prze;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + prze;

}

przeRoll.addEventListener('click', skillRollPrze);

przeRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Prze Roll End ----------------------------

// ---------------------------------- Rzucza Roll Start ----------------------------

let rzuczaRoll = document.getElementById('rzuczagn-skill');

const skillRollRzucza = () => {
    let min = 1;
    let max = 11;
    const rzucza = 6;
    document.querySelector('#rzuczagn').innerText = rzucza;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + rzucza;

}

rzuczaRoll.addEventListener('click', skillRollRzucza);

rzuczaRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Rzucza Roll End ----------------------------

// ---------------------------------- Skra Roll Start ----------------------------

let skraRoll = document.getElementById('skragn-skill');

const skillRollSkra = () => {
    let min = 1;
    let max = 11;
    const skra = 1;
    document.querySelector('#skragn').innerText = skra;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + zr + skra;

}

skraRoll.addEventListener('click', skillRollSkra);

skraRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Skra Roll End ----------------------------

// ---------------------------------- Szer Roll Start ----------------------------

let szerRoll = document.getElementById('szergn-skill');

const skillRollSzer = () => {
    let min = 1;
    let max = 11;
    const szer = 6;
    document.querySelector('#szergn').innerText = szer;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + szer;

}

szerRoll.addEventListener('click', skillRollSzer);

szerRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Szer Roll End ----------------------------

// ---------------------------------- Unik Roll Start ----------------------------

let unikRoll = document.getElementById('unikgn-skill');

const skillRollUnik = () => {
    let min = 1;
    let max = 11;
    const unik = 6;
    document.querySelector('#unikgn').innerText = unik;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + unik;

}

unikRoll.addEventListener('click', skillRollUnik);

unikRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Unik Roll End ----------------------------

// ---------------------------------- Zegl Roll Start ----------------------------

let zegRoll = document.getElementById('zeggn-skill');

const skillRollZeg = () => {
    let min = 1;
    let max = 11;
    const zeg = 1;
    document.querySelector('#zeggn').innerText = zeg;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + zeg;

}

zegRoll.addEventListener('click', skillRollZeg);

zegRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Zegl Roll End ----------------------------

// ---------------------------------- Mgc-Tr Roll Start ----------------------------

let mgcTrRoll = document.querySelector('.roll-btn');

const skillRollMgcTr = () => {
    let min = 1;
    let max = 11;
    const witr = 1;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + witr;

}

mgcTrRoll.addEventListener('click', skillRollMgcTr);

mgcTrRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Mgc-Tr Roll End ----------------------------


// ---------------------------------- Skills Perma Roll End ----------------------------

document.querySelector('#alchgn').innerText = 1;
document.querySelector('#atlgn').innerText = 6;
document.querySelector('#czujgn').innerText = 2;
document.querySelector('#dedgn').innerText = 1;
document.querySelector('#jezgn').innerText = 1;
document.querySelector('#posgn').innerText = 5;
document.querySelector('#przegn').innerText = 1;
document.querySelector('#rzuczagn').innerText = 6;
document.querySelector('#skragn').innerText = 1;
document.querySelector('#szergn').innerText = 6;
document.querySelector('#unikgn').innerText = 6;
document.querySelector('#zeggn').innerText = 1;