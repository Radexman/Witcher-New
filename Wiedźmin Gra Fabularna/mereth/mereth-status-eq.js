const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');

if(storageInput) {
    text.textContent = storedInput
};

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
};

button.addEventListener('click', saveToLocalStorage);

// -----------------------------------------------------------------

const storageInputv = document.querySelector('.storagev');
const textv = document.querySelector('.textv');
const buttonv = document.querySelector('.buttonv');
const storedInputv = localStorage.getItem('textinputv');

if(storageInputv) {
    textv.textContent = storedInputv
};

storageInputv.addEventListener('input', letter => {
    textv.textContent = letter.target.value
});

const saveToLocalStoragev = () => {
    localStorage.setItem('textinputv', textv.textContent)
};

buttonv.addEventListener('click', saveToLocalStoragev);

// -----------------------------------------------------------------

const storageInputm = document.querySelector('.storagem');
const textm = document.querySelector('.textm');
const buttonm = document.querySelector('.buttonm');
const storedInputm = localStorage.getItem('textinputm');

if(storageInputm) {
    textm.textContent = storedInputm
};

storageInputm.addEventListener('input', letter => {
    textm.textContent = letter.target.value
});

const saveToLocalStoragem = () => {
    localStorage.setItem('textinputm', textm.textContent)
};

buttonm.addEventListener('click', saveToLocalStoragem);

// -----------------------------------------------------------------

const storageInputp = document.querySelector('.storagep');
const textp = document.querySelector('.textp');
const buttonp = document.querySelector('.buttonp');
const storedInputp = localStorage.getItem('textinputp');

if(storageInputp) {
    textp.textContent = storedInputp
};

storageInputp.addEventListener('input', letter => {
    textp.textContent = letter.target.value
});

const saveToLocalStoragep = () => {
    localStorage.setItem('textinputp', textp.textContent)
};

buttonp.addEventListener('click', saveToLocalStoragep);

// -----------------------------------------------------------------

const storageInputg = document.querySelector('.storageg');
const textg = document.querySelector('.textg');
const buttong = document.querySelector('.buttong');
const storedInputg = localStorage.getItem('textinputg');

if(storageInputg) {
    textg.textContent = storedInputg
};

storageInputg.addEventListener('input', letter => {
    textg.textContent = letter.target.value
});

const saveToLocalStorageg = () => {
    localStorage.setItem('textinputg', textg.textContent)
};

buttong.addEventListener('click', saveToLocalStorageg);

// -----------------------------------------------------------------

const storageInputt = document.querySelector('.storaget');
const textt = document.querySelector('.textt');
const buttont = document.querySelector('.buttont');
const storedInputt = localStorage.getItem('textinputt');

if(storageInputt) {
    textt.textContent = storedInputt
};

storageInputt.addEventListener('input', letter => {
    textt.textContent = letter.target.value
});

const saveToLocalStoraget = () => {
    localStorage.setItem('textinputt', textt.textContent)
};

buttont.addEventListener('click', saveToLocalStoraget);

// -----------------------------------------------------------------

const storageInputn = document.querySelector('.storagen');
const textn = document.querySelector('.textn');
const buttonn = document.querySelector('.buttonn');
const storedInputn = localStorage.getItem('textinputn');

if(storageInputn) {
    textn.textContent = storedInputn
};

storageInputn.addEventListener('input', letter => {
    textn.textContent = letter.target.value
});

const saveToLocalStoragen = () => {
    localStorage.setItem('textinputn', textn.textContent)
};

buttonn.addEventListener('click', saveToLocalStoragen);


// ----------------------- This code adds sounds to buttons when clicked

const skillBtn = document.querySelector('.buttonp').addEventListener('click', function() {
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

const moneyBtn = document.querySelector('.buttonm').addEventListener('click', function() {
    document.querySelector('#money-audio').play();
});

const headBtn = document.querySelector('.buttong').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const torsoBtn = document.querySelector('.buttont').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const legsBtn = document.querySelector('.buttonn').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const vigorBtn = document.querySelector('.buttonv').addEventListener('click', function() {
    document.querySelector('#vigor-audio').play();
});

// ----------------------- This code adds glow animation to skill box when skills points > 0

const skillBox = document.querySelector('.upgrade');
const skillPoints = document.querySelector('.textp')

console.log(skillBox);
console.log(skillPoints);
console.log(skillBtn);

if(skillPoints.innerText > 0) {
    skillBox.classList.add('animation');
}




