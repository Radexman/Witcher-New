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

const ref = 5;
document.getElementById('ref').innerText = ref;

const zr = 6;
document.getElementById('zr').innerText = zr;

const cia = 6;
document.getElementById('cia').innerText = cia;

const szy = 5;
document.getElementById('szy').innerText = szy;

const emp = 8;
document.getElementById('emp').innerText = emp;

const rze = 10;
document.getElementById('rze').innerText = rze;

const wol = 10;
document.getElementById('wol').innerText = wol;

const sz = 2;
document.getElementById('sz').innerText = sz;


// ---------------------------------- Attributes End ----------------------------

// ---------------------------------- Skills Start ----------------------------

const mgcTr = 1;
document.querySelector('.mgc-tr').innerText = mgcTr;

const alch = 3;
document.querySelector('#alch').innerText = alch;

const czuj = 2
document.querySelector('#czuj').innerText = czuj;

const ded = 3;
document.querySelector('#ded').innerText = ded;

const klon = 3;
document.querySelector('#klon').innerText = klon;

const koswl = 3;
document.querySelector('#koswl').innerText = koswl;

const lucz = 2;
document.querySelector('#lucz').innerText = lucz;

const magodp = 1;
document.querySelector('#magodp').innerText = magodp;

const ment = 6;
document.querySelector('#ment').innerText = ment;

const ryt = 2;
document.querySelector('#ryt').innerText = ryt;

const rzucza = 4;
document.querySelector('#rzucza').innerText = rzucza;

const savvive = 1;
document.querySelector('#savvive').innerText = savvive;

const styl = 1;
document.querySelector('#styl').innerText = styl;

const sztu = 1;
document.querySelector('#sztu').innerText = sztu;

const sciem = 2;
document.querySelector('#sciem').innerText = sciem;

const takty = 2;
document.querySelector('#takty').innerText = takty;

const uwo = 1;
document.querySelector('#uwo').innerText = uwo;

const wyksz = 4;
document.querySelector('#wyksz').innerText = wyksz;

const zroemo = 2;
document.querySelector('#zroemo').innerText = zroemo;

// ---------------------------------- Skills End ----------------------------


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

// ---------------------------------- Czuj Roll Start ----------------------------

let czujRoll = document.getElementById('czuj-skill');

const skillRollCzuj = () => {
    let min = 1;
    let max = 11;
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

// ---------------------------------- Zroemo Roll Start ----------------------------

let zroemoRoll = document.getElementById('zroemo-skill');

const skillRollZroemo = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + zroemo;

}

zroemoRoll.addEventListener('click', skillRollZroemo);

zroemoRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Zroemo Roll End ----------------------------



// ---------------------------------- Czuj Roll Start ----------------------------

let wykszRoll = document.getElementById('wyksz-skill');

const skillRollWyksz = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + wyksz;

}

wykszRoll.addEventListener('click', skillRollWyksz);

wykszRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Czuj Roll End ----------------------------


// ---------------------------------- Uwo Roll Start ----------------------------

let uwoRoll = document.getElementById('uwo-skill');

const skillRollUwo = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + uwo;

}

uwoRoll.addEventListener('click', skillRollUwo);

uwoRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Uwo Roll End ----------------------------

// ---------------------------------- Sztu Roll Start ----------------------------

let sztuRoll = document.getElementById('sztu-skill');

const skillRollSztu = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + sztu;

}

sztuRoll.addEventListener('click', skillRollSztu);

sztuRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Sztu Roll End ----------------------------

// ---------------------------------- Takty Roll Start ----------------------------

let taktyRoll = document.getElementById('takty-skill');

const skillRollTakty = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + takty;

}

taktyRoll.addEventListener('click', skillRollTakty);

taktyRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Takty Roll End ----------------------------

// ---------------------------------- Styl Roll Start ----------------------------

let stylRoll = document.getElementById('styl-skill');

const skillRollStyl = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + styl;

}

