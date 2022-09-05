// This app sets Mereth's main attributes and makes dice rolls. 
// It makes d10 roll and adds specific attributes to total sum.
// All outcome is printed in dialog popup.

// ---------------------------------- Modal Start ----------------------------


let rollOutcome = document.getElementById('d10-roll');
let rollSum = document.getElementById('sum');

// ---------------------------------- Modal End ----------------------------


// ---------------------------------- Attributes Start ----------------------------

const int = 10;
document.getElementById('int').innerText = int;

const ref = 10;
document.getElementById('ref').innerText = ref;

const zr = 5;
document.getElementById('zr').innerText = zr;

const cia = 5;
document.getElementById('cia').innerText = cia;

const szy = 5;
document.getElementById('szy').innerText = szy;

const emp = 5;
document.getElementById('emp').innerText = emp;

const rze = 10;
document.getElementById('rze').innerText = rze;

const wol = 5;
document.getElementById('wol').innerText = wol;

const sz = 5;
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

let alchseRoll = document.getElementById('alchse-skill');

const skillRollAlchse = () => {
    let min = 1;
    let max = 11;
    const alchse = 6;
    document.querySelector('#alchse').innerText = alchse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + rze + alchse;

}

alchseRoll.addEventListener('click', skillRollAlchse);

alchseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
    
})

// ---------------------------------- Alch Roll End ---------------------------- 

// ---------------------------------- Char Roll Start ----------------------------

let charseRoll = document.getElementById('charse-skill');

const skillRollCharse = () => {
    let min = 1;
    let max = 11;
    const charse = 1;
    document.querySelector('#charse').innerText = charse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + charse;

}


charseRoll.addEventListener('click', skillRollCharse);

charseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Char Roll End ----------------------------



// ---------------------------------- Ded Roll Start ----------------------------

let dedseRoll = document.getElementById('dedse-skill');

const skillRollDedse = () => {
    let min = 1;
    let max = 11;
    const dedse = 1;
    document.querySelector('#dedse').innerText = dedse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + dedse;

}

dedseRoll.addEventListener('click', skillRollDedse);

dedseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Ded Roll End ----------------------------


// ---------------------------------- Jez Roll Start ----------------------------

let jezseRoll = document.getElementById('jezse-skill');

const skillRollJezse = () => {
    let min = 1;
    let max = 11;
    const jezse = 1;
    document.querySelector('#jezse').innerText = jezse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + jezse;

}

jezseRoll.addEventListener('click', skillRollJezse);

jezseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Jez Roll End ----------------------------

// ---------------------------------- Lep-Re Roll Start ----------------------------

let lepreseRoll = document.getElementById('leprese-skill');

const skillRollLeprese = () => {
    let min = 1;
    let max = 11;
    const leprese = 5;
    document.querySelector('#leprese').innerText = leprese;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + zr + leprese;

}

lepreseRoll.addEventListener('click', skillRollLeprese);

lepreseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Lep-Re Roll End ----------------------------

// ---------------------------------- Mał-Os Roll Start ----------------------------

let malosseRoll = document.getElementById('malosse-skill');

const skillRollMalosse = () => {
    let min = 1;
    let max = 11;
    const malosse = 5;
    document.querySelector('#malosse').innerText = malosse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + malosse;

}

malosseRoll.addEventListener('click', skillRollMalosse);

malosseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Mał-Os Roll End ----------------------------

// ---------------------------------- Odwa Roll Start ----------------------------

let odwaseRoll = document.getElementById('odwase-skill');

const skillRollOdwase = () => {
    let min = 1;
    let max = 11;
    const odwase = 1;
    document.querySelector('#odwase').innerText = odwase;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + odwase;

}

odwaseRoll.addEventListener('click', skillRollOdwase);

odwaseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Odwa Roll End ----------------------------

// ---------------------------------- Pier-Po Roll Start ----------------------------

let pierposeRoll = document.getElementById('pierpose-skill');

const skillRollPierpose = () => {
    let min = 1;
    let max = 11;
    const pierpose = 1;
    document.querySelector('#pierpose').innerText = pierpose;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + rze + pierpose;

}

pierposeRoll.addEventListener('click', skillRollPierpose);

pierposeRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Pier-Po Roll End ----------------------------

// ---------------------------------- Przed Roll Start ----------------------------

let przedseRoll = document.getElementById('przedse-skill');

const skillRollPrzedse = () => {
    let min = 1;
    let max = 11;
    const przedse = 1;
    document.querySelector('#przedse').innerText = przedse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + przedse;

}

przedseRoll.addEventListener('click', skillRollPrzedse);

przedseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Przed Roll End ----------------------------

