let pantalla = document.getElementById("pantalla");
let botones = document.getElementById("botones");

const valores = [
    "C","/","*","←",
    "7","8","9","-",
    "4","5","6","+",
    "1","2","3","=",
    "0","."
];

valores.forEach(v => {
    let btn = document.createElement("button");
    btn.textContent = v;
    btn.onclick = () => accion(v);
    botones.appendChild(btn);
});

function accion(v){
    if(v==="C") pantalla.value="";
    else if(v==="←") pantalla.value=pantalla.value.slice(0,-1);
    else if(v==="="){
        try{
            pantalla.value=eval(pantalla.value);
        }catch{
            pantalla.value="Error";
        }
    }else{
        pantalla.value+=v;
    }
}

/* ===== MENU ANIMADO ===== */
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

/* cerrar al hacer clic fuera */
function closeMenu(){
    document.getElementById("menu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}