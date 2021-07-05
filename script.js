const btn = document.querySelector('button');
const message = document.querySelector(".message");
btn.addEventListener('click', () => {
    const tip = document.querySelector("input");
    let tipvalue = (tip.value * 0.15).toFixed(2);
    message.innerHTML = `<h3>You should tip $${tipvalue}</h3> `

})