// ---------------------------------- Przeko Roll Start ----------------------------

let przekoseRoll = document.getElementById('przekose-skill');

const skillRollPrzekose = () => {
    let min = 1;
    let max = 11;
    const przekose = 2;
    document.querySelector('#przekose').innerText = przekose;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + przekose;

}

przekoseRoll.addEventListener('click', skillRollPrzekose);

przekoseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Przeko Roll End ----------------------------

// ---------------------------------- Prze Roll Start ----------------------------

let przeseRoll = document.getElementById('przese-skill');

const skillRollPrzese = () => {
    let min = 1;
    let max = 11;
    const przese = 2;
    document.querySelector('#przese').innerText = przese;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + przese;

}

przeseRoll.addEventListener('click', skillRollPrzese);

przeseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Prze Roll End ----------------------------

// ---------------------------------- Unik Roll Start ----------------------------

let unikseRoll = document.getElementById('unikse-skill');

const skillRollUnikse = () => {
    let min = 1;
    let max = 11;
    const unikse = 0;
    document.querySelector('#unikse').innerText = unikse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + unikse;

}

unikseRoll.addEventListener('click', skillRollUnikse);

unikseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Unik Roll End ----------------------------

// ---------------------------------- Savive Roll Start ----------------------------

let saviveseRoll = document.getElementById('savivese-skill');

const skillRollSavivese = () => {
    let min = 1;
    let max = 11;
    const savivese = 1;
    document.querySelector('#savivese').innerText = savivese;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + savivese;

}

saviveseRoll.addEventListener('click', skillRollSavivese);

saviveseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Savive Roll End ----------------------------

// ---------------------------------- Wyksz Roll Start ----------------------------

let wykszseRoll = document.getElementById('wykszse-skill');

const skillRollWykszse = () => {
    let min = 1;
    let max = 11;
    const wykszse = 5;
    document.querySelector('#wykszse').innerText = wykszse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + wykszse;

}

wykszseRoll.addEventListener('click', skillRollWykszse);

wykszseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Wyksz Roll End ----------------------------

// ---------------------------------- Zim-Kr Roll Start ----------------------------

let zimkreseRoll = document.getElementById('zimkrese-skill');

const skillRollZimkrese = () => {
    let min = 1;
    let max = 11;
    const zimkrese = 1;
    document.querySelector('#zimkrese').innerText = zimkrese;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + zimkrese;

}

zimkreseRoll.addEventListener('click', skillRollZimkrese);

zimkreseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Zim-Kr Roll End ----------------------------

// ---------------------------------- Zro-Emo Roll Start ----------------------------

let zroemoseRoll = document.getElementById('zroemose-skill');

const skillRollZroemose = () => {
    let min = 1;
    let max = 11;
    const zroemose = 1;
    document.querySelector('#zroemose').innerText = zroemose;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + zroemose;

}

zroemoseRoll.addEventListener('click', skillRollZroemose);

zroemoseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Zro-Emo Roll End ----------------------------

// ---------------------------------- Jez-Wsp Roll Start ----------------------------

let jezwspseRoll = document.getElementById('jezwspse-skill');

const skillRollJezwspse = () => {
    let min = 1;
    let max = 11;
    const jezwspse = 1;
    document.querySelector('#jezwspse').innerText = jezwspse;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + jezwspse;

}

jezwspseRoll.addEventListener('click', skillRollJezwspse);

jezwspseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Jez-Wsp Roll End ----------------------------

// ---------------------------------- Mow-Sta Roll Start ----------------------------

let mowstaseRoll = document.getElementById('mowstase-skill');

const skillRollMowstase = () => {
    let min = 1;
    let max = 11;
    const mowstase = 1;
    document.querySelector('#mowstase').innerText = mowstase;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + mowstase;

}

mowstaseRoll.addEventListener('click', skillRollMowstase);

mowstaseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Mow-Sta Roll End ----------------------------

// ---------------------------------- Jez-Kra Roll Start ----------------------------

let jezkraseRoll = document.getElementById('jezkrase-skill');

const skillRollJezkrase = () => {
    let min = 1;
    let max = 11;
    const jezkrase = 1;
    document.querySelector('#jezkrase').innerText = jezkrase;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + jezkrase;

}

jezkraseRoll.addEventListener('click', skillRollJezkrase);

jezkraseRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Jez-Kra Roll End ----------------------------

// ---------------------------------- Mgc-Tr Roll Start ----------------------------

let mgcTrRoll = document.querySelector('.roll-btn');

const skillRollMgcTr = () => {
    let min = 1;
    let max = 11;
    const witr = 1;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + rze + witr;

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