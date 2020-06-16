const podstava = document.getElementById("podstava");
const podstavaValue = document.getElementById("podstavaValue");
const podstavaReset = document.getElementById('resetPodstava');
const rameno1 = document.getElementById('rameno1');
const rameno1Value = document.getElementById('rameno1Value')
        

let socket  = io.connect('http://localhost:8080');

podstava.addEventListener('input', ()=> {  
    let x = podstava.value;
    podstavaValue.innerHTML = x;
    socket.emit('inputPodstava', x);
})

podstavaReset.addEventListener('click', () => {
    socket.emit('resetPodstava');
    podstavaValue.innerHTML = '90';
    podstava.value = 90;
})

rameno1.addEventListener('input', ()=>{
    let x = rameno1.value;
    socket.emit('inputRameno01', x);
    rameno1Value.innerHTML = x;
})