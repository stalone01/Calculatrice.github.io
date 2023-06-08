//recuperation des touches avec Dom
const touches =[...document.querySelectorAll('.bouton')];
const ecran = document.querySelector('.ecran');
//recuperation des keycodes des touches
const listeKeycode = touches.map(touche => touche.dataset.key);
console.log(listeKeycode);
document.addEventListener('keydown',(e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur =e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){
       switch(valeur){
        case '8' : 
            ecran.textContent = "";
            break;
        case '13' :
            const calcul = eval(ecran.textContent);
            ecran.textContent = calcul;
            break;
        default :
            const indexKeycode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeycode];
            ecran.textContent += touche.innerHTML;
       } 
    }

}
window.addEventListener('error', (e)=>{
    alert('MATH ERROR ');
})