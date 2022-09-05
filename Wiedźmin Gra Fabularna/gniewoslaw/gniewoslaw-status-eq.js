const storageInputgnh = document.querySelector('.storagegnh');
const textgnh = document.querySelector('.textgnh');
const buttongnh = document.querySelector('.buttongnh');
const storedInputgnh = localStorage.getItem('textinputgnh');

if(storageInputgnh) {
    textgnh.textContent = storedInputgnh
};

storageInputgnh.addEventListener('input', letter => {
    textgnh.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('textinputgnh', textgnh.textContent)
};

buttongnh.addEventListener('click', saveToLocalStorage);

// -----------------------------------------------------------------

const storageInputgnv = document.querySelector('.storagegnv');
const textgnv = document.querySelector('.textgnv');
const buttongnv = document.querySelector('.buttongnv');
const storedInputgnv = localStorage.getItem('textinputgnv');

if(storageInputgnv) {
    textgnv.textContent = storedInputgnv
};

storageInputgnv.addEventListener('input', letter => {
    textgnv.textContent = letter.target.value
});

const saveToLocalStoragegnv = () => {
    localStorage.setItem('textinputgnv', textgnv.textContent)
};

buttongnv.addEventListener('click', saveToLocalStoragegnv);

// -----------------------------------------------------------------

const storageInputgnm = document.querySelector('.storagegnm');
const textgnm = document.querySelector('.textgnm');
const buttongnm = document.querySelector('.buttongnm');
const storedInputgnm = localStorage.getItem('textinputgnm');

if(storageInputgnm) {
    textgnm.textContent = storedInputgnm
};

storageInputgnm.addEventListener('input', letter => {
    textgnm.textContent = letter.target.value
});

const saveToLocalStoragem = () => {
    localStorage.setItem('textinputgnm', textgnm.textContent)
};

buttongnm.addEventListener('click', saveToLocalStoragem);

// -----------------------------------------------------------------

const storageInputgnp = document.querySelector('.storagegnp');
const textgnp = document.querySelector('.textgnp');
const buttongnp = document.querySelector('.buttongnp');
const storedInputgnp = localStorage.getItem('textinputgnp');

if(storageInputgnp) {
    textgnp.textContent = storedInputgnp
};

storageInputgnp.addEventListener('input', letter => {
    textgnp.textContent = letter.target.value
});

const saveToLocalStoragegnp = () => {
    localStorage.setItem('textinputgnp', textgnp.textContent)
};

buttongnp.addEventListener('click', saveToLocalStoragegnp);

// -----------------------------------------------------------------

const storageInputgng = document.querySelector('.storagegng');
const textgng = document.querySelector('.textgng');
const buttongng = document.querySelector('.buttongng');
const storedInputgng = localStorage.getItem('textinputgng');

if(storageInputgng) {
    textgng.textContent = storedInputgng
};

storageInputgng.addEventListener('input', letter => {
    textgng.textContent = letter.target.value
});

const saveToLocalStoragegng = () => {
    localStorage.setItem('textinputgng', textgng.textContent)
};

buttongng.addEventListener('click', saveToLocalStoragegng);

// -----------------------------------------------------------------

const storageInputgnt = document.querySelector('.storagegnt');
const textgnt = document.querySelector('.textgnt');
const buttongnt = document.querySelector('.buttongnt');
const storedInputgnt = localStorage.getItem('textinputgnt');

if(storageInputgnt) {
    textgnt.textContent = storedInputgnt
};

storageInputgnt.addEventListener('input', letter => {
    textgnt.textContent = letter.target.value
});

const saveToLocalStoraget = () => {
    localStorage.setItem('textinputgnt', textgnt.textContent)
};

buttongnt.addEventListener('click', saveToLocalStoraget);

// -----------------------------------------------------------------

const storageInputgnn = document.querySelector('.storagegnn');
const textgnn = document.querySelector('.textgnn');
const buttongnn = document.querySelector('.buttongnn');
const storedInputgnn = localStorage.getItem('textinputgnn');

if(storageInputgnn) {
    textgnn.textContent = storedInputgnn
};

storageInputgnn.addEventListener('input', letter => {
    textgnn.textContent = letter.target.value
});

const saveToLocalStoragegnn = () => {
    localStorage.setItem('textinputgnn', textgnn.textContent)
};

buttongnn.addEventListener('click', saveToLocalStoragegnn);


// ----------------------- This code adds sounds to buttons when clicked

const skillBtn = document.querySelector('.buttongnp').addEventListener('click', function() {
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


const moneyBtn = document.querySelector('.buttongnm').addEventListener('click', function() {
    document.querySelector('#money-audio').play();
});

const headBtn = document.querySelector('.buttongng').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const torsoBtn = document.querySelector('.buttongnt').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const legsBtn = document.querySelector('.buttongnn').addEventListener('click', function() {
    document.querySelector('#armour-audio').play();
});

const vigorBtn = document.querySelector('.buttongnv').addEventListener('click', function() {
    document.querySelector('#vigor-audio').play();
});

// ----------------------- This code adds glow animation to skill box when skills points > 0

const skillBox = document.querySelector('.upgradegnp');
const skillPoints = document.querySelector('.textgnp')

console.log(skillBox);
console.log(skillPoints);
console.log(skillBtn);

if(skillPoints.innerText > 0) {
    skillBox.classList.add('animation');
}