stylRoll.addEventListener('click', skillRollStyl);

stylRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Styl Roll End ----------------------------

// ---------------------------------- Savvive Roll Start ----------------------------

let savviveRoll = document.getElementById('savvive-skill');

const skillRollSavvive = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + savvive;

}

savviveRoll.addEventListener('click', skillRollSavvive);

savviveRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Savvive Roll End ----------------------------



// ---------------------------------- Rzucza Roll Start ----------------------------

let rzuczaRoll = document.getElementById('rzucza-skill');

const skillRollRzucza = () => {
    let min = 1;
    let max = 11;
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

// ---------------------------------- Ryt Roll Start ----------------------------

let rytRoll = document.getElementById('ryt-skill');

const skillRollRyt = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + ryt;

}

rytRoll.addEventListener('click', skillRollRyt);

rytRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Ryt Roll End ----------------------------


// ---------------------------------- Alch Roll Start ----------------------------

let alchRoll = document.getElementById('alch-skill');

const skillRollAlch = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + alch;

}

alchRoll.addEventListener('click', skillRollAlch);

alchRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Alch Roll End ----------------------------

// ---------------------------------- Lucz Roll Start ----------------------------

let luczRoll = document.getElementById('lucz-skill');

const skillRollLucz = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + zr + lucz;

}

luczRoll.addEventListener('click', skillRollLucz);

luczRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Lucz Roll End ----------------------------

// ---------------------------------- Sciem Roll Start ----------------------------

let sciemRoll = document.getElementById('sciem-skill');

const skillRollSciem = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp + sciem;

}

sciemRoll.addEventListener('click', skillRollSciem);

sciemRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Sciem Roll End ----------------------------


// ---------------------------------- Magodp Roll Start ----------------------------

let magodpRoll = document.getElementById('magodp-skill');

const skillRollMagodp = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + magodp;

}

magodpRoll.addEventListener('click', skillRollMagodp);

magodpRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Magodp Roll End ----------------------------


// ---------------------------------- Ded Roll Start ----------------------------

let dedRoll = document.getElementById('ded-skill');

const skillRollDed = () => {
    let min = 1;
    let max = 11;
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

// ---------------------------------- Koswl Roll Start ----------------------------

let koswlRoll = document.getElementById('koswl-skill');

const skillRollKoswl = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + ref + koswl;

}

koswlRoll.addEventListener('click', skillRollKoswl);

koswlRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Kosl Roll End ----------------------------

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

// ---------------------------------- Alch Roll Start ----------------------------

let klonRoll = document.getElementById('klon-skill');

const skillRollKlon = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol + klon;

}

klonRoll.addEventListener('click', skillRollKlon);

klonRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Alch Roll End ----------------------------

// ---------------------------------- Meny Roll Start ----------------------------

let mentRoll = document.getElementById('ment-skill');

const skillRollMent = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + ment;

}

mentRoll.addEventListener('click', skillRollMent);

mentRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Ment Roll End ----------------------------

// ---------------------------------- Emp Roll Start ----------------------------

let empRoll = document.getElementById('emp-artb');

const skillRollE = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + emp;

}

empRoll.addEventListener('click', skillRollE);

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

let wolRoll = document.getElementById('wol-artb');

const skillRollW = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + wol;

}

wolRoll.addEventListener('click', skillRollW);

wolRoll.addEventListener('click', () => {
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

// ---------------------------------- Wol Roll End ----------------------------

// ---------------------------------- Mgc-Tr Roll Start ----------------------------

let mgcTrRoll = document.querySelector('.roll-btn');

const skillRollMgcTr = () => {
    let min = 1;
    let max = 11;
    let roll = (Math.floor(Math.random() * (max - min) + min))
    rollOutcome.innerText = roll;
    rollSum.innerText = roll + int + mgcTr;

}

mgcTrRoll.addEventListener('click', skillRollMgcTr);

mgcTrRoll.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------- Mgc-Tr Roll End ----------------------------

