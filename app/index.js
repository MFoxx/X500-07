const base = document.getElementById('podstava');
const baseValue = document.getElementById('podstavaValue');
const baseReset = document.getElementById('resetPodstava');
const hand01 = document.getElementById('rameno1');
const hand01Value = document.getElementById('rameno1Value');
const hand01Reset = document.getElementById('resetRameno01');

let socket = io.connect('http://localhost:8080');

base.addEventListener('input', () => {
	let x = base.value;
	baseValue.innerHTML = x;
	socket.emit('inputBase', x);
});

baseReset.addEventListener('click', () => {
	socket.emit('resetBase');
	baseValue.innerHTML = '90';
	base.value = 90;
});

hand01.addEventListener('input', () => {
	let x = hand01.value;
	socket.emit('inputHand01', x);
	hand01Value.innerHTML = x;
});

hand01Reset.addEventListener('click', () => {
	socket.emit('resetHand01');
	hand01Value.innerHTML = '90';
	hand01.value = 90;
});
