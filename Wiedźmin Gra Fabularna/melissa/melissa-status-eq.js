const storageInputseh = document.querySelector('.storageseh');
const textseh = document.querySelector('.textseh');
const buttonseh = document.querySelector('.buttonseh');
const storedInputseh = localStorage.getItem('textinputseh');

if(storageInputseh) {
    textseh.textContent = storedInputseh
};

storageInputseh.addEventListener('input', letter => {
    textseh.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('textinputseh', textseh.textContent)
};

buttonseh.addEventListener('click', saveToLocalStorage);

// -----------------------------------------------------------------

const storageInputsev = document.querySelector('.storagesev');
const textsev = document.querySelector('.textsev');
const buttonsev = document.querySelector('.buttonsev');
const storedInputsev = localStorage.getItem('textinputsev');

if(storageInputsev) {
    textsev.textContent = storedInputsev
};

storageInputsev.addEventListener('input', letter => {
    textsev.textContent = letter.target.value
});

const saveToLocalStoragesev = () => {
    localStorage.setItem('textinputsev', textsev.textContent)
};

buttonsev.addEventListener('click', saveToLocalStoragesev);

// -----------------------------------------------------------------

const storageInputsem = document.querySelector('.storagesem');
const textsem = document.querySelector('.textsem');
const buttonsem = document.querySelector('.buttonsem');
const storedInputsem = localStorage.getItem('textinputsem');

if(storageInputsem) {
    textsem.textContent = storedInputsem
};

storageInputsem.addEventListener('input', letter => {
    textsem.textContent = letter.target.value
});

const saveToLocalStorasem = () => {
    localStorage.setItem('textinputsem', textsem.textContent)
};

buttonsem.addEventListener('click', saveToLocalStorasem);

// -----------------------------------------------------------------

const storageInputsep = document.querySelector('.storagesep');
const textsep = document.querySelector('.textsep');
const buttonsep = document.querySelector('.buttonsep');
const storedInputsep = localStorage.getItem('textinputsep');

if(storageInputsep) {
    textsep.textContent = storedInputsep
};

storageInputsep.addEventListener('input', letter => {
    textsep.textContent = letter.target.value
});

const saveToLocalStoragesep = () => {
    localStorage.setItem('textinputsep', textsep.textContent)
};

buttonsep.addEventListener('click', saveToLocalStoragesep);

// -----------------------------------------------------------------

const storageInputseg = document.querySelector('.storageseg');
const textseg = document.querySelector('.textseg');
const buttonseg = document.querySelector('.buttonseg');
const storedInputseg = localStorage.getItem('textinputseg');

if(storageInputseg) {
    textseg.textContent = storedInputseg
};

storageInputseg.addEventListener('input', letter => {
    textseg.textContent = letter.target.value
});

const saveToLocalStorageseg = () => {
    localStorage.setItem('textinputseg', textseg.textContent)
};

buttonseg.addEventListener('click', saveToLocalStorageseg);

// -----------------------------------------------------------------

const storageInputset = document.querySelector('.storageset');
const textset = document.querySelector('.textset');
const buttonset = document.querySelector('.buttonset');
const storedInputset = localStorage.getItem('textinputset');

if(storageInputset) {
    textset.textContent = storedInputset
};

storageInputset.addEventListener('input', letter => {
    textset.textContent = letter.target.value
});

const saveToLocalStoraget = () => {
    localStorage.setItem('textinputset', textset.textContent)
};

buttonset.addEventListener('click', saveToLocalStoraget);

// -----------------------------------------------------------------

const storageInputsen = document.querySelector('.storagesen');
const textsen = document.querySelector('.textsen');
const buttonsen = document.querySelector('.buttonsen');
const storedInputsen = localStorage.getItem('textinputsen');

if(storageInputsen) {
    textsen.textContent = storedInputsen
};

storageInputsen.addEventListener('input', letter => {
    textsen.textContent = letter.target.value
});

const saveToLocalStoragesen = () => {
    localStorage.setItem('textinputsen', textsen.textContent)
};

buttonsen.addEventListener('click', saveToLocalStoragesen);


// ----------------------- This code adds sounds to buttons when clicked

const skillBtn = document.querySelector('.buttonsep').addEventListener('click', function() {
    document.getElementById('level-up-audio').play();
});

const intBtn = document.getElementById('int-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const refBtn = document.getElementById('ref-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const zrBtn = document.getElementById('zr-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const ciaBtn = document.getElementById('cia-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const szyBtn = document.getElementById('szy-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const empBtn = document.getElementById('emp-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const rzeBtn = document.getElementById('rze-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const wolBtn = document.getElementById('wol-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const szczBtn = document.getElementById('szcz-artb').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const mgcTrBtn = document.querySelector('.roll-btn').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});

const skillRollBtn = document.querySelector('.skill-roll-btn').addEventListener('click', function() {
    document.querySelector('.dice-roll-audio').play();
});


const moneyBtn = document.querySelector('.buttonsem').addEventListener('click', function() {
    document.querySelector('#money-audio').play();
});

const headBtn = document.querySelector('.buttonseg').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const torsoBtn = document.querySelector('.buttonset').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const legsBtn = document.querySelector('.buttonsen').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const vigorBtn = document.querySelector('.buttonsev').addEventListener('click', function() {
    document.querySelector('#vigor-audio').play();
});

// ----------------------- This code adds glow animation to skill box when skills points > 0

const skillBox = document.querySelector('.upgradesep');
const skillPoints = document.querySelector('.textsep')

console.log(skillBox);
console.log(skillPoints);
console.log(skillBtn);

if(skillPoints.innerText > 0) {
    skillBox.classList.add('animation');
}